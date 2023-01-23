
export class ChairsPage{

chairsLink = '.chairs > .menu-item-large-container > .menu-item-large';

wickerChair = '.products > :nth-child(1)';
expectedWickerChairStock = 'In stock';
expectedWickerChairDescription = 'Wicker Chair';
expectedWickerChairPrice = '$250.00';
expectedWickerChairIMGSrc = '_nuxt/img/1.71db95e.jpg'


blackShellChair = '.products > :nth-child(2)';
expectedBlackShellChairStock = 'In stock';
expectedBlackShellChairDescription = 'Black Shell Chair';
expectedBlackShellChairPrice = '$320.00';
expectedBlackShellChairIMGSrc = '_nuxt/img/2.77cffca.jpg';


woodenStools = '.products > :nth-child(3)';
expectedWoodenStoolsStock = 'In stock';
expectedWoodenStoolsDescription = 'Wooden Stools';
expectedWoodenStoolsPrice = '$210.00';
expectedWoodenStoolsSrc = '_nuxt/img/3.ebaadf2.jpg';


upholsteredWhiteChair = '.products > :nth-child(4)';
expectedUpholsteredWhiteChairStock = 'Sold out';
expectedUpholsteredWhiteChairDescription = 'Upholstered White Chair';
expectedUpholsteredWhiteChairPrice = '$210.00';
expectedUpholsteredWhiteChairIMGSrc = '_nuxt/img/4.ede59fc.jpg';


whiteShellChair = '.products > :nth-child(5)';
expectedWhiteShellChairStock = 'In stock';
expectedWhiteShellChairDescription = 'White Shell Chair';
expectedWhiteShellChairPrice = '$210.00';
expectedWhiteShellChairIMGSrc = '_nuxt/img/5.f07a2ba.jpg';


modernWoodenChair = '.products > :nth-child(6)';
expectedModernWoodenChairStock = 'In stock';
expectedModernWoodenChairDescription = 'Modern Wooden Chair';
expectedModernWoodenChairPrice = '$210.00';
expectedModernWoodenChairIMGSrc = '_nuxt/img/6.4bf972e.jpg';


tallWoodenStool = '.products > :nth-child(7)';
expectedTallWoodenStoolStock = 'In stock';
expectedTallWoodenStoolDescription = 'Tall Wooden Stool';
expectedTallWoodenStoolPrice = '$210.00';
expectedTallWoodenStoolIMGSrc = '_nuxt/img/7.4244cb5.jpg';


plasticWhiteChair = '.products > :nth-child(8)';
expectedPlasticWhiteChairStock = 'In stock';
expectedPlasticWhiteChairDescription = 'Plastic White Chair';
expectedPlasticWhiteChairPrice = '$210.00';
expectedPlasticWhiteChairIMGSrc = '_nuxt/img/8.5ec24eb.jpg';


upholsteredBlackBarStool = '.products > :nth-child(9)';
expectedUpholsteredBlackBarStoolStock = 'Sold out';
expectedUpholsteredBlackBarStoolDescription = 'Upholstered Black Barstool';
expectedUpholsteredBlackBarStoolPrice = '$210.00';
expectedUpholsteredBlackBarStoolIMGSrc = '_nuxt/img/9.9733e92.jpg';


clickChairsLink(){

cy.get(this.chairsLink).click();
}


assertDescPriceStockIMGWickerChair(){

cy.get(this.wickerChair).should('have.text', ' ' + this.expectedWickerChairStock + ' ' + this.expectedWickerChairDescription + ' ' 
+ this.expectedWickerChairPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedWickerChairIMGSrc);

}

assertDescPriceStockIMGBlackShellChair(){

cy.get(this.blackShellChair).should('have.text', ' ' + this.expectedBlackShellChairStock + ' ' + this.expectedBlackShellChairDescription + ' ' 
+ this.expectedBlackShellChairPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedBlackShellChairIMGSrc);

}

assertDescPriceStockIMGWoodenStools(){

cy.get(this.woodenStools).should('have.text', ' ' + this.expectedWoodenStoolsStock + ' ' + this.expectedWoodenStoolsDescription + ' ' 
+ this.expectedWoodenStoolsPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedWoodenStoolsSrc);

}

assertDescPriceStockIMGUpholsteredWhiteChair(){

cy.get(this.upholsteredWhiteChair).should('have.text', ' ' + this.expectedUpholsteredWhiteChairStock + ' ' + this.expectedUpholsteredWhiteChairDescription + ' ' 
+ this.expectedUpholsteredWhiteChairPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedUpholsteredWhiteChairIMGSrc);

}

assertDescPriceStockIMGWhiteShellChair(){

cy.get(this.whiteShellChair).should('have.text', ' ' + this.expectedWhiteShellChairStock + ' ' + this.expectedWhiteShellChairDescription + ' ' 
+ this.expectedWhiteShellChairPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedWhiteShellChairIMGSrc);

}

assertDescPriceStockIMGModernWoodenChair(){

cy.get(this.modernWoodenChair).should('have.text', ' ' + this.expectedModernWoodenChairStock + ' ' + this.expectedModernWoodenChairDescription + ' ' 
+ this.expectedModernWoodenChairPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedModernWoodenChairIMGSrc);

}

assertDescPriceStockIMGTallWoodenStool(){

cy.get(this.tallWoodenStool).should('have.text', ' ' + this.expectedTallWoodenStoolStock + ' ' + this.expectedTallWoodenStoolDescription + ' ' 
+ this.expectedTallWoodenStoolPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedTallWoodenStoolIMGSrc);

}

assertDescPriceStockIMGPlasticWhiteChair(){

cy.get(this.plasticWhiteChair).should('have.text', ' ' + this.expectedPlasticWhiteChairStock + ' ' + this.expectedPlasticWhiteChairDescription + ' ' 
+ this.expectedPlasticWhiteChairPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedPlasticWhiteChairIMGSrc);

}

assertDescPriceStockIMGUpholsteredBlackBarStool(){

cy.get(this.upholsteredBlackBarStool).should('have.text', ' ' + this.expectedUpholsteredBlackBarStoolStock + ' ' + this.expectedUpholsteredBlackBarStoolDescription + ' ' 
+ this.expectedUpholsteredBlackBarStoolPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedUpholsteredBlackBarStoolIMGSrc);

}


//Sold out items click methods

ClickUpholsteredWhiteChairSoldOut(){

cy.get(this.upholsteredWhiteChair).click()

}

clickUpholsteredBlackBarStoolSoldOut(){

cy.get(this.upholsteredBlackBarStool).click();

}


assertUserOnChairProductsPage(){

cy.get(this.wickerChair).should('be.visible');

}

}

