// Require Gulp first!
//const gulp = require("gulp");
// This is a very basic Gulp task,
// with a name and some code to run
// when this task is called:
//gulp.task("default", function(done) {
  //console.log("Hello world");
  //done();
//});

const gulp = require("gulp"); // Load Gulp!
// Now that we've installed the terser package we can require it:
const terser = require("gulp-terser"),
browserSync = require('browser-sync').create(),
eslint = require('gulp-eslint');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
  rename = require("gulp-rename");
gulp.task("scripts", function() {
  return gulp
    .src("./js/*.js") // What files do we want gulp to consume?
    pipe(eslint())
    .pipe(eslint,format())
    .pipe(eslint.failAfterError)
    .pipe(terser({
        keep_fnames: false,
        toplevel: true
    })) // Call the terser function on these files
    .pipe(rename({ extname: ".min.js" })) // Rename the uglified file
    .pipe(gulp.dest("./build/js")); // Where do we put the result?
});

gulp.task('say_hello', function(done) {
    console.log('Hello!');
  done();
});

gulp.task('reload', function() {
    browserSync.reload();
});

gulp.task("watch", function() {
    gulp.watch(["./js/*.js", "index.html"], gulp.series("scripts", "reload"));
  });

gulp.task('default', gulp.parallel('watch', "browser-sync"));

