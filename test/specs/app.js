'use strict';

module.exports = {
  'Contents test' : function (browser) {
    browser
      .url(browser.launchUrl)
      .resizeWindow(1000, 800)
      .pause(1000)
      .saveScreenshot('./test/screenshots/'+browser.options.desiredCapabilities.browserName+'.png')
      .end();
  }
};
