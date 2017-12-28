/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/
exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'https://www.jetblue.com',

  capabilities: {
      browserName:'firefox'
  },

  framework: 'custom',  // set to "custom" instead of cucumber.

  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file

  specs: [
    'features/*.feature'     // Specs here are the cucumber feature files
  ],

  // cucumber command line options
  cucumberOpts: {
    require: [
      'node_modules/protractor-cucumber-steps/index.js', // path to protractor-cucumber-steps
      'step_definitions/*.steps.js'
    ],  // require step definition files before executing features
    //tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    tags: "(@AllureScenario or @CucumberScenario or @ProtractorScenario) and (not @DatabaseTest)",
    strict: true,                  // <boolean> fail if there are any undefined or pending steps
    //format: 'json:results.json',
    format: ["pretty"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    //'dry-run': false,              // <boolean> invoke formatters without executing steps
    compiler: []                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
  },

 onPrepare: function () {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files

    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);
    global.expect = chai.expect;

  }
};
