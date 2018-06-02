const path = require('path')
const srcPath = path.join(__dirname, 'app/build')
const destPath = path.join(__dirname, 'public')

module.exports = {
  js: {
    src: `${srcPath}/js/**/*.js`,
    dest: `${destPath}/js`,
    browserify: {
      entries: `${srcPath}/js/main.js`
    }
  },
  css: {
    src: `${srcPath}/scss/**/*.scss`,
    dest: `${destPath}/css`,
    sass: {
      includePaths: [
        './node_modules/normalize-scss/sass'
      ]
    },
    autoprefixer: {
      browsers: ['last 2 versions']
    }
  },
  images: {
    src: `${srcPath}/images/*`,
    dest: `${destPath}/images`
  },
  icons: {
    src: `${srcPath}/icons/*.svg`,
    dest: `${destPath}/images`
  }
}
