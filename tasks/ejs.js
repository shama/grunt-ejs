/*
 * grunt-ejs
 * https://github.com/shama/grunt-ejs
 *
 * Copyright (c) 2014 Kyle Robinson Young
 * Licensed under the MIT license.
 */

var path = require('path');

module.exports = function(grunt) {
  'use strict';
  var ejs = require('ejs');
  grunt.registerMultiTask('ejs', 'compile ejs templates', function() {

    var options = this.options();
    grunt.verbose.writeflags(options, 'Options');

    this.files.forEach(function(file) {

      var cwd = file.cwd || process.cwd();

      file.src.forEach((sourceFile) => {

        var src = path.join(cwd, sourceFile),
            dest = file.dest;

        if(file.ext && file.ext.length) {

          var ext = file.ext;

          // always begin with a dot
          if(!ext.indexOf('.') === 0) {
            ext = '.' + ext;
          }

          // remove .ejs suffix
          dest = dest.replace(/\.ejs$/, '');

          // remove already existing extension
          dest = dest.replace(new RegExp('/\.' + file.ext + '$/'), '');

          // append new extension
          dest += file.ext;

        }

        var fileContent = grunt.file.read(src);
        options.filename = sourceFile;
        grunt.file.write(dest, ejs.render(fileContent, options));
        grunt.log.ok('Wrote ' + dest);

      });
      
    }, this);
  });
};
