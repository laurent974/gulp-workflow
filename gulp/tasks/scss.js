const { src, series, dest } = require("gulp")
const sass = require("gulp-dart-sass")
const mode = require("gulp-mode")()

function scssBuild() {
  return src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist'))
}

const cssTasks = series(scssBuild)

exports.tasks = cssTasks