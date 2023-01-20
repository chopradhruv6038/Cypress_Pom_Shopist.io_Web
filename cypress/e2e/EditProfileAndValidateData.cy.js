

import { BasePage } from "./pom/Base_Page";
import { HomePage } from "./pom/Home_Page";
import { ProfilePage } from "./pom/Profile_Page";
import { EditProfilePage } from "./pom/EditProfile_Page";


const basepage = new BasePage();
const homepage = new HomePage();
const profilepage = new ProfilePage();
const editprofilepage = new EditProfilePage();

let profileDetails;


describe('This suite will edit a profile and validate that the edits should persist', function(){


beforeEach(()=> {


    basepage.loadUrl('/');

    basepage.setViewPortTo1280X720();


})

before('Before to read the values from profile details json',()=> {

cy.readFile('./cypress/fixtures/profileDetails.json').then((data) => {

    profileDetails = data;
})


})


it('This test will move to edit profile page and edit or update data in all the fields ',  ()=> {


    homepage.clickMyProfileLink();
 
    profilepage.clickEditProfileBtn();

    editprofilepage.uploadProfilePicture();

    editprofilepage.enterFirstName(profileDetails.firstname);

    editprofilepage.enterLastName(profileDetails.lastname);

    editprofilepage.enterAddress01(profileDetails.address01);

    editprofilepage.enterAddress02(profileDetails.address02);

    editprofilepage.enterCity(profileDetails.city);

    editprofilepage.enterZipcode(profileDetails.zipCode);

    editprofilepage.enterMobileNumber(profileDetails.phoneNumber);

    


})


})
