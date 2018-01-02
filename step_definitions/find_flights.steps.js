
var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

const IndexPage = require('../pages/index.page.js');


var FindingFlightsSteps = function() {

  const indexPage = new IndexPage();

  this.Given('I go to JetBlue index page', function (callback) {
    indexPage.visit();
    callback();
  });

  this.Given(/^I enter the "([^"]*)" where my flight will depart$/, function (city_from, callback) {
    indexPage.insertDepartCity(city_from);
    callback();
  });

  this.Given(/^I enter the "([^"]*)" to go$/, function (depart_date, callback) {
    indexPage.insertDepartDate(depart_date);
    callback();
  });

  this.Given(/^I enter the "([^"]*)" where I will flight$/, function (city_to, callback) {
    indexPage.insertArrivalCity(city_to);
    callback();
  });

  this.Given(/^I enter the "([^"]*)" to came back$/, function (return_date, callback) {
    indexPage.insertReturnDate(return_date);
    callback();
  });

  this.Given(/^I search the flights$/, function (callback) {
    indexPage.search();
    callback();
  });


  this.Then(/^I see the list of the flights related to the search$/, function (callback) {
     callback(null, 'Pending');
   });

  this.Then(/^I see the not found flight error message$/, function (callback) {
    //expect(indexPage.getErrorMessage(0)).to.equal("Please enter valid departure city");
    //expect(indexPage.getErrorMessage(1)).to.equal("Please enter valid arrival city");
    callback(null, 'Pending');
  });

}

module.exports = FindingFlightsSteps;
