var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('default', (done) => {
    console.log('GULP is working');
    done();
});

gulp.task('watch', () => {
    browserSync.init({
        // notify: false,
        server: {
            baseDir: 'app'
        }
    });

    watch('./app/index.html', () => {
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', () => {
        gulp.start('cssInject')
    });

    watch('./app/assets/scripts/**/*.js', () => {
        gulp.start('scriptsRefresh');
    });


//     watch('./app/assets/scripts/**/*.js', () => {
//         scripts();
//     });
// });

});

gulp.task('cssInject', ['styles'], () => {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], () => {
    browserSync.reload();
});