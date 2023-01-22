import { BasePage } from "../pom/Base_Page";
import { SignUp } from "../pom/SignUp_Page";
import { EmailVerification } from "../pom/EmailVerification_Page";


const basepage = new BasePage();

const signup = new SignUp();
const emailverification = new EmailVerification();

let profileDetails;

describe('This suite will Create a new user by entering all the details -> Validating the email sent msg', function(){

beforeEach(()=> {

basepage.loadUrl('/');

basepage.setViewPortTo1280X720();

})

before('Before to read the values from profile details json',()=> {

cy.readFile('./cypress/fixtures/profileDetails.json').then((data) => {

profileDetails = data;

})

})

it('This test will create a new user by entering details and will validate the email msg send',()=> {


signup.clickSignUpBtnHmPG();

signup.assertSignUpPageTitle();

signup.enterFirstName(profileDetails.firstname);

signup.enterLastName(profileDetails.lastname);

signup.enterEmail(profileDetails.Email);

signup.clickSignUpBtn();

emailverification.assertVerificationMsgWithEmail(' ' + profileDetails.Email + '.');

emailverification.assertverificationMsg();




})



})