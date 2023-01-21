export class ChairsPage{

chairsLink = '.chairs > .menu-item-large-container > .menu-item-large';

wickerChair = '.products > :nth-child(1)';
expectedWickerChairStock = 'In stock';
expectedWickerChairDescription = 'Wicker Chair';
expectedWickerChairPrice = '$250.00';
expectedWickerChairSrc = '_nuxt/img/1.71db95e.jpg'









blackShellChair = '.products > :nth-child(2)';
woodenStools = '.products > :nth-child(3)';
upholsteredWhiteChair = '.products > :nth-child(4)';
whiteShellChair = '.products > :nth-child(5)';
modernWoodenChair = '.products > :nth-child(6)';
tallWoodenStool = '.products > :nth-child(7)';
plasticWhiteChair = '.products > :nth-child(8)';
upholsteredBlackBarStool = '.products > :nth-child(9)';



clickChairsLink(){

    cy.get(this.chairsLink).click();
}



assertDescPriceStockWickerChair(){

cy.get(this.wickerChair).should('have.text', ' ' + this.expectedWickerChairStock + ' ' + this.expectedWickerChairDescription + ' ' 
+ this.expectedWickerChairPrice);

}


assertWickerChairIMG(){

cy.get(this.wickerChair).find('img').should('have.attr', 'src').should('include', this.expectedWickerChairSrc);

}


}

