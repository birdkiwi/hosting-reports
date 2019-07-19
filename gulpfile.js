const gulp = require('gulp');
const less = require('gulp-less');
const csso = require('gulp-csso');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
var uglify = require('gulp-uglify');
const browsersync = require('browser-sync').create();

function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

function css() {
    return gulp.src('assets/scss/style.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('assets/build/css'))
        .pipe(csso({comments: false}))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('assets/build/css'))
        .pipe(browsersync.stream());
}

function js() {
    return gulp.src('assets/js/*.js', { sourcemaps: true })
        .pipe(concat('app.js'))
        .pipe(gulp.dest('assets/build/js', { sourcemaps: true }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(uglify())
        .pipe(gulp.dest('assets/build/js'))
        .pipe(browsersync.stream());
}

function watchFiles() {
    gulp.watch("./assets/scss/**/*", css);
    gulp.watch("./assets/js/**/*", js);
    gulp.watch("./*.html", browserSyncReload);
}

const build = gulp.parallel(css, js);
const watch = gulp.parallel(watchFiles, browserSync);

exports.watch = watch;
exports.default = build;
