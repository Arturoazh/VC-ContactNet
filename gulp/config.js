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
  otherFiles: [
    'src/**/*.json',
    'src/**/*.svg'
  ],
  outputDir: 'app/',
  connect: require('gulp-connect')
};