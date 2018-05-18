---
title: 'Implementing Babel via Grunt'
author:
  display_name: Scott Davis
  email: stdavis@utah.gov
date: 2018-05-18 21:25:37
categories:
  - Developer
tags:
  - javascript
---

Have you ever felt your excitement build after seeing some cool, new JavaScript feature only to find out that it isn't supported in all of the browsers that your app supports? Bummer! If you've ridden this rollercoaster of emotions before, [Babel](https://babeljs.io/) might just be your favorite new tool.

Babel allows you to write your code with all of the features that the cool-kids are using such as [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function), [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) & [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) variable declaration, and [many more](https://babeljs.io/learn-es2015/). It does this by compiling your modern code to backwards-compatible code that is supported in all major browsers.

It does take a bit of setup but it's well worth the investment of time. Once you start using some of these newer language features you'll wonder how you ever got by without them. Here are the steps that we take when "babelifying" our [grunt-based projects](https://github.com/agrc/atlas):

1. Install node dependencies:
```
npm i grunt-babel babel-preset-latest babel-plugin-transform-remove-strict-mode --save-dev
```
We use the last plugin to remove the `"use strict"` that Babel writes to all output files. This is because [dojo 1 has issues](https://stackoverflow.com/a/43212038/8049053) with [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode).

1. Move the `src/app` folder to `_src/app` as well as any other files in `src` that are committed to source control such as `index.html`. This is because we are going to git ignore the `src` folder entirely since it will only hold Babel output as well as other dependencies.

1. Update `.gitignore` to ignore the entire `src` directory. This is a [major simplification](https://github.com/agrc/atlas/commit/370a81e11344bed18d6a31d37b25f0265ad768dd#diff-a084b794bc0759e7a6b77810e01874f2) from the previous version which had to ignore each bower dependency explicitly.

1. Add babel grunt task configuration:
```js
    babel: {
        options: {
            sourceMap: true,
            presets: ['latest'],
            plugins: ['transform-remove-strict-mode']
        },
        src: {
            files: [{
                expand: true,
                cwd: '_src/app/',
                src: ['**/*.js'],
                dest: 'src/app/'
            }]
        }
    }
```

1. Add a copy task config for copying all of the non-js files from `_src` to `src`:
```js
    copy: {
        dist: {
            files: [{expand: true, cwd: 'src/', src: ['*.html'], dest: 'dist/'}]
        },
        src: {
            expand: true,
            cwd: '_src',
            src: ['**/*.html', '**/*.css', '**/*.png', '**/*.jpg', 'secrets.json', 'app/package.json'],
            dest: 'src'
        }
    }
```

1. If you are using a CSS pre-processor you may want to repoint it's grunt task configuration to the `_src` folder.

1. You'll also want to repoint the linter, watch, and bump tasks to the `_src` folder.

1. Add the new babel and copy tasks to the watch task config. Using [grunt-newer](https://github.com/tschaub/grunt-newer) will make things more efficient.

1. Add a new clean sub task to clean `src/app`:
```js
    clean: {
        build: ['dist'],
        deploy: ['deploy'],
        src: ['src/app']
    }
```

1. Add babel, clean and copy tasks to the build and default tasks:
```js
    grunt.registerTask('default', [
        'eslint',
        'clean:src',
        'babel',
        'stylus:src',
        'copy:src',
        'connect',
        'jasmine:main:build',
        'watch'
    ]);
    grunt.registerTask('build-prod', [
        'clean:src',
        'babel',
        'stylus:src',
        'copy:src',
        'newer:imagemin:main',
        'dojo:prod',
        'uglify:prod',
        'copy:dist',
        'processhtml:main'
    ]);
```

1. You may also need to update your `.eslintrc` file to be at the correct Ecma version that you'll be writing your code in
```js
    parserOptions: {
        ecmaVersion: 8
    }
```

[Here's a commit that contains most of these steps](https://github.com/agrc/electrofishing/pull/136/commits/03817ff5d3c58b25525448e661b2174d810dc4f8). It seems like I always forget a few things. :)

Writing modern JavaScript is fun and it encourages better programming patterns. I hope that you'll give Babel a try.
