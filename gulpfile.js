const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
 
gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
    gulp.src(['js/*.js'])
      .pipe(minify())
      .pipe(gulp.dest('dist'))
});