'use strict';
module.exports = function (grunt) {
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		'gh-pages': {
	      src: ['_site/**']
		}
	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-gh-pages' );
	grunt.registerTask( 'publish', [ 'gh-pages' ] );
};
