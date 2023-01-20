export class EditProfilePage{

profilePictureField = '.hidden-input';    
firstNameField = '#firstname';
lastNameField = '#lastname';
address01Field = '#address1';
address02Field = '#address2';
cityField = '#addressCity';
stateField = '';
zipCodeField = '#addressZipcode';
mobileNumberField = '#phone';


uploadProfilePicture(){

    cy.get(this.profilePictureField).clearLocalStorage();
    
cy.get(this.profilePictureField).attachFile('ducati.png');



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


SelectState(state){



}

enterZipcode(zipCode){

    cy.get(this.zipCodeField).clear();
cy.get(this.zipCodeField).type(zipCode);

}

enterMobileNumber(mobileNumber){

    cy.get(this.mobileNumberField).clear();
cy.get(this.mobileNumberField).type(mobileNumber);


}

}