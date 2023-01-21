export class HomePage{

 myProfileLink = '.profile > .menu-item-large-container > .menu-item-large';

clickMyProfileLink(){

cy.get(this.myProfileLink).click();


}




}