export class SofasPage{


sofaProductslink = '.sofas > .menu-item-large-container > .menu-item-large';

greyTuftedCouch = '.products > :nth-child(1)';
expectedGreyTuftedCouchStock = 'In stock';
expectedGreyTuftedCouchDescription = 'Grey Tufted Couch';
expectedGreyTuftedPrice = '$850.00'; 
expectedGreyTuftedCouchIMGSrc = '_nuxt/img/10.9ede20f.jpg';

brownLeatherCouch = '.products > :nth-child(2)';
expectedBrownLeatherCouchStock = 'In stock';
expectedBrownLeatherCouchDescription = 'Brown Leather Couch';
expectedBrownLeatherCouchPrice = '$1200.00'; 
expectedBrownLeatherCouchIMGSrc = '_nuxt/img/11.b69116d.jpg';

minimalistWhiteSofa = '.products > :nth-child(3)';
expectedMinimalistWhiteSofaStock = 'In stock';
expectedMinimalistWhiteSofaDescription = 'Minimalist White Sofa';
expectedMinimalistWhiteSofaPrice = '$720.00'; 
expectedMinimalistWhiteSofaIMGSrc = '_nuxt/img/12.90a1baf.jpg';

patternedBlueCouch = '.products > :nth-child(4)';
expectedPatternedBlueCouchStock = 'In stock';
expectedPatternedBlueCouchDescription = 'Patterned Blue Couch';
expectedPatternedBlueCouchPrice = '$410.00'; 
expectedPatternedBlueCouchIMGSrc = '_nuxt/img/13.fd19943.jpg';

greyTuftedCouch = '.products > :nth-child(5)';
expectedGreyTuftedCouchStock = 'In stock';
expectedGreyTuftedCouchDescription = 'Grey Tufted Couch';
expectedGreyTuftedCouchPrice = '$610.00'; 
expectedGreyTuftedCouchIMGSrc = '_nuxt/img/14.c7c5083.jpg';

classicGreySofa = '.products > :nth-child(6)';
expectedClassicGreySofaStock = 'In stock';
expectedClassicGreySofaDescription = 'Classic Grey Sofa';
expectedClassicGreySofaPrice = '$410.00'; 
expectedClassicGreySofaIMGSrc = '_nuxt/img/15.779ee41.jpg';

tallTuftedCouch = '.products > :nth-child(7)';
expectedTallTuftedCouchStock = 'Sold out';
expectedTallTuftedCouchDescription = 'Tall Tufted Couch';
expectedTallTuftedCouchPrice = '$710.00'; 
expectedTallTuftedCouchIMGSrc = '_nuxt/img/16.02998dd.jpg';

ivoryCovertibleSofa = '.products > :nth-child(8)';
expectedIvoryCovertibleSofaStock = 'In stock';
expectedIvoryCovertibleSofaDescription = 'Ivory Covertible Sofa';
expectedIvoryCovertibleSofaPrice = '$510.00'; 
expectedIvoryCovertibleSofaIMGSrc = '_nuxt/img/17.14f457a.jpg';

blackVelvetSectional = '.products > :nth-child(9)';
expectedBlackVelvetSectionalStock = 'In stock';
expectedBlackVelvetSectionalDescription = 'Black Velvet Sectional';
expectedBlackVelvetSectionalPrice = '$1450.00'; 
expectedBlackVelvetSectionalIMGSrc = '_nuxt/img/18.d3a0464.jpg';

clickSofasLink(){

cy.get(this.sofaProductslink).click();

}


assertStockDescPriceSrcGreyTuftedCouch(){

cy.get(this.greyTuftedCouch).should('have.text', ' ' + this.expectedGreyTuftedCouchStock + ' ' + this.expectedGreyTuftedCouchDescription + ' ' 
+ this.expectedGreyTuftedPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedGreyTuftedCouchIMGSrc);

}

assertStockDescPriceSrcBrownLeatherCouch(){

cy.get(this.brownLeatherCouch).should('have.text', ' ' + this.expectedBrownLeatherCouchStock + ' ' + this.expectedBrownLeatherCouchDescription + ' ' 
+ this.expectedBrownLeatherCouchPrice)
.find('img').should('have.attr', 'src').should('include', this.expectedBrownLeatherCouchIMGSrc);



}

assertStockDescPriceSrcMinimalistWhiteSofa(){

    cy.get(this.minimalistWhiteSofa).should('have.text', ' ' + this.expectedMinimalistWhiteSofaStock + ' ' + this.expectedMinimalistWhiteSofaDescription + ' ' 
    + this.expectedMinimalistWhiteSofaPrice)
    .find('img').should('have.attr', 'src').should('include', this.expectedMinimalistWhiteSofaIMGSrc);
    
    
}

assertStockDescPriceSrcPatternedBlueCouch(){

    cy.get(this.patternedBlueCouch).should('have.text', ' ' + this.expectedPatternedBlueCouchStock + ' ' + this.expectedPatternedBlueCouchDescription + ' ' 
    + this.expectedPatternedBlueCouchPrice)
    .find('img').should('have.attr', 'src').should('include', this.expectedPatternedBlueCouchIMGSrc);
    
    
}

assertStockDescPriceSrcGreyTuftedCouch(){

    cy.get(this.patternedBlueCouch).should('have.text', ' ' + this.expectedPatternedBlueCouchStock + ' ' + this.expectedPatternedBlueCouchDescription + ' ' 
    + this.expectedPatternedBlueCouchPrice)
    .find('img').should('have.attr', 'src').should('include', this.expectedPatternedBlueCouchIMGSrc);
    
    
}

assertStockDescPriceSrcClassicGreySofa(){

    cy.get(this.classicGreySofa).should('have.text', ' ' + this.expectedClassicGreySofaStock + ' ' + this.expectedClassicGreySofaDescription + ' ' 
    + this.expectedClassicGreySofaPrice)
    .find('img').should('have.attr', 'src').should('include', this.expectedClassicGreySofaIMGSrc);
    
    
}

assertStockDescPriceSrcTallTuftedCouch(){

    cy.get(this.tallTuftedCouch).should('have.text', ' ' + this.expectedTallTuftedCouchStock + ' ' + this.expectedTallTuftedCouchDescription + ' ' 
    + this.expectedTallTuftedCouchPrice)
    .find('img').should('have.attr', 'src').should('include', this.expectedTallTuftedCouchIMGSrc);
    
    
}

assertStockDescPriceSrcIvoryCovertibleSofa(){

    cy.get(this.ivoryCovertibleSofa).should('have.text', ' ' + this.expectedIvoryCovertibleSofaStock + ' ' + this.expectedIvoryCovertibleSofaDescription + ' ' 
    + this.expectedIvoryCovertibleSofaPrice)
    .find('img').should('have.attr', 'src').should('include', this.expectedIvoryCovertibleSofaIMGSrc);
    
    
}

assertStockDescPriceSrcBlackVelvetSectional(){

    cy.get(this.blackVelvetSectional).should('have.text', ' ' + this.expectedBlackVelvetSectionalStock + ' ' + this.expectedBlackVelvetSectionalDescription + ' ' 
    + this.expectedBlackVelvetSectionalPrice)
    .find('img').should('have.attr', 'src').should('include', this.expectedBlackVelvetSectionalIMGSrc);
    
    
}

clickTallTuftedCouchSoldOut(){

cy.get(this.tallTuftedCouch).click();

}

assertUserOnSofaPage(){

cy.get(this.tallTuftedCouch).should('be.visible');

}

}