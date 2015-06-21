module.exports = function (grunt) {
  'use strict';
  // Configurations
  grunt.initConfig({
    watch: {
      css: {
        files: ['SCSS/*.scss', 'SCSS/**/*.scss'],
        tasks: ['compass'],
        options: {
          livereload: true
        }
      }
    },
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
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'css/*.css',
            '*.html'
          ]
        },
        options: {
          watchTask: true,
          proxy: "local.portfolio.com.br"
        }
      }
    }
  });

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('w', ['browserSync', 'watch', 'jshint']);
};