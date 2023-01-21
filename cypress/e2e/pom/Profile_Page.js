export class ProfilePage{



editProfileBtnField = '.button';
profilePictureImageSection = 'section.profile > .profile > :nth-child(1)';
profilePicturNameSection = 'section.profile > .profile > :nth-child(1) > :nth-child(2)';
addressSection = 'section.profile > .profile > :nth-child(2)';
mobileSection = ':nth-child(3) > [data-dd-privacy="mask"]';





assertProfilePicture(){ 

cy.get(this.profilePictureImageSection).find('img').should('have.attr', 'src').should('include','data:image/png');


}


assertFirstAndLastName(FullName){

cy.get(this.profilePicturNameSection).should('include.text', FullName);

}

assertFullAddress(fullAddress){

cy.get(this.addressSection).should('have.text', fullAddress);

}

assertMobileNumber(mobileNumber){

cy.get(this.mobileSection).should('include.text', mobileNumber);

}

clickEditProfileBtn(){

cy.get(this.editProfileBtnField).click()

}

}