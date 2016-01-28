module.exports = function (grunt) {
	'use strict';
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		'gh-pages': {
			options: {
				base: '_site'
			},
		  src: [
				'**/*',
				'!node_modules/**',
				'!scripts/*',
				'!GruntFile.js',
				'!package.json'
			]
		},
		htmlmin: {
			main: {
				options: {
					// removeComments: true,
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
	replace: {
    githubio: {
      options: {
        patterns: [{
          match: /baseurl: ""/g,
          replacement: 'baseurl: "/website"'
        }, {
					match: /url: \"\/\"/g,
					replacement: 'url: "agrc.github.io"'
				}]
      },
      src: '_config.yml',
      dest: '_site/_config.yml'
    }
  }
});

	// Dependencies
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('publish', [
		'newer:imagemin',
		'replace:githubio',
		'gh-pages'
	]);
};
