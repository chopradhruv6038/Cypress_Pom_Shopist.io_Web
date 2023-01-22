import { BasePage } from "../pom/Base_Page";
import { SofasPage } from "../pom/Sofas_Page";



const basepage = new BasePage();
const sofapage = new SofasPage();



describe('This suite will Validate Sofa products price, description, image and stock details', function(){

beforeEach(()=> {

basepage.loadUrl('/');

basepage.setViewPortTo1280X720();

})


it('This test will validate the price, description, image and stock details of the Sofas',()=> {

sofapage.clickSofasLink();

sofapage.assertStockDescPriceSrcGreyTuftedCouch();

sofapage.assertStockDescPriceSrcBrownLeatherCouch();

sofapage.assertStockDescPriceSrcMinimalistWhiteSofa();

sofapage.assertStockDescPriceSrcPatternedBlueCouch();

sofapage.assertStockDescPriceSrcGreyTuftedCouch();

sofapage.assertStockDescPriceSrcClassicGreySofa();

sofapage.assertStockDescPriceSrcTallTuftedCouch();

sofapage.assertStockDescPriceSrcIvoryCovertibleSofa();

sofapage.assertStockDescPriceSrcBlackVelvetSectional();






})



})