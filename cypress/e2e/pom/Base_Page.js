export class BasePage{

url = 'https://www.shopist.io/';

loadUrl(endpoint){

cy.visit(this.url + endpoint)


}

waitForSync(){

cy.wait(1000);


}

setViewPortTo1280X720(){

    cy.viewport(1280, 720)   // setting the viewport (width height) to get full screen

}




}



