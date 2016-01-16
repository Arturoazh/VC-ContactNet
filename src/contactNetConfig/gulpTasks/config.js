var UriConfigUser = {
  'Macbook Mike' : 'mamonteagudo',
  azarzalejo : 'azarzalejo'
};

var keyConfigUser = {
  'Macbook Mike' : 'mpeula',
  azarzalejo : 'azarzalejo'
}

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
  sourcePath: 'src/contactNetConfig/app.module.js',
  outputDir: 'dist/contactNetConfig',

  host: '52.18.132.39',
  key: '/Users/'+keyConfigUser[__dirname.split('/')[2]]+'/.ssh/tbs_multicanal.pem',
  user: 'ec2-user',
  remotePath: '/var/www/'+UriConfigUser[__dirname.split('/')[2]]+'_multicanal/code/INR-Platform/public/contactNetConfig'
};