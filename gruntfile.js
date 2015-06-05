module.exports = function (grunt) {
  'use strict';
  // Configurations
  grunt.initConfig({

    jshint: {
      files : 'js/*.js'
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb',
          trace: true
        }
      }
    },
    copy: {
      main: {
        // src: ['css/*.css' , 'css/**/*.css']
        // dest: 'V:/site/uolhost/css/',
      }
    },
    watch: {
      css: {
        files: ['SCSS/*.scss', 'SCSS/**/*.scss'],
        tasks: ['compass'],
        options: {
          livereload: true
        }
      }
    }
  });

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // verificar os JSs
  grunt.registerTask('hint', ['jshint']);
  // delivery QA
  grunt.registerTask('bkpSTG', ['copy:mainSTG']);
  // grunt.registerTask('bkp', ['copy:bkpQa']);
  grunt.registerTask('delivery', ['copy:delivery']);


  grunt.registerTask('w', ['watch']);
};