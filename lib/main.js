module.exports = function(taskName) {
  var spawn = require('child_process').spawn;
  var platforms = process.env.CORDOVA_PLATFORMS.split(',');
  var isRelease = process.env.CORDOVA_CMDLINE.indexOf('--release') >= 0;
  
  var nextPlatformIndex = 0;
  
  function runTaskForNextPlatform() {
    runTaskForPlatform(platforms[nextPlatformIndex++], runTaskForNextPlatform);
  }
  
  function runTaskForPlatform(platform, next) {
    if (!platform) {
      return;
    }
    
    console.info('\n> Running "' + taskName + '" Grunt task for "' + platform + '" platform\n');
    
    var grunt = spawn('grunt', [ taskName, '--stack', '--debug', '--verbose', '--platform', platform, '--release', isRelease ]);

    grunt.stdout.on('data', function(data) {
      process.stdout.write(data.toString());
    });
    
    grunt.stdout.on('end', next);
  }

  runTaskForNextPlatform();
};