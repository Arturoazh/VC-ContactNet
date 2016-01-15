
module.exports = {
  jsFiles: [
    'src/contactNetConfig/**/*.module.js',
    'src/contactNetConfig/**/*.js',
    '!src/contactNetConfig/gulpTasks/**/*'
  ],
  scssFiles: [
    'src/contactNetConfig/**/*.scss'
  ],
  htmlFiles: [
    'src/contactNetConfig/**/*.html'
  ],
  otherFiles: [
    'src/contactNetConfig/**/*.json',
    'src/contactNetConfig/**/*.svg'
  ],
  sharedFiles: [
    'src/shared/**/*.js'
  ],
  outputDir: 'dist/contactNetConfig',

  host: '52.18.132.39',
  key: '/Users/'+__dirname.split('/')[2]+'/.ssh/tbs_multicanal',
  user: 'ec2-user',
  remotePath: '/var/www/mamonteagudo_multicanal/code/INR-Platform/public/contactNetConfig'
};