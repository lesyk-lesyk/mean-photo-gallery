var gulp = require('gulp');

// tools
var del = require('del');
var runSequence = require('run-sequence');
var brfs = require('brfs');

// plugins
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');

// for nodemon
process.once('SIGINT', function(){
  process.exit(0);
});


var PRODUCTION = process.env.NODE_ENV === 'production';

// ---------------------------------------------------
// tasks
gulp.task('lint-client', function () {
  gulp.src(['./client/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .on('error', notify.onError({ message: 'JS hint client fail'}));
});

gulp.task('lint-server', function () {
  gulp.src(['./lib/server/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .on('error', notify.onError({ message: 'JS hint server fail'}));
});

gulp.task('clean', function () {
  return del.sync(['./lib/client-build/*']);
});

gulp.task('styles', function() {
  var opts = { comments: true, spare: true };
  gulp
    .src('./client/css/main.less')
    .pipe(less())
    .pipe(concat('bundled.css'))
    .pipe(gulpif(PRODUCTION, minifyCSS(opts)))
    .pipe(gulp.dest('./lib/client-build/css/'));
});

gulp.task('copy-html-files', function () {
  gulp.src('./client/*.html')
    .pipe(gulp.dest('./lib/client-build/'));
});

gulp.task('copy-img-files', function () {
  gulp.src('./client/img/*')
    .pipe(gulp.dest('./lib/client-build/img/'));
});

gulp.task('browserify', ['lint-client'], function() {
  gulp.src(['./client/index.js'])
  .pipe(plumber({
    errorHandler: function(err){
      notify.onError({
        title:    "Gulp",
        subtitle: "Failure!",
        message:  "Error: <%= error.message %>",
      })(err);
      this.emit('end');
    }
  }))
  .pipe(browserify({
    insertGlobals: true,
    debug: true,
    transform: ['brfs']
  }))
  .pipe(concat('bundled.js'))
  .pipe(gulpif(PRODUCTION, uglify({
    outSourceMap: "bundled.js.map"
  })))
  .pipe(gulp.dest('./lib/client-build/js'))
});


// ---------------------------------------------------
// watchers
gulp.task('js-watcher', function() {
  gulp.watch(['./client/components/**'], ['browserify']);
});

gulp.task('less-watcher', function() {
  gulp.watch(['./client/**/*.less'], ['styles']);
});


// ---------------------------------------------------
// default task
gulp.task('default', function () {
  runSequence('build', 'watch', 'server');
});

// build task
gulp.task('build', function () {
  runSequence(
    ['lint-client'],
    ['clean'],
    ['browserify', 'styles', 'copy-html-files', 'copy-img-files']
  );
});

// watch task
gulp.task('watch', ['js-watcher', 'less-watcher']);

//add watch for server!!!

// Start server
gulp.task('server', ['lint-server'], function() {
    nodemon({
        script: 'lib/server/index.js',
        watch: ["lib/server/*"],
        ignore: ["lib/client-build", "lib/uploads"],
        ext: 'js'
    }).on('restart', function() {
    gulp.src('lib/server/index.js')
      .pipe(notify('Server restarted'));
  });
});
