module.exports = function(grunt) {
 
  // configuração do projeto
  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'), 
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded',              // nao minifica
          loadPath: 'bower_components/compass-mixins/lib/',
        },
        files: {                         // Dictionary of files
          'css/main.css': 'sass/main.scss'       // 'destination': 'source'
        }
      }
    },
    scsslint: {
      allFiles: [
        'sass/**/*.scss',
      ],
      options: {
        // bundleExec: true,
        config: '.scss-lint.yml',
        reporterOutput: 'scss-lint-report.xml',
        colorizeOutput: true
      },
    },
    watch: {
     scss: {
        files: ['sass/**/*.scss'],
        tasks: ['scsslint', 'dev'],
        options: {
          spawn: false,
        },
      },
    } 
  };
 
  grunt.initConfig(gruntConfig);
 
  // carregando plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-scss-lint');
 
  // tarefas
  grunt.registerTask('default', ['scsslint', 'sass'])
  grunt.registerTask('dev', ['scsslint', 'sass']);
};