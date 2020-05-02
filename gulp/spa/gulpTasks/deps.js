const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCss(cb){
    gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({"uglyComments":false}))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
    return cb()
}

function depsFonts(cb){
    gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('build/assets/fonts'))
    return cb()
}

module.exports = ({
    depsCss,
    depsFonts
})