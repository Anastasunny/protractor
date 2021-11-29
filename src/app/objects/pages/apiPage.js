const { element } = require('protractor');
const BasePage = require('./basePage');

class ApiPage extends BasePage {
    constructor() {
        super();

        this.methodsList = element.all(by.css('.list-unstyled'))
    }
} 

module.exports = ApiPage;