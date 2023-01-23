export class BasePage{


soldOutItemAlertBox = '.modal-sold-out--is-open > .modal-sold-out-content';

expectedSoldOutItemAlertBoxText01 = 'Oops! This item is sold out.'
expectedSoldOutItemAlertBoxText02 = 'It can'
expectedSoldOutItemAlertBoxText03 = 't be added to your cart.'
expectedSoldOutItemAlertBoxText04 = 'We'
expectedSoldOutItemAlertBoxText05 = 'll let you know when this item is back in stock.'
expectedSoldOutItemAlertBoxText06 = 'Continue shopping'

ContinueBTnOnSoldOutAlert = '.modal-sold-out--is-open > .modal-sold-out-content > .modal-button';



url = 'https://www.shopist.io/';

loadUrl(endpoint){

cy.visit(this.url + endpoint)


}

waitForSync(){

cy.wait(1000);


}

setViewPortTo1280X720(){

cy.viewport(1280, 720)   // setting the viewport (width height) to get full screen

}


AssertSoldOutAlertBoxText(){

cy.get(this.soldOutItemAlertBox).should('have.text', this.expectedSoldOutItemAlertBoxText01 + ' '
+ this.expectedSoldOutItemAlertBoxText02 + "'" + this.expectedSoldOutItemAlertBoxText03 + ' '
+ this.expectedSoldOutItemAlertBoxText04 + "'" + this.expectedSoldOutItemAlertBoxText05 + ' '
+ this.expectedSoldOutItemAlertBoxText06)
.and('have.class', 'modal-sold-out-content')
.and('be.visible');

}

clickContinueBtnOnSoldOutAlert(){

    cy.get(this.ContinueBTnOnSoldOutAlert).click();
}



}



