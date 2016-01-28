'use strict';
module.exports = function (grunt) {
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		'gh-pages': {
			options: {
				base: '_site',
				push: false
			},
		  src: [
				'**/*',
				'!node_modules/**',
				'!scripts/*',
				'!GruntFile.js',
				'!package.json'
			]
		},
		imagemin: {
			main: {
				options: {
						optimizationLevel: 3
					},
					files: [{
						expand: true, // Enable dynamic expansion
						cwd: 'images/', // Src matches are relative to this path
						src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
						dest: 'images/' // Destination path prefix
					}]
				}
			}
	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-gh-pages' );
	grunt.loadNpmTasks( 'grunt-contrib-imagemin' );

	grunt.registerTask( 'publish', [ 'imagemin:main', 'gh-pages' ] );
};
