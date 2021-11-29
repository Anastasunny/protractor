const { browser } = require('protractor');
const { protractor } = require('protractor/built/ptor');
const HomePage = require('../app/objects/pages/homePage')
const ApiPage = require('../app/objects/pages/apiPage')


describe('Protractor Demo App', function() {

    it('Logo exisits + GitHub button is clickable', async function() {
        let homePage = new HomePage();


        await homePage.open();
        expect(await homePage.isDisplayed('mainLogo')).toEqual(true)

        expect(await homePage.isDisplayed('gitHubButton')).toEqual(true)
        expect(await homePage.getAttribute('gitHubButton', 'href')).toEqual('https://github.com/angular/protractor')

        await homePage.gitHubButton.click()
        browser.wait(protractor.ExpectedConditions.urlContains('https://github.com/angular/protractor'), 2000);
    });

    it('Top menu acitons names are valid and clickable', async function() {
        let homePage = new HomePage();
        let navBar = ['Home', 'Quick Start', 'Protractor Setup', 'Protractor Tests', 'Reference']

        await homePage.open();

        for(let i; i < homePage.navBar.count(); i++) {
            let navBarOptions = homePage.navBar.get(i).getText()
            expect(navBar).toContain(navBarOptions)
        }
        
        await homePage.quickStart.click()
        await homePage.dropDownOption(1).click()
        browser.wait(protractor.ExpectedConditions.urlContains('https://www.protractortest.org/#/tutorial'), 2000);

        await homePage.protractorSetup.click()
        await homePage.dropDownOption(1).click()
        browser.wait(protractor.ExpectedConditions.urlContains('https://www.protractortest.org/#/protractor-setup'), 2000);

        await homePage.protractorTests.click()
        await homePage.dropDownOption(1).click()
        browser.wait(protractor.ExpectedConditions.urlContains('https://www.protractortest.org/#/getting-started'), 2000);

        await homePage.reference.click()
        await homePage.dropDownOption(1).click()
        browser.wait(protractor.ExpectedConditions.urlContains('https://github.com/angular/protractor/blob/master/lib/config.ts'), 2000);
    });

    it('Protractor API tests', async function() {
        let apiPage = new ApiPage();

        await apiPage.open('#/api');
        expect(await apiPage.methodsList.count()).toBeGreaterThan(0);
    })
  });