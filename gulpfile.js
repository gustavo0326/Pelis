var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var sass        = require('gulp-sass');

// Save a reference to the `reload` method

// Watch scss AND html files, doing different things with each.
gulp.task('serve',['sass'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("css/*.css").on("change", reload);
    gulp.watch("*.html").on("change", reload);
});
// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css/*.css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);