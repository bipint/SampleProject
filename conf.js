fs = require('fs');


exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['todo-spec.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 300000
    }
  },
  onPrepare = function() {
    jasmine.getEnv().addReporter({
        specDone: function(result) {
          browser.takeScreenshot().then(function(screenShot) {
      
            //    Saving File.
            //    Param filePath : where you want to store screenShot
            //    Param screenShot : Screen shot file which you want to store. 
      
            fs.writeFile('/Users/M_484417/Documents/SampleProject/', screenShot, 'base64', function (err) {
            if (err) throw err;
            console.log('File saved.');
            });
      
          });
        }
      });
}