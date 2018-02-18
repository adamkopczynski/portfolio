var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(minify())
    .pipe(gulp.dest('dist/css'))
});


gulp.task('watch', function(){
  gulp.watch('scss/*.scss', [sass]);
});
