const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')
function servidor(cb){
    gulp.src('build')
    .pipe(webserver({
        port: 8080,
        open: true,
        livereload: true
    }))
    return cb()
}


function monitorarArquivos(cb){
    gulp.watch('src/**/*.html', gulp.parallel('appHtml'))
    gulp.watch('src/**/*.scss', gulp.parallel('appCss'))
    gulp.watch('src/**/*.js', gulp.parallel('appJS'))
    gulp.watch('src/assets/imgs/**/*.*', gulp.parallel('appImg'))


    return cb()
}


module.exports = ({
    monitorarArquivos,
    servidor
})