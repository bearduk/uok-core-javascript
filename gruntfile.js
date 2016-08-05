module.exports = function(grunt) {

  'use strict';

  // node require
  require('time-grunt')(grunt);

  grunt.initConfig({
    // create link to package.json items
    pkg: grunt.file.readJSON('package.json'),

    // grunt-webpack
    webpack: {
      task: {
        entry: "./components/js/test.js", // CB note that to get more than one file, you'd need to set multiple entry points :(
        output: {
          filename: "webpack-compressed.js"
        }
      }
    }

    // grunt-contrib-concat. Concat for dev and production
    // concat: {
    //     prod: {
    //       src: 'components/js/**/*.js',
    //       dest: 'builds/production/js/concat.js'
    //       },
    //     dev: { // is dev needed? leave here until decided
    //       src: 'components/js/*',
    //       dest: 'builds/development/js/concat.js'
    //       }
    // },

    // grunt-contrib-uglify. Uglify only on production
    // uglify: {
    //     prod: {
    //       files: {
    //         'builds/production/js/concat.min.js': ['builds/production/js/concat.js']
    //       }
    //     }
    // }

  }); //initConfig

  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-webpack');

  // grunt.registerTask('default', ['concat', 'uglify']);
  grunt.registerTask('default', ['webpack']);  
}; // wrapper function