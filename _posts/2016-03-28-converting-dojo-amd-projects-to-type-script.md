---
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
tags:
  - javascript
  - typescript
date: 2016-03-28 15:49:19
title: Converting Dojo-AMD Projects To TypeScript
categories:
  - Developer
---

At some point in every TypeScript introduction that I have been to, the presenter says something to the effect of:

>Since TypeScript is a superset of JavaScript, all JavaScript is valid TypeScript. Getting started is easy. Just change the file name extensions from `.js` to `.ts` and then incrementally upgrade your code to TypeScript.

For Dojo/AMD-based projects, I’ve found this statement a little too good to be true. Following are the changes that I had to make (after changing the file extensions) to get the project back up and running again.

### Module Imports
The first issue that I encountered was that my AMD module declaration did not work. While TypeScript can output AMD modules I couldn't find a way to author `.ts` file using AMD. So the first step was to convert all of my modules to the ES6-style that TypeScript uses. For example, this AMD module:

```js
define([
    'dijit/_WidgetBase',

    'app/ToasterItem',

    'dojo/aspect',
    'dojo/_base/declare'
], function (
    _WidgetBase,

    ToasterItem,

    aspect,
    declare
) {
    return declare([_WidgetBase], {...});
});
```

Would need to be changed to something like this:

```ts
import * as _WidgetBase from 'dijit/_WidgetBase';

import ToasterItem, { ToasterItemType } from './ToasterItem';

import * as aspect from 'dojo/aspect';
import * as dojoDeclare from 'dojo/_base/declare';

export default dojoDeclare([_WidgetBase, _TemplatedMixin], {...});
```

The understanding that I worked off of was that the `import * as ModuleName from 'path/to/Module'` format was for importing non-TypeScript/AMD modules (no default export) and `import ModuleName from 'ModuleName'` was for importing TypeScript modules.

Notice that I did not use `declare` as the import name for `dojo/_base/declare`. This is to prevent collisions with TypeScript's `declare` keyword.

**Note:** If you are going to be exporting your TypeScript class to AMD modules then non-TypeScript consumers will need to update their code to use the `default` property of the return module parameter (e.g. `new Module.default(...);`).

### AMD Loader Plugins
The next problem that I encountered was trying to use the `dojo/text!` AMD plugin. The root of the problem is that [the current version of TypeScript doesn't support globbing of AMD modules](https://github.com/dojo/typings#amd-plugin-globbing). There is an [issue](https://github.com/Microsoft/TypeScript/issues/6615) that you can follow that shows promise of a resolution to this problem in the future but for now we need a workaround.

The workaround to the problem is a bit of a pain. You need to declare an [ambient declaration](https://www.typescriptlang.org/docs/handbook/modules.html) for each URL that you want to use with `dojo/text!`. For example:

```ts
declare module 'dojo/text!./templates/ToasterItem.html' {
    const ToasterItem: string;
    export = ToasterItem;
}
declare module 'dojo/text!./templates/Toaster.html' {
    const Toaster: string;
    export = Toaster
}
```

### Exporting Types in Modules
For TypeScript modules that I used in other TypeScript modules I had to export the types in order to make the transpiler happy. So this meant a lot of duplicate property names and types between my `dojo/_base/declare` call and the type exports. For example:

```ts
export type ToasterItemType = dijit._WidgetBase & dijit._TemplatedMixin & {
    duration: number;
    show(): void;
};
export default dojoDeclare([_WidgetBase, _TemplatedMixin], {
    duration: 5000,
    show() {...}
});
```

These were the major gotcha's that ran into when trying to convert a project to TypeScript. [Here's a link](https://github.com/agrc-widgets/toaster) to a simple project that I recently ported to TypeScript. It has almost no TypeScript upgrades (yet) other than what it took to get the project to run.

The [dojo/typings](https://github.com/dojo/typings) repository is the source for ambient declarations for Dojo 1.x code and also has a lot of great resources to help convert Dojo-based projects to TypeScript.

