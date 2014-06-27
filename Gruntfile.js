module.exports = function(grunt) {
  grunt.initConfig({
    ejs: {
      all: {
        src: ['test/fixtures/**/*.ejs'],
        dest: 'tmp/',
        expand: true,
        ext: '.html',
      },
    },
  });
  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['ejs']);
};
