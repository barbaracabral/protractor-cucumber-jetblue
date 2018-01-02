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
      'step_definitions/*.steps.js'
    ],
    //tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    strict: true,         // <boolean> fail if there are any undefined or pending steps
    format: ["pretty"],   // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
  }

};
