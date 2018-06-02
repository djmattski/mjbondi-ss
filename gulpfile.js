const config = require('./config')
const gulp = require('gulp')
const eslint = require('gulp-eslint')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const plumber = require('gulp-plumber')
const stylelint = require('gulp-stylelint')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const clean = require('gulp-clean-css')
const imagemin = require('gulp-imagemin')
const svgmin = require('gulp-svgmin')
const svgstore = require('gulp-svgstore')
const notify = require('gulp-notify')

gulp.task('js-lint', () => {
  return gulp.src([config.js.src, '!node_modules/**'])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task('js', () => {
  const b = browserify(Object.assign(config.js.browserify, {
    debug: true
  }))

  // b.transform(babelify)
    .transform(babelify, {
      plugins: ['transform-class-properties', 'transform-decorators-legacy']
    })

  return b.bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(plumber())
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.js.dest))
    .pipe(notify(setNotify('JS', 'JS finished')))
})

gulp.task('css-lint', () => {
  gulp.src(config.css.src)
    .pipe(plumber())
    .pipe(stylelint({
      reporters: [
        { formatter: stylelint.formatters.string, console: true }
      ]
    }))
})

gulp.task('css', () => {
  gulp.src(config.css.src)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(plumber())
    .pipe(sass(config.css.sass))
    .pipe(postcss([
      autoprefixer(config.css.autoprefixer)
    ]))
    .pipe(clean())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.css.dest))
    .pipe(notify(setNotify('CSS', 'CSS finished')))
})

gulp.task('images', () => {
  gulp.src(config.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(config.images.dest))
})

gulp.task('icons', () => {
  gulp.src(config.icons.src)
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(gulp.dest(config.icons.dest))
})

gulp.task('watch', ['js', 'css', 'images', 'icons'], () => {
  gulp.watch(config.js.src, ['js'])
  gulp.watch(config.css.src, ['css'])
  gulp.watch(config.images.src, ['images'])
  gulp.watch(config.images.src, ['icons'])
})

gulp.task('lint', ['js-lint', 'css-lint'])
gulp.task('default', ['lint', 'js', 'css', 'images', 'icons'])
// gulp.task('default', ['js', 'css', 'images', 'icons'])

/*
 * Notify settings
 */
function setNotify (subtitle, message) {
  let notifyOpts = {
    'title': 'Notification',
    'subtitle': subtitle,
    'message': message,
    'sound': 'Frog', // case sensitive
    'onLast': true,
    'wait': true,
    timeout: 8
  }
  return notifyOpts
}
