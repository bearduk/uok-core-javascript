module.exports = function(grunt) {

  'use strict';

  // node require
  require('time-grunt')(grunt);

  grunt.initConfig({
    // create link to package.json items
    pkg: grunt.file.readJSON('package.json'),

    // grunt-contrib-concat. Concat for dev and production
    concat: {
        prod: {
          src: 'components/js/**/*.js',
          dest: 'builds/production/js/concat.js'
          },
        dev: { // is dev needed? leave here until decided
          src: 'components/js/*',
          dest: 'builds/development/js/concat.js'
          }
    },

    // grunt-contrib-uglify. Uglify only on production
    uglify: {
        prod: {
          files: {
            'builds/production/js/concat.min.js': ['builds/production/js/concat.js']
          }
        }
    },

    // JShint to check for javascript bugs
    jshint: {
        all: {
            src: ['components/js/**/*.js']
        },
        options: {
            jshintrc: true
        }
    }

  }); //initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  grunt.registerTask('default', ['concat', 'uglify', 'jshint']);
  
}; // wrapper function