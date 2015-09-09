var gulp        = require('gulp');

var removeLogs  = require('gulp-removelogs'),
    htmlmin     = require('gulp-htmlmin'),
    shell       = require('gulp-shell'),
    minifyHTML  = require('gulp-minify-html'),
    uglify      = require('gulp-uglify'),
    vulcanize = require('gulp-vulcanize'),
    crisper = require('gulp-crisper');



gulp.task('build', ['Vulcanize', 'CopyBase', 'CleanAll', 'HTMLMinify']);


gulp.task('default', function () {
    return gulp.src('index.html')
        .pipe(vulcanize({
            abspath: '',
            excludes: [],
            stripExcludes: false,
            inlineScripts: false
        }))
        .pipe(crisper())
        .pipe(gulp.dest('build'));
});


gulp.task('Vulcanize', function () {
  var opts = {
    conditionals: true,
    spare:true,
    comments: true,
    loose: true
  };

  return gulp.src('index.html', {read: false})
    .pipe(shell(['vulcanize index.html --strip-comments -p /Users/ismaelfaro/code/Web-APP-Polymer-Base >  build/index.html']))
    // .pipe(shell(['vulcanize index.html --strip-comments --inline-css --inline-scripts  -p /Users/ismaelfaro/code/Web-APP-Polymer-Base >  build/index.html']))
});

gulp.task('HTMLMinify', function() {
  var opts = {
    conditionals: true,
    spare:true,
    comments: true,
    loose: true
  };

  return gulp.src('./build/index.html')
    .pipe(minifyHTML(opts))
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

gulp.task('HTMLMin', function(){
  return gulp.src('build/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/*'))
});

gulp.task('CleanAll', function(){
  gulp.src('build/index.html')
    .pipe(removeLogs())
    .pipe(gulp.dest('build/*'));
});

gulp.task('CopyBase', function(){
  gulp.src('manifest.json')
    .pipe(gulp.dest('build'));
  gulp.src('manifestIOS')
      .pipe(gulp.dest('build'));
  gulp.src('robots.txt')
      .pipe(gulp.dest('build'));
  gulp.src('favicon.ico')
      .pipe(gulp.dest('build'));
});
