import { BasePage } from "../pom/Base_Page";
import { LightingPage } from "../pom/Lighting_Page";


const basepage = new BasePage();
const lightingpage = new LightingPage();





describe('This suite will Validate Lighting products price, description, image and stock details', function(){

beforeEach(()=> {

basepage.loadUrl('/');

basepage.setViewPortTo1280X720();

})


it('This test will validate the price, description, image and stock details of the Lighting',()=> {

lightingpage.clickLightingLink();

lightingpage.assertDescPriceStockIMGEdisonHangingBulbs();

lightingpage.assertDescPriceStockIMGChromeArcLamp();

lightingpage.assertDescPriceStockIMGGeometricCageHangingLamp();

lightingpage.assertDescPriceStockIMGLaserCutHangingLamp();

lightingpage.assertDescPriceStockIMGMatteGreyFloorLamp();

lightingpage.assertDescPriceStockIMGVintageDeskLamp();

lightingpage.assertDescPriceStockIMGGlassHangingLamp();

lightingpage.assertDescPriceStockIMGModernMultimediaHangingLamp();

lightingpage.assertDescPriceStockIMGAdjustableWallLamp();

})

})


