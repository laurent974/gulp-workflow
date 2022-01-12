const { src, dest, series } = require('gulp')
const svgSprite = require('gulp-svg-sprite')

const config = {
  shape: {
    dimension: { // Set maximum dimensions
      maxWidth: 32,
      maxHeight: 32
    },
    spacing: { // Add padding
      padding: 10
    }
  },
  mode: {
    symbol: {
      dest: './dist'
    } // Activate the «symbol» mode
  }
}

function svg() {
  return src('./src/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(dest('./'));
}

const svgSpriteBuild = series(svg)

exports.tasks = svgSpriteBuild