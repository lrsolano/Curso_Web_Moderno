const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHtml(cb){
    gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'))
    return cb()
}

function appCss(cb){
    gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(uglifycss({"uglyComments":true}))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
    return cb()
}

function appJS(cb){
    gulp.src('src/assets/js/**/*.js')
        .pipe(babel({presets: ['env']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
    return cb()
}

function appImg(cb){
    gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
    return cb()
}
gulp.task('appHtml',appHtml)
gulp.task('appImg',appImg)
gulp.task('appJS',appJS)
gulp.task('appCss',appCss)
module.exports = {
    appHtml,
    appCss,
    appJS,
    appImg
}