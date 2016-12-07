var repoName = 'website';
module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmlmin: {
            main: {
                options: {
                    removeComments: true
                    // collapseWhitespace: true,
                    // conservativeCollapse: true
                    // removeEmptyAttributes: true,
                    // removeRedundantAttributes: true,
                    // collapseInlineTagWhitespace: true
                },
                files: [{
                    expand: true,
                    src: ['_site/**/*.html', '!_site/node_modules/**/*']
                }]
            }
        },
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
        jekyll: {
            main: {
                options: {
                    port: 4444,
                    serve: true,
                    auto: true,
                    drafts: true,
                    incremental: true
                }
            }
        },
        replace: {
            user: {
                options: {
                    patterns: [{
                        match: 'sass',
                        replacement: 'nested'
                    }]
                },
                src: '_config.yml_',
                dest: '_config.yml'
            },
            repo: {
                options: {
                    patterns: [{
                        match: 'sass',
                        replacement: 'nested'
                    }, {
                        match: /\"\/bower_component/g,
                        replacement: '"/' + repoName + '/bower_component'
                    }]
                },
                files: [
                    {src: '_config.yml_', dest: '_config.yml'},
                    {src: '_sass/vars.scss', dest: '_sass/vars.scss'}
                ]
            },
            sass: {
                options: {
                    patterns: [{
                        match: 'sass',
                        replacement: 'compressed'
                    }]
                },
                src: '_config.yml_',
                dest: '_config.yml'
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
                src: ['bower_components/list.js/dist/list.min.js', 'js/source/list.js'],
                dest: 'js/dist/list.min.js'
            },
            search: {
                src: ['bower_components/mustache.js/mustache.min.js', 'js/source/search.js'],
                dest: 'js/dist/search.min.js'
            }
        }
    });

    // Dependencies
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-replace');

    // use this task if you are running this from user.github.io or localhost:4444
    grunt.registerTask('default', [
        'newer:imagemin',
        'replace:user',
        'uglify',
        'jekyll:main'
    ]);

    // use this task if you are running this from user.github.io/repository
    // set repoName at the top of the file to match your repository
    grunt.registerTask('repo', [
        'newer:imagemin',
        'replace:repo',
        'uglify',
        'jekyll:main'
    ]);

    // run this before publishing to crunch all the stuff
    grunt.registerTask('compress', [
        'newer:imagemin',
        'replace:sass',
        'uglify'
    ])
};
