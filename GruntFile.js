module.exports = function (grunt) {
	'use strict';
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

 		'gh-pages': {
			options: {
				base: '.'
			},
		  src: [
				'**/*',
				'!node_modules/**',
				'!scripts/**',
				'!GruntFile.js',
				'!Gemfile*',
				'!package.json',
				'!_site/**',
				'!_config.github.io.yml',
				'!_config.yml_'
			]
		},
		htmlmin: {
			main: {
				options: {
					removeComments: true,
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
			images: {
				options: {
						optimizationLevel: 3
					},
				files: [{
					expand: true, // Enable dynamic expansion
					cwd: 'images/', // Src matches are relative to this path
					src: ['**/*.{png,jpg,jpeg,gif}'], // Actual patterns to match
					dest: 'images/' // Destination path prefix
				}]
			},
			downloads: {
				options: {
						optimizationLevel: 3
					},
				files: [{
					expand: true, // Enable dynamic expansion
					cwd: 'downloads/', // Src matches are relative to this path
					src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
					dest: 'downloads/' // Destination path prefix
				}]
			}
		},
		jekyll: {
			githubio: {
				options: {
					config: '_config.yml,_config.github.io.yml'
				}
			},
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
			local: {
        options: {
          patterns: [{
            match: 'baseurl',
            replacement: '""'
          }, {
						match: 'url',
						replacement: '"/"'
					}]
        },
        src: '_config.yml_',
        dest: '_config.yml'
      },
      githubio: {
        options: {
          patterns: [{
            match: 'baseurl',
            replacement: '"/website"'
          }, {
						match: 'url',
						replacement: '"http://agrc.github.io"'
					}]
        },
        src: '_config.yml_',
        dest: '_config.yml'
      }
    }
	});

	// Dependencies
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-replace');

	grunt.registerTask('default', [
		'replace:local',
		'jekyll:main'
	]);

	grunt.registerTask('publish', [
		'newer:imagemin',
		'replace:githubio',
		'gh-pages'
	]);
};
