---
title: 'Make Old Dojo Builds More Beautiful With UglifyJS'
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
date: 2019-03-21 20:21:19
categories:
  - Developer
tags:
  - dojo
  - javascript
---

Do you have an old project that uses the Dojo Build System (DBS) that has suddenly refused to build? I've come across this issue recently and it can be frustrating. Getting the DBS to work initially can be a daunting task in and of itself. But to add insult to injury, I've had builds break without any changes to the codebase. I'm not sure if it's related to upgrading NodeJS or some other dependency but the DBS recently started coughing up error messages similar to the following:

```
error(356) The optimizer threw an exception; the module probably contains syntax errors. module identifier: esri/layers/vectorTiles/views/webgl/Program; exception: TypeError [ERR_INVALID_CALLBACK]: Callback must be a function TypeError [ERR_INVALID_CALLBACK]: Callback must be a function
    at maybeCallback (fs.js:129:9)
    at Object.writeFile (fs.js:1156:14)
    at uglify (/Users/stdavis/Documents/Projects/deq-enviro/src/util/build/transforms/optimizer/uglify_worker.js:39:8)
    at process.<anonymous> (/Users/stdavis/Documents/Projects/deq-enviro/src/util/build/transforms/optimizer/uglify_worker.js:61:17)
    at process.emit (events.js:182:13)
    at emit (internal/child_process.js:812:12)
    at process._tickCallback (internal/process/next_tick.js:63:19)
```

```
error(356) The optimizer threw an exception; the module probably contains syntax errors. module identifier: dijit/form/nls/de/ComboBox; ex
ception: TypeError: UglifyJS.Compressor is not a function TypeError: UglifyJS.Compressor is not a function
    at uglify (/Users/stdavis/Documents/Projects/deq-enviro/src/util/build/transforms/optimizer/uglify_worker.js:18:30)
    at process.<anonymous> (/Users/stdavis/Documents/Projects/deq-enviro/src/util/build/transforms/optimizer/uglify_worker.js:61:17)
    at process.emit (events.js:182:13)
    at emit (internal/child_process.js:812:12)
    at process._tickCallback (internal/process/next_tick.js:63:19)
```

The trouble seemed to be related to using an older version of UglifyJS. However, upgrading it to work with the dated DBS was not working. Fortunately for me, I have smart co-workers. Among them is Mr. [Steve Gourley](https://twitter.com/steveagrc) who had the great idea of doing minification outside of the DBS after it has done all of the concatenation, interning of strings, etc. This allows us to have more fine-tuned control over which files actually get minified and more flexibility with upgrading independent of Dojo. Applying this idea to my projects that had the spontaneously failing builds solved the issue.

The first step is to disable minification in the DBS. This is usually done via the build profile:
```js
var profile = {
    optimize: false,
    layerOptimize: false
};
```

You can remove the `stripConsole` property also if it's in your profile. UglifyJS will take care of all of this in a subsequent build step.

The next step is to install the [latest version of UglifyJS](https://www.npmjs.com/package/uglify-js) via:
```
npm install uglify-js grunt-contrib-uglify --save-dev
```

Finally, we need to configure a new Grunt task to run UglifyJS as part of our normal build process. First, add a new task:

```js
uglify: {
    options: {
        preserveComments: false,
        sourceMap: true,
        compress: {
            drop_console: true,
            passes: 2,
            dead_code: true
        }
    },
    stage: {
        options: {
            compress: {
                drop_console: false
            }
        },
        src: ['dist/dojo/dojo.js'],
        dest: 'dist/dojo/dojo.js'
    },
    prod: {
        files: [{
            expand: true,
            cwd: 'dist',
            src: ['**/*.js', '!proj4/**/*.js'],
            dest: 'dist'
        }]
    }
}
```

You'll notice that I have two subtasks set up. `prod` minifies everything except for the problematic Proj4 files. `stage` only minifies the layer file. This makes staging builds so much faster to build and consequently a lot easier to work out build issues.

The final step is to add the new task to your build tasks:
```js
grunt registerTask('build-stage', [
    'clean:build',
    'newer:imagemin:main',
    'dojo:stage',
    'uglify:stage',
    'processhtml:main',
    'shell:main'
]);
```

[Here's a clean commit that shows the entire process.](https://github.com/agrc/deq-enviro/commit/1b55a487da4ecb898f04aef13fc50fb4db13e749)

Hopefully this tip will save you from wasting even more of your life fighting with the Dojo Build System. And even if you are still discouraged fighting it, take courage, there are [better days ahead](https://github.com/agrc/atlas/blob/160ba7c8133fd438c31e2fbe0a2c93bbc24be3ce/package.json#L24).
