import { BasePage } from "./pom/Base_Page";
import { HomePage } from "./pom/Home_Page";
import { ProfilePage } from "./pom/Profile_Page";
import { EditProfilePage } from "./pom/EditProfile_Page";
import { SignUp } from "./pom/SignUp_Page";
import { EmailVerification } from "./pom/EmailVerification_Page";


const basepage = new BasePage();
const homepage = new HomePage();
const profilepage = new ProfilePage();
const editprofilepage = new EditProfilePage();
const signup = new SignUp();
const emailverification = new EmailVerification();

let profileDetails;

describe('Creating a new user by entering all the details -> Validating the success msg and details entered', function(){

beforeEach(()=> {

basepage.loadUrl('/');

basepage.setViewPortTo1280X720();

})

before('Before to read the values from profile details json',()=> {

cy.readFile('./cypress/fixtures/profileDetails.json').then((data) => {

profileDetails = data;

})

})

it('This test will create a new user by entering details and will validate the success msg',()=> {


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