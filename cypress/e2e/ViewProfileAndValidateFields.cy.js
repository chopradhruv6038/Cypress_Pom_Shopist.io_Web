
import { BasePage } from "./pom/Base_Page";
import { HomePage } from "./pom/Home_Page";
import { ProfilePage } from "./pom/Profile_Page";


const basepage = new BasePage();
const homepage = new HomePage();
const profilepage = new ProfilePage();



describe('This suite will test and validate the fields on profile screen', function(){

beforeEach('Before Each for loading the URL', ()=> {

  basepage.loadUrl('/');

  basepage.setViewPortTo1280X720();

})


it('Viewing User profile and validating the fields to be displayed', ()=> {

homepage.clickMyProfileLink();
 
profilepage.assertProfilePictureIconIsDisplayed();

profilepage.assertShippingAddressFieldIsDisplayed();

profilepage.assertPhoneFieldIsDisplayed();

profilepage.assertEditProdileBtnIsDisplayed();

})






})