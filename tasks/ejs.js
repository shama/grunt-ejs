/*
 * grunt-ejs
 * https://github.com/shama/grunt-ejs
 *
 * Copyright (c) 2020 Kyle Robinson Young
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';
  var ejs = require('ejs');
  grunt.registerMultiTask('ejs', 'compile ejs templates', function() {
    var options = this.options();
    grunt.verbose.writeflags(options, 'Options');
    this.files.forEach(function(file) {
      // prevents options declared / overridden
      // on file level to be moved to the next file
      options = this.options();
      var out = file.src.map(grunt.file.read).join('');
      options.filename = file.src[0];
      grunt.file.write(file.dest, ejs.render(out, options));
      grunt.log.ok('Wrote ' + file.dest);
    }, this);
  });
};
