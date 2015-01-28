/*
 * grunt-ejs
 * https://github.com/shama/grunt-ejs
 *
 * Copyright (c) 2014 Kyle Robinson Young
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';
  var ejs = require('ejs');
  var _ = require('underscore');
  grunt.registerMultiTask('ejs', 'compile ejs templates', function() {
    var options = this.options();
    grunt.verbose.writeflags(options, 'Options');
    this.files.forEach(function(file) {
      // prevents options declared / overrided
      // on file level to be moved to the next file
      var freshOptions = _.extend({}, options);
      var out = file.src.map(grunt.file.read).join('');
      freshOptions.filename = file.src[0];
      grunt.file.write(file.dest, ejs.render(out, freshOptions));
      grunt.log.ok('Wrote ' + file.dest);
    })
  });
};
