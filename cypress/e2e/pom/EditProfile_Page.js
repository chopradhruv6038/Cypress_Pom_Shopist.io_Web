export class EditProfilePage{

profilePictureField = '.hidden-input'; 
removePhotoLink = '.borderless';  
removePhotoLinkText = '\n      Remove photo\n    ';
firstNameField = '#firstname';
lastNameField = '#lastname';
address01Field = '#address1';
address02Field = '#address2';
cityField = '#addressCity';

stateField01 = '#addressState'
stateField02 = '#vs1__option-13';

zipCodeField = '#addressZipcode';
mobileNumberField = '#phone';
saveProfileField = '.inverted';
profileSuccessfullyUpdatedField = '.success';
profileSuccessfullyUpdatedText = '\n    Profile successfully saved.\n    View updated profile'
viewUpdatedProfileLink = '.inline-link';

//Methods

uploadProfilePicture(){

    cy.get(this.profilePictureField).clearLocalStorage();
    
cy.get(this.profilePictureField).attachFile('ducati.png');

}


assertRemovePhotoLink(){


 cy.get(this.removePhotoLink).should('have.text', this.removePhotoLinkText);


}



enterFirstName(firstName){

cy.get(this.firstNameField).clear();    
cy.get(this.firstNameField).type(firstName);

}

enterLastName(lastName){

cy.get(this.lastNameField).clear();   
cy.get(this.lastNameField).type(lastName);

}


enterAddress01(address01){

    cy.get(this.address01Field).clear();
cy.get(this.address01Field).type(address01);

}

enterAddress02(address02){

    cy.get(this.address02Field).clear();
cy.get(this.address02Field).type(address02);

}

enterCity(city){

    cy.get(this.cityField).clear();
cy.get(this.cityField).type(city);

}


SelectStateFrmDrpDwn(){

cy.get(this.stateField01).click();
cy.get(this.stateField02).click();


}

enterZipcode(zipCode){

    cy.get(this.zipCodeField).clear();
cy.get(this.zipCodeField).type(zipCode);

}

enterMobileNumber(mobileNumber){

    cy.get(this.mobileNumberField).clear();
cy.get(this.mobileNumberField).type(mobileNumber);


}

clickSaveProfileBtn(){

cy.get(this.saveProfileField).click();

}

assertSuccessfullMessage(){

    cy.get(this.profileSuccessfullyUpdatedField).should('have.text', this.profileSuccessfullyUpdatedText);
}

clickViewUpdatedProfileLink(){

    cy.get(this.viewUpdatedProfileLink).click();
}

}

