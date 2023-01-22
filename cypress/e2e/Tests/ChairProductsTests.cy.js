import { BasePage } from "../pom/Base_Page";
import { ChairsPage } from "../pom/Chairs_Page";


const basepage = new BasePage();
const chairspage = new ChairsPage();


describe('This suite will Validate Chair products price, description, image and stock details', function(){

beforeEach(()=> {

basepage.loadUrl('/');

basepage.setViewPortTo1280X720();

})


it('This test will validate the price, description, image and stock details of the chairs',()=> {

chairspage.clickChairsLink();

//Validating / asserting all information for all chair types 

chairspage.assertDescPriceStockIMGWickerChair();

chairspage.assertDescPriceStockIMGBlackShellChair();

chairspage.assertDescPriceStockIMGWoodenStools();

chairspage.assertDescPriceStockIMGUpholsteredWhiteChair();

chairspage.assertDescPriceStockIMGWhiteShellChair();

chairspage.assertDescPriceStockIMGModernWoodenChair();

chairspage.assertDescPriceStockIMGTallWoodenStool();

chairspage.assertDescPriceStockIMGPlasticWhiteChair();

chairspage.assertDescPriceStockIMGUpholsteredBlackBarStool();


})



})