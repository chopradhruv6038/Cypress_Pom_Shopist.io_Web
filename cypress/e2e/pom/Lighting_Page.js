export class LightingPage{

lightingPageLink = '.lighting > .menu-item-large-container > .menu-item-large';


edisonHangingBulbs = '.products > :nth-child(1)';
expectedEdisonHangingBulbsStock = 'Sold out';
expectedEdisonHangingBulbsDescription = 'Edison Hanging Bulbs';
expectedEdisonHangingBulbsPrice = '$250.00';
expectedEdisonHangingBulbsIMGSrc = '_nuxt/img/28.1819ff2.jpg'

chromeArcLamp = '.products > :nth-child(2)' ;
expectedChromeArcLampStock = 'In stock';
expectedChromeArcLampDescription = 'Chrome Arc Lamp';
expectedChromeArcLampPrice = '$320.00';
expectedChromeArcLampIMGSrc = '_nuxt/img/29.e950744.jpg'

GeometricCageHangingLamp = '.products > :nth-child(3)';
expectedGeometricCageHangingLampStock = 'In stock';
expectedGeometricCageHangingLampDescription = 'Geometric Cage Hanging Lamp';
expectedGeometricCageHangingLampPrice = '$210.00';
expectedGeometricCageHangingLampIMGSrc = '_nuxt/img/30.54e8738.jpg'

LaserCutHangingLamp = '.products > :nth-child(4)';
expectedLaserCutHangingLampStock = 'In stock';
expectedLaserCutHangingLampDescription = 'Laser Cut Hanging Lamp';
expectedLaserCutHangingLampPrice = '$210.00';
expectedLaserCutHangingLampIMGSrc = '_nuxt/img/31.b239f37.jpg'


matteGreyFloorLamp = '.products > :nth-child(5)';
expectedMatteGreyFloorLampStock = 'In stock';
expectedMatteGreyFloorLampDescription = 'Matte Grey Floor Lamp';
expectedMatteGreyFloorLampPrice = '$210.00';
expectedMatteGreyFloorLampIMGSrc = '_nuxt/img/32.35ac7ce.jpg'


vintageDeskLamp = '.products > :nth-child(6)';
expectedvintageDeskLampStock = 'In stock';
expectedvintageDeskLampDescription = 'Vintage Desk Lamp';
expectedvintageDeskLampPrice = '$210.00';
expectedvintageDeskLampIMGSrc = '_nuxt/img/33.b1a4010.jpg'


glassHangingLamp = '.products > :nth-child(7)';
expectedGlassHangingLampStock = 'In stock';
expectedGlassHangingLampDescription = 'Glass Hanging Lamp';
expectedGlassHangingLampPrice = '$210.00';
expectedGlassHangingLampIMGSrc = '_nuxt/img/34.2cf63ab.jpg'


ModernMultimediaHangingLamp = '.products > :nth-child(8)';
expectedModernMultimediaHangingLampStock = 'In stock';
expectedModernMultimediaHangingLampDescription = 'Modern Multimedia Hanging Lamp';
expectedModernMultimediaHangingLampPrice = '$210.00';
expectedModernMultimediaHangingLampIMGSrc = '_nuxt/img/35.cbae255.jpg'


AdjustableWallLamp = '.products > :nth-child(9)';
expectedAdjustableWallLampStock = 'In stock';
expectedAdjustableWallLampDescription = 'Adjustable Wall Lamp';
expectedAdjustableWallLampPrice = '$210.00';
expectedAdjustableWallLampIMGSrc = '_nuxt/img/36.072c7ee.jpg'





clickLightingLink(){

cy.get(this.lightingPageLink).click();


}

assertDescPriceStockIMGEdisonHangingBulbs(){

cy.get(this.edisonHangingBulbs).should('have.text', ' ' + this.expectedEdisonHangingBulbsStock + ' ' + this.expectedEdisonHangingBulbsDescription + ' ' 
+ this.expectedEdisonHangingBulbsPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedEdisonHangingBulbsIMGSrc);

}

assertDescPriceStockIMGChromeArcLamp(){

cy.get(this.chromeArcLamp).should('have.text', ' ' + this.expectedChromeArcLampStock + ' ' + this.expectedChromeArcLampDescription + ' ' 
+ this.expectedChromeArcLampPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedChromeArcLampIMGSrc);

}

assertDescPriceStockIMGGeometricCageHangingLamp(){

cy.get(this.GeometricCageHangingLamp).should('have.text', ' ' + this.expectedGeometricCageHangingLampStock + ' ' + this.expectedGeometricCageHangingLampDescription + ' ' 
+ this.expectedGeometricCageHangingLampPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedGeometricCageHangingLampIMGSrc);

}

assertDescPriceStockIMGLaserCutHangingLamp(){

cy.get(this.LaserCutHangingLamp).should('have.text', ' ' + this.expectedLaserCutHangingLampStock + ' ' + this.expectedLaserCutHangingLampDescription + ' ' 
+ this.expectedLaserCutHangingLampPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedLaserCutHangingLampIMGSrc);

}


assertDescPriceStockIMGMatteGreyFloorLamp(){

cy.get(this.matteGreyFloorLamp).should('have.text', ' ' + this.expectedMatteGreyFloorLampStock + ' ' + this.expectedMatteGreyFloorLampDescription + ' ' 
+ this.expectedMatteGreyFloorLampPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedMatteGreyFloorLampIMGSrc);

}

assertDescPriceStockIMGVintageDeskLamp(){

cy.get(this.vintageDeskLamp).should('have.text', ' ' + this.expectedvintageDeskLampStock + ' ' + this.expectedvintageDeskLampDescription + ' ' 
+ this.expectedvintageDeskLampPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedvintageDeskLampIMGSrc);

}

assertDescPriceStockIMGGlassHangingLamp(){

cy.get(this.glassHangingLamp).should('have.text', ' ' + this.expectedGlassHangingLampStock + ' ' + this.expectedGlassHangingLampDescription + ' ' 
+ this.expectedGlassHangingLampPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedGlassHangingLampIMGSrc);

}

assertDescPriceStockIMGModernMultimediaHangingLamp(){

cy.get(this.ModernMultimediaHangingLamp).should('have.text', ' ' + this.expectedModernMultimediaHangingLampStock + ' ' + this.expectedModernMultimediaHangingLampDescription + ' ' 
+ this.expectedModernMultimediaHangingLampPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedModernMultimediaHangingLampIMGSrc);

}


assertDescPriceStockIMGAdjustableWallLamp(){

cy.get(this.AdjustableWallLamp).should('have.text', ' ' + this.expectedAdjustableWallLampStock + ' ' + this.expectedAdjustableWallLampDescription + ' ' 
+ this.expectedAdjustableWallLampPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedAdjustableWallLampIMGSrc);

}

clickEdisonHangingBulbsSoldOut(){

    cy.get(this.edisonHangingBulbs).click();
}

assertUserOnLightingPage(){

cy.get(this.edisonHangingBulbs).should('be.visible');

}

}