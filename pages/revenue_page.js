'use strict'

class RevenuePage{
  constructor(){
    //this.filtro = element(by.dataTest('filtro'));
  }

  visit(){
    return browser.get('/#/');
  }


}
module.exports = RevenuePage;
