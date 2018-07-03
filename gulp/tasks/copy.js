var gulp   = require('gulp');
var config = require('../config');

gulp.task('copy:fonts', function() {
  return gulp
    .src(config.src.fonts + '/*.{ttf,eot,woff,svg,woff2}')
    .pipe(gulp.dest(config.dest.fonts));
});

gulp.task('copy:vendor', function() {
  return gulp
    .src(config.src.vendor + '/**/*.*')
    .pipe(gulp.dest(config.dest.vendor));
});

gulp.task('copy:php', function() {
  return gulp
    .src(config.src.php + '/**/*.*')
    .pipe(gulp.dest(config.dest.php));
});

gulp.task('copy:json', function() {
  return gulp
    .src(config.src.json + '/**/*.*')
    .pipe(gulp.dest(config.dest.json));
});

gulp.task('copy:html', function() {
  return gulp
    .src(config.src.html + '/**/*.*')
    .pipe(gulp.dest(config.dest.html));
});

gulp.task('copy:rootfiles', function() {
  return gulp
    .src(config.src.root + '/*.*')
    .pipe(gulp.dest(config.dest.root));
});

gulp.task('copy', [
  'copy:rootfiles',
  'copy:html',
  'copy:php',
  'copy:json',
  'copy:vendor',
  'copy:fonts'
]);

gulp.task('copy:watch', function() {
  gulp.watch(config.src.php + '/**/*.*', ['copy:php']);
  gulp.watch(config.src.json + '/**/*.*', ['copy:json']);
  gulp.watch(config.src.html + '/**/*.*', ['copy:html']);
  gulp.watch(config.src.vendor + '/**/*.*', ['copy:vendor']);
  gulp.watch(config.src.root + '/*.*', ['copy:rootfiles']);
});
