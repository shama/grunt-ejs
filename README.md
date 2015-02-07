# grunt-ejs

A Grunt task for compiling [ejs](http://npmjs.org/package/ejs) templates.

## Getting Started

Install this grunt plugin next to your project's
[Gruntfile.js](http://gruntjs.com/getting-started) with: `npm install grunt-ejs --save-dev`.

Then add this line to your project's `Gruntfile.js`:

```javascript
grunt.loadNpmTasks('grunt-ejs');
```

## Documentation

Add the task to your config and specify the destination for the compiled file:

```javascript
grunt.initConfig({
  ejs: {
    all: {
      src: ['app/**/*.ejs', '!app/partials/**/*'],
      dest: 'dist/',
      expand: true,
      ext: '.html',
    },
  },
});
```

### Passing data/helpers to the templates
Use `options` to pass data and helpers to the templates:

**Gruntfile.js**:
```js
grunt.initConfig({
  ejs: {
    all: {
      options: {
        title: 'My Website',
        url: function(url) {
          return 'http://example.com/formatted/url/' + url;
        },
      },
      src: ['app/**/*.ejs', '!app/partials/**/*'],
      dest: 'dist/',
      expand: true,
      ext: '.html',
    },
  },
});
```

**app/index.ejs**:
```html
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <a href="<%= url('home.html') %>">Home Page</a>
  </body>
</html>
```

Ideally all your helpers and non-app specific config should be another module and merged in like this:

```js
grunt.initConfig({
  ejs: {
    all: {
      options: grunt.util._.merge(require('my-helpers'), {
        title: 'My Website'
      }),
      src: 'index.ejs',
      dest: 'index.html',
    },
  },
});
```

## Release History

* 0.3.0 
  * update ejs to 2.2.3
  * fix file options
* 0.2.0 update ejs to 1.0.0
* 0.1.0 initial release

## License

Copyright (c) 2014 Kyle Robinson Young
Licensed under the MIT license.
