var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var babel = require('gulp-babel');
var del = require('del');

gulp.task('babel', function() {
  return gulp.src('./src/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('./build'));
});

gulp.task('default', ['babel'], function() {
  nodemon({
    script: '/build/index.js',
    ext: 'js json',
    tasks: ['babel']
  })
})
