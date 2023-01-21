export class SignUp{

signUpBtn = '.signup-button';
actualSignUpPageTitle = '.signup-title';
expectedSignUpPageTitle = 'Sign up for Shopist today!';
firstNameField = '#fn-input';
lastNameField = '#ln-input';
emailField = '#email-addr-input';
signUpField = '.signup > .signup-button';


clickSignUpBtnHmPG(){


cy.get(this.signUpBtn).click();

}

assertSignUpPageTitle(){

return cy.get(this.actualSignUpPageTitle).should('have.text', this.expectedSignUpPageTitle);


}


enterFirstName(firstName){

cy.get(this.firstNameField).type(firstName);

}


enterLastName(lastName){

cy.get(this.lastNameField).type(lastName);

}


enterEmail(email){

    cy.get(this.emailField).type(email);
    
    }


clickSignUpBtn(){

cy.get(this.signUpField).click();

}



}