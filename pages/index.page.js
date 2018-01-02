'use strict'

class IndexPage {
  constructor(){
    this.depart_date = element(by.model('departCal.date'));
    this.depart_city = element(by.id('jbBookerDepart'));
    this.arrival_city = element(by.id('jbBookerArrive'));
    this.return_date = element(by.model('returnCal.date'));
    this.search_button = element(by.buttonText('Find it'));
    this.error_messages = element.all(by.repeater('errorMessage in errorMessages'));
  }

  visit(){
    return browser.get('/#/');
  }

  insertDepartDate(depart_date){
    return this.depart_date.sendKeys(depart_date);
  }

  insertDepartCity(depart_city){
    return this.depart_city.sendKeys(depart_city);
  }

  insertArrivalCity(arrival_city){
    return this.depart_city.sendKeys(arrival_city);
  }

  insertReturnDate(return_date){
    return this.return_date.sendKeys(return_date);
  }

  search() {
    return this.search_button.click();
  }

  getErrorMessage(index) {
    return this.error_messages.get(index).getText();
  }

}
module.exports = IndexPage;
