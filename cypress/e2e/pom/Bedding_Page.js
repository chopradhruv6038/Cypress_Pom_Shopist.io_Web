export class BeddingPage{

beddingLink = '.bedding > .menu-item-large-container > .menu-item-large';

whiteLinenDuvetCover = '.products > :nth-child(1)';
expectedWhiteLinenDuvetCoverStock = 'In stock';
expectedWhiteLinenDuvetCoverDescription = 'White Linen Duvet Cover';
expectedWhiteLinenDuvetCoverPrice = '$2200.00';
expectedWhiteLinenDuvetCoverIMGSrc = '_nuxt/img/19.9549759.jpg'

whiteAndGreyStripedDuvetCover = '.products > :nth-child(2)';
expectedWhiteAndGreyStripedDuvetCoverStock = 'In stock';
expectedWhiteAndGreyStripedDuvetCoverDescription = 'White and Grey Striped Duvet Cover';
expectedWhiteAndGreyStripedDuvetCoverPrice = '$320.00';
expectedWhiteAndGreyStripedDuvetCoverIMGSrc = '_nuxt/img/20.0cd8742.jpg'

patternedGreyComforter = '.products > :nth-child(3)';
expectedPatternedGreyComforterStock = 'In stock';
expectedPatternedGreyComforterDescription = 'Patterned Grey Comforter';
expectedPatternedGreyComforterPrice = '$210.00';
expectedPatternedGreyComforterIMGSrc = '_nuxt/img/21.18d1ffc.jpg'

paneledGreyComforter = '.products > :nth-child(4)';
expectedPaneledGreyComforterStock = 'Sold out';
expectedPaneledGreyComforterDescription = 'Paneled Grey Comforter';
expectedPaneledGreyComforterPrice = '$210.00';
expectedPaneledGreyComforterIMGSrc = '_nuxt/img/22.616c5a3.jpg';

greyEmbroideredDuvetCover = '.products > :nth-child(5)';
expectedGreyEmbroideredDuvetCoverStock = 'Sold out';
expectedGreyEmbroideredDuvetCoverDescription = 'Grey Embroidered Duvet Cover';
expectedGreyEmbroideredDuvetCoverPrice = '$210.00';
expectedGreyEmbroideredDuvetCoverIMGSrc = '_nuxt/img/23.0d07763.jpg';

patternedDuvetCover = '.products > :nth-child(6)';
expectedPatternedDuvetCoverStock = 'In stock';
expectedPatternedDuvetCoverDescription = 'Patterned Duvet Cover';
expectedPatternedDuvetCoverPrice = '$210.00';
expectedPatternedDuvetCoverIMGSrc = '_nuxt/img/24.ba5cbb7.jpg';

blueFeatherDuvetCover = '.products > :nth-child(7)';
expectedBlueFeatherDuvetCoverStock = 'In stock';
expectedBlueFeatherDuvetCoverDescription = 'Blue Feather Duvet Cover';
expectedBlueFeatherDuvetCoverPrice = '$210.00';
expectedBlueFeatherDuvetCoverIMGSrc = '_nuxt/img/25.1847af8.jpg';

tropicalPatternSheet = '.products > :nth-child(8)';
expectedTropicalPatternSheetStock = 'In stock';
expectedTropicalPatternSheetDescription = 'Tropical Pattern Sheet';
expectedTropicalPatternSheetPrice = '$210.00';
expectedTropicalPatternSheetIMGSrc = '_nuxt/img/26.8315f83.jpg';

cleanWhiteComforter = '.products > :nth-child(9)';
expectedCleanWhiteComforterStock = 'In stock';
expectedCleanWhiteComforterDescription = 'Clean White Comforter';
expectedCleanWhiteComforterPrice = '$210.00';
expectedCleanWhiteComforterIMGSrc = '_nuxt/img/27.b2c74c7.jpg';

clickBeddingLink(){

cy.get(this.beddingLink).click();


}

assertStockDescPriceIMGSrcwhiteLinenDuvetCover(){

cy.get(this.whiteLinenDuvetCover).should('have.text', ' ' + this.expectedWhiteLinenDuvetCoverStock + ' ' + this.expectedWhiteLinenDuvetCoverDescription + ' ' 
+ this.expectedWhiteLinenDuvetCoverPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedWhiteLinenDuvetCoverIMGSrc);


}

assertStockDescPriceIMGSrcWhiteAndGreyStripedDuvetCover(){

cy.get(this.whiteAndGreyStripedDuvetCover).should('have.text', ' ' + this.expectedWhiteAndGreyStripedDuvetCoverStock + ' ' + this.expectedWhiteAndGreyStripedDuvetCoverDescription + ' ' 
+ this.expectedWhiteAndGreyStripedDuvetCoverPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedWhiteAndGreyStripedDuvetCoverIMGSrc);


}

assertStockDescPriceIMGSrcPatternedGreyComforter(){

cy.get(this.patternedGreyComforter).should('have.text', ' ' + this.expectedPatternedGreyComforterStock + ' ' + this.expectedPatternedGreyComforterDescription + ' ' 
+ this.expectedPatternedGreyComforterPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedPatternedGreyComforterIMGSrc);


}

assertStockDescPriceIMGSrcPaneledGreyComforter(){

cy.get(this.paneledGreyComforter).should('have.text', ' ' + this.expectedPaneledGreyComforterStock + ' ' + this.expectedPaneledGreyComforterDescription + ' ' 
+ this.expectedPaneledGreyComforterPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedPaneledGreyComforterIMGSrc);


}

assertStockDescPriceIMGSrcGreyEmbroideredDuvetCover(){

cy.get(this.greyEmbroideredDuvetCover).should('have.text', ' ' + this.expectedGreyEmbroideredDuvetCoverStock + ' ' + this.expectedGreyEmbroideredDuvetCoverDescription + ' ' 
+ this.expectedGreyEmbroideredDuvetCoverPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedGreyEmbroideredDuvetCoverIMGSrc);


}

assertStockDescPriceIMGSrcPatternedDuvetCover(){

cy.get(this.patternedDuvetCover).should('have.text', ' ' + this.expectedPatternedDuvetCoverStock + ' ' + this.expectedPatternedDuvetCoverDescription + ' ' 
+ this.expectedPatternedDuvetCoverPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedPatternedDuvetCoverIMGSrc);


}

assertStockDescPriceIMGSrcBlueFeatherDuvetCover(){

cy.get(this.blueFeatherDuvetCover).should('have.text', ' ' + this.expectedBlueFeatherDuvetCoverStock + ' ' + this.expectedBlueFeatherDuvetCoverDescription + ' ' 
+ this.expectedBlueFeatherDuvetCoverPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedBlueFeatherDuvetCoverIMGSrc);


}

assertStockDescPriceIMGSrcTropicalPatternSheet(){

cy.get(this.tropicalPatternSheet).should('have.text', ' ' + this.expectedTropicalPatternSheetStock + ' ' + this.expectedTropicalPatternSheetDescription + ' ' 
+ this.expectedTropicalPatternSheetPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedTropicalPatternSheetIMGSrc);


}

assertStockDescPriceIMGSrcCleanWhiteComforter(){

cy.get(this.cleanWhiteComforter).should('have.text', ' ' + this.expectedCleanWhiteComforterStock + ' ' + this.expectedCleanWhiteComforterDescription + ' ' 
+ this.expectedCleanWhiteComforterPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedCleanWhiteComforterIMGSrc);


}


clickPaneledGreyComforterSoldOut(){

cy.get(this.paneledGreyComforter).click();

}

clickGreyEmbroideredDuvetCoverSoldOut(){

cy.get(this.greyEmbroideredDuvetCover).click();

}

assertUserOnBeddingPage(){

cy.get(this.paneledGreyComforter).should('be.visible');

}

}