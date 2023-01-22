import { BasePage } from "../pom/Base_Page";
import { BeddingPage } from "../pom/Bedding_Page";


const basepage = new BasePage();
const beddingpage = new BeddingPage();




describe('This suite will Validate Beddings products price, description, image and stock details', function(){

beforeEach(()=> {

basepage.loadUrl('/');

basepage.setViewPortTo1280X720();

})


it('This test will validate the price, description, image and stock details of the Beddings',()=> {


beddingpage.clickBeddingLink();

beddingpage.assertStockDescPriceIMGSrcwhiteLinenDuvetCover();

beddingpage.assertStockDescPriceIMGSrcWhiteAndGreyStripedDuvetCover();

beddingpage.assertStockDescPriceIMGSrcPatternedGreyComforter();

beddingpage.assertStockDescPriceIMGSrcPaneledGreyComforter();

beddingpage.assertStockDescPriceIMGSrcGreyEmbroideredDuvetCover();

beddingpage.assertStockDescPriceIMGSrcPatternedDuvetCover();

beddingpage.assertStockDescPriceIMGSrcBlueFeatherDuvetCover();

beddingpage.assertStockDescPriceIMGSrcTropicalPatternSheet();

beddingpage.assertStockDescPriceIMGSrcCleanWhiteComforter();





})



})