module.exports = {
  jsFiles: [
    'src/**/*.module.js',
    'src/**/*.js'
  ],
  scssFiles: [
    'src/**/*.scss'
  ],
  htmlFiles: [
    'src/**/*.html'
  ],
  outputDir: 'app/',
  connect: require('gulp-connect')
};