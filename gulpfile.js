var     gulp         = require('gulp'),
        sass         = require('gulp-sass'),
        autoprefixer = require('gulp-autoprefixer'),
        cleanCSS    = require('gulp-clean-css'),
        rename       = require('gulp-rename'),
        browserSync  = require('browser-sync').create(),
        concat       = require('gulp-concat'),
        uglify       = require('gulp-uglify');

gulp.task('browser-sync', ['styles', 'scripts'], function() {
        browserSync.init({
                server: {
                        baseDir: "./app"
                },
                notify: false
        });
});

gulp.task('styles', function () {
    return gulp.src([
        'sass/main.scss',
        'sass/libs.scss',
        'sass/skin-1.scss',
        'sass/skin-2.scss',
        'sass/skin-3.scss',
        'sass/skin-4.scss'
    ])
    .pipe(sass())
    .pipe(rename({suffix: '.min', prefix : ''}))
    .pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src([
    './app/libs/modernizr/modernizr.js',
    './app/libs/jquery/jquery-1.11.2.min.js',
    './app/libs/magnific-popup/jquery.magnific-popup.min.js',
    './app/libs/parallax/parallax.min.js',
    './app/libs/animate/animate-css.js',
    './app/libs/page-scroll-to-id/PageScroll2id.min.js',
    './app/libs/waypoints/waypoints.min.js',
    './app/libs/equalHeights/equalHeights.min.js',
    './app/libs/jqBootstrapValidation/jqBootstrapValidation.js'
    ])
    .pipe(concat('libs.js'))
    // .pipe(uglify()) //Minify libs.js
    .pipe(gulp.dest('./app/js/'));
});

gulp.task('watch', function () {
    gulp.watch('sass/*.scss', ['styles']);
    gulp.watch('app/libs/**/*.js', ['scripts']);
    gulp.watch('app/js/*.js').on("change", browserSync.reload);
    gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
