'use strict'
const { src, dest } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
var gulp = require('gulp')
var postcss = require('gulp-postcss')
var cssmin = require('gulp-cssmin')
var salad = require('postcss-salad')(require('./salad.config.json'))
function swallowError (error) {
  // If you want details of the error in the console
  console.error(error.toString())

  this.emit('end')
}
gulp.task('compile', function () {
  return gulp.src('./src/*.css')
    .pipe(postcss([salad]))
    .on('error', swallowError)
    .pipe(cssmin())
    .on('error', swallowError)
    .pipe(gulp.dest('./lib'))
})

gulp.task('compileScss', function () {
  return src('./src/*.scss')
  .pipe(sass.sync())
  .on('error', swallowError)
  .pipe(autoprefixer({
    browsers: ['ie > 9', 'last 2 versions'],
    cascade: false
  }))
  .on('error', swallowError)
  .pipe(cssmin())
  .on('error', swallowError)
  .pipe(dest('./lib'))
})

gulp.task('copyfont', function () {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/fonts'))
})

gulp.task('build', ['compile', 'compileScss', 'copyfont'])
gulp.task('watch', function () {
  gulp.watch('./src/*.css', ['compile'])
  gulp.watch('./src/*.scss', ['compileScss'])
})
