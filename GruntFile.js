module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            options: {
                optimizationLevel: 3
            },
            images: {
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'images/', // Src matches are relative to this path
                    src: ['**/*.{png,jpg,jpeg,gif}'], // Actual patterns to match
                    dest: 'images/' // Destination path prefix
                }]
            },
            agol: {
                files: [{
                    expand: true,
                    cwd: 'agol/',
                    src: ['**/*.{png,jpg,jpeg,gif}'],
                    dest: 'agol/'
                }]
            },
            downloads: {
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'downloads/', // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
                    dest: 'downloads/' // Destination path prefix
                }]
            }
        },
        uglify: {
            options: {
                preserveComments: false,
                compress: {
                    drop_console: true,
                    passes: 10,
                    dead_code: true
                }
            },
            list: {
                src: ['node_modules/list.js/dist/list.min.js', 'js/source/list.js'],
                dest: 'js/dist/list.min.js'
            },
            quad: {
                src: ['node_modules/list.js/dist/list.min.js', 'js/source/quad.js'],
                dest: 'js/dist/quad.min.js'
            },
            search: {
                src: ['node_modules/mustache/mustache.min.js', 'js/source/search.js'],
                dest: 'js/dist/search.min.js'
            }
        }
    });

    // Dependencies
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // use this task if you are running this from user.github.io or localhost:4444
    grunt.registerTask('default', [
        'imagemin',
        'uglify'
    ]);
};
