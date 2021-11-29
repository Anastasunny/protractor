class BaseObject {

    async isDisplayed(elementName) {
        return await this[elementName].isDisplayed();
    }

    async getAttribute(elementName, attribute) {
        return await this[elementName].getAttribute(attribute);
    }
}

module.exports = BaseObject