import { BasePage } from "../pom/Base_Page";
import { LightingPage } from "../pom/Lighting_Page";
import { ChairsPage } from "../pom/Chairs_Page";


const basepage = new BasePage();
const lightingpage = new LightingPage();
const chairspage = new ChairsPage();

describe('This suite will test the alert box and text of sold out items on clicking', function(){

beforeEach(()=> {

basepage.loadUrl('/');

basepage.setViewPortTo1280X720();

})


it('This suite will test the alert box and its Text on clicking a sold out item, it will then click on continue btn, will validate that user is back on product page and will again click on a product which is sold out and assert the sold out text',()=> {

chairspage.clickChairsLink();

chairspage.ClickUpholsteredWhiteChairSoldOut();

basepage.AssertSoldOutAlertBoxText();

basepage.clickContinueBtnOnSoldOutAlert();

chairspage.assertUserOnChairProductsPage(); // assering user is back on chair products page.

chairspage.clickUpholsteredBlackBarStoolSoldOut();

basepage.AssertSoldOutAlertBoxText();

})




})
