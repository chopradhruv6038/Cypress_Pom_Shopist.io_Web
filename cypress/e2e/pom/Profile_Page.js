export class ProfilePage{




prodilePictureIcon = '.profile-picture > img';
shippingAddressField = ':nth-child(2) > .label';
phoneNumberField = ':nth-child(2) > .label';
editProfile = '.button';


assertProfilePictureIconIsDisplayed(){

cy.get(this.prodilePictureIcon).should('be.visible');


}



assertShippingAddressFieldIsDisplayed(){

    cy.get(this.shippingAddressField).should('be.visible');

}

assertPhoneFieldIsDisplayed(){

cy.get(this.phoneNumberField).should('be.visible');


}


assertEditProdileBtnIsDisplayed(){

cy.get(this.editProfile).should('be.visible')
.and('have.class', 'button')


}

clickEditProfileBtn(){

cy.get(this.editProfile).click();

}



}