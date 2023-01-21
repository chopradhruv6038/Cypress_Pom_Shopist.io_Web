export class EmailVerification{

actualVerificationMsg = '.signup-title';
expectedVerificationMsg01 = 'You';
expectedVerificationMsg02 = 've got Email! Verification required';
actualVerificationMsgWithEmail = '.signup > :nth-child(2) > :nth-child(2)';
expectedVerificationMsgWithEmail = 'You must first verify your email address';



assertverificationMsg(){

cy.get(this.actualVerificationMsg).should('have.text', this.expectedVerificationMsg01 + "'" + this.expectedVerificationMsg02 )



}


assertVerificationMsgWithEmail(email){

cy.get(this.actualVerificationMsgWithEmail).should('have.text', this.expectedVerificationMsgWithEmail + email)


}







}