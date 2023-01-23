import { BasePage } from "../pom/Base_Page";
import { LightingPage } from "../pom/Lighting_Page";
import { ChairsPage } from "../pom/Chairs_Page";
import { BeddingPage } from "../pom/Bedding_Page";
import { SofasPage } from "../pom/Sofas_Page";


const basepage = new BasePage();
const lightingpage = new LightingPage();
const chairspage = new ChairsPage();
const beddingpage = new BeddingPage();
const sofapage = new SofasPage();


describe('This suite will test the alert box and text of sold out items on clicking and navigation', function(){

beforeEach(()=> {

basepage.loadUrl('/');

basepage.setViewPortTo1280X720();

})


it('ChairePage : This suite will test the alert box and its Text on clicking a sold out item, it will then click on continue btn, will validate that user is back on product page and will again click on a product which is sold out and assert the sold out text',()=> {

chairspage.clickChairsLink();

chairspage.ClickUpholsteredWhiteChairSoldOut();

basepage.AssertSoldOutAlertBoxText();

basepage.clickContinueBtnOnSoldOutAlert();

chairspage.assertUserOnChairProductsPage(); // assering user is back on chair products page.

chairspage.clickUpholsteredBlackBarStoolSoldOut();

basepage.AssertSoldOutAlertBoxText();

})

it('Beddings Page : This suite will test the alert box and its Text on clicking a sold out item, it will then click on continue btn, will validate that user is back on product page and will again click on a product which is sold out and assert the sold out text',()=> {

beddingpage.clickBeddingLink();

beddingpage.clickPaneledGreyComforterSoldOut();

basepage.AssertSoldOutAlertBoxText();

basepage.clickContinueBtnOnSoldOutAlert();

beddingpage.assertUserOnBeddingPage();// assering user is back on Bedding products page.

beddingpage.clickGreyEmbroideredDuvetCoverSoldOut();

basepage.AssertSoldOutAlertBoxText();

})

it('Lightings Page : This suite will test the alert box and its Text on clicking a sold out item, it will then click on continue btn, will validate that user is back on product page and will again click on a product which is sold out and assert the sold out text',()=> {

lightingpage.clickLightingLink();

lightingpage.clickEdisonHangingBulbsSoldOut();

basepage.AssertSoldOutAlertBoxText();

basepage.clickContinueBtnOnSoldOutAlert();

lightingpage.assertUserOnLightingPage();// assering user is back on Lightings products page.

})


it('Sofas Page : This suite will test the alert box and its Text on clicking a sold out item, it will then click on continue btn, will validate that user is back on product page and will again click on a product which is sold out and assert the sold out text',()=> {

    sofapage.clickSofasLink();
    
    sofapage.clickTallTuftedCouchSoldOut();
    
    basepage.AssertSoldOutAlertBoxText();
    
    basepage.clickContinueBtnOnSoldOutAlert();
    
    sofapage.assertUserOnSofaPage(); // assering user is back on Lightings products page.
    
    })

})
