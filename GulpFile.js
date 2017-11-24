const _PROJECTNAME = 'class-scheduler';

var gulp = require('gulp'),
  watch = require('gulp-watch'),

  browserSync = require('browser-sync').create();

const tinypngToken = false;

// Source Content structure

var source = {
  content: '*',
  location: './_src/'
};

source.css = {
  content: '**/*.css',
  location: source.location + 'css/'
};

source.js = {
  content: '*.js',
  location: source.location + 'js/'
};

source.index = {
  content: '**/*.html',
  location: source.location
};

source.images = {
  content: '*.*',
  location: source.location + 'img/'
};

source.images.largePhotos = {
  content: '*.*',
  location: source.images.location + 'largePhotos/'
};

// Public Content structure

var public = {
  location: './public/'
};

// Dist Content structure

var dist = {
  content: '*',
  location: public.location + 'dist/'
};

dist.css = {
  content: '*.css',
  location: dist.location + 'css/'
};

dist.js = {
  content: '*.js',
  location: dist.location + 'js/'
};

// SERVER

gulp.task('serve', function () {

  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: "./public/",
      index: "index.html",
      routes: {
        "/home": "./index.html"
      }
    },
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: true
    }
  });

  gulp.watch(source.index.content).on('change', browserSync.reload);

});

gulp.task('default', ['serve']);