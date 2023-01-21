import { BasePage } from "./pom/Base_Page";
import { HomePage } from "./pom/Home_Page";
import { ChairsPage } from "./pom/Chairs_Page";


const basepage = new BasePage();
const homepage = new HomePage();
const chairspage = new ChairsPage();


describe('Validating Chair products price, description, image and stock details', function(){

beforeEach(()=> {

basepage.loadUrl('/');

basepage.setViewPortTo1280X720();

})


it('This test will validate the price, description, image and stock details of the chairs',()=> {

chairspage.clickChairsLink();

chairspage.assertDescPriceStockWickerChair();

chairspage.assertWickerChairIMG();


})



})