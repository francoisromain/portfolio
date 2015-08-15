module.exports = function (grunt) {

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  var jsSrc = [
    'node_modules/html5shiv/dist/html5shiv.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/velocity-animate/velocity.min.js',
    'node_modules/imagesloaded/imagesloaded.pkgd.js',
    'node_modules/masonry-layout/dist/masonry.pkgd.js',
    'node_modules/pace/pace.js'
  ];
  var jsDist = 'assets/dist/js/lib.js';

  grunt.initConfig({
    copy: {
      dist: {
        files: [{
          expand: true,
          src: ['assets/src/img/*'],
          dest: 'assets/dist/img/',
          flatten: true,
          filter: 'isFile'
        }, {
          expand: true,
          src: ['assets/src/css/fonts/*'],
          dest: 'assets/dist/css/fonts/',
          flatten: true,
          filter: 'isFile'
        }, {
          expand: true,
          src: ['assets/src/js/sessun.js'],
          dest: 'assets/dist/js/',
          flatten: true,
          filter: 'isFile'
        }]
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'assets/src/scss',
          specify: 'assets/src/scss/styles.scss',
          cssDir: 'assets/dist/css',
          environment: 'production',
          outputStyle: 'compressed',
          noLineComments: true,
          require: 'breakpoint',
          require: 'susy',
          force: true
        }
      },
      dev: {
        options: {
          sassDir: 'assets/src/scss',
          specify: 'assets/src/scss/styles.scss',
          cssDir: 'assets/dist/css',
          noLineComments: true,
          require: 'breakpoint',
          require: 'susy',
          force: true
        }
      }
    },
    concat: {
      options: {
        separator: '\n'
      },
      dev: {
        src: jsSrc,
        dest: jsDist
      },
      dist: {
        src: jsSrc,
        dest: jsDist
      }
    },
    uglify: {
      options: {
        separator: ';'
      },
      dist: {
        src: jsSrc,
        dest: jsDist
      }
    },
    watch: {
      dev: {
        files: ['assets/src/scss/*.scss', 'content/**/*', 'site/**/*'],
        tasks: ['styles:dev'],
        options: {
          livereload: true,
        }
      }
    }
  });

  grunt.registerTask('default', ['dev']);
  grunt.registerTask('dev', ['styles:dev', 'scripts:dev']);
  grunt.registerTask('dist', ['styles:dist', 'scripts:dist', 'medias:dist']);

  grunt.registerTask('scripts:dev', ['concat:dev']);
  grunt.registerTask('scripts:dist', ['uglify:dist']);

  grunt.registerTask('styles:dev', ['compass:dev']);
  grunt.registerTask('styles:dist', ['compass:dist']);

  grunt.registerTask('medias:dist', ['copy:dist']);

};
