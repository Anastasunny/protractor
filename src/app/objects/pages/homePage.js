const { element } = require('protractor');
const BasePage = require('./basePage');

class HomePage extends BasePage {
    constructor() {
        super();

        this.mainLogo = element(by.css('.protractor-logo'));
        this.columnTitles = element.all(by.css('.col-sm-4'));
        this.gitHubButton = element(by.css('.github-button'));

        this.navBar = element.all(by.css('.navbar-nav'));
        this.quickStart = element(by.id('drop1'));
        this.protractorSetup = element(by.id('drop2'));
        this.protractorTests = element(by.id('drop3'));
        this.reference = element(by.id('drop4'));
        this.dropDownOptionsAmount = element.all(by.css('.dropdown-menu'))
        this.ApiSearchField = element(by.id('searchInput'))
    }

    dropDownOption(nthChild) {
        return element(by.css(`li.dropdown.open > ul > li:nth-child(${nthChild})`))
    } 


}

module.exports = HomePage;