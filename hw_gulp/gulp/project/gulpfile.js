const { src, dest, parallel, series, watch } = require('gulp');
const brwSync = require('browser-sync').create();
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify')


function browserSync() {
    brwSync.init({
        server: { baseDir: 'app/' },
        notify: false,
        onlne: true
    });
}

function styles() {
    return src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'app/styles/main.scss'
    ])
        .pipe(sass())
        .pipe(concat('main.min.css'))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))  //наверное сюда
        .pipe(dest('app/styles/css'))
        .pipe(brwSync.stream())
}

function watching() {
    watch('app/styles/**/*.scss', styles);
    watch('app/index.html').on('change', brwSync.reload)

}

function minimization() {
    return src('app/img/*')
        .pipe(newer('app/imgo'))
        .pipe(imagemin())
        .pipe(dest('app/imgo'))
}

function cleanimg() {
    return del('app/imgo/*', { force: true })
}

function build() {
    return src([
        'app/imgo/*',
        'app/styles/css/*',
        'app/**/*.html',
        'app/**/*.js' //наверное сюда
    ], { base: 'app' })
        .pipe(dest('dist'))
}

function mincss() {
    return src('styles/*.css')
        .pipe(cleanCSS({ compatibility: '*' }))
        .pipe(dest('dist'));
};

function packjs() {
    return src(['app/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest('src/js'));
};


exports.brwSync = browserSync;
exports.styles = styles;
exports.watch = watching;
exports.minimg = minimization;
exports.cleanimg = cleanimg;
exports.build = build;
exports.mincss = mincss;
exports.autopref = autoprefixer;


exports.reopimg = series(cleanimg, minimization);
exports.default = parallel(styles, browserSync, packjs, watching);