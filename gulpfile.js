const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const terser = require('gulp-terser');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const uglifycss = require('gulp-uglifycss');

gulp.task('scripts', function() {
return gulp
.src('js/*.js')
.pipe(terser())
.pipe(rename({ extname: '.min.js' }))
.pipe(gulp.dest('./build/js'));
});

gulp.task('browser-sync', function() {
browserSync.init({
  server: {
      baseDir: './'
  }
});
gulp.watch(['sass/*.scss', 'js/*.js']).on('change', browserSync.reload);
});


gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions']
      })
    )
    .pipe(uglifycss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./build/css'));
});


gulp.task('reload', function() {
browserSync.reload();
});

gulp.task('watch', function() {
  gulp.watch('js/*.js', gulp.series('scripts'));
  gulp.watch('sass/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('watch', 'browser-sync'));