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
				'!node_modules',
				'!scripts',
			]
		}
	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-gh-pages' );

	grunt.registerTask( 'publish', [ 'gh-pages' ] );
};
