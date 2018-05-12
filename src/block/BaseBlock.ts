import {Client, Element, RawResult} from "webdriverio";

export type PageElement = Client<RawResult<Element>> & RawResult<Element>;

export const timeout = {
    xs: 1000,
    s: 5000,
    m: 10000,
    l: 20000,
    xl: 30000,
};

export class BaseBlock {

    constructor(protected browser: WebdriverIO.Client<void>) {
    }

    public getElement(selector: string | PageElement, needVisible: boolean = true): PageElement {

        if (typeof selector === "string") {
            if (!this.browser.$(selector).isExisting()) {
                this.browser.$(selector).waitForExist()
            } else if (needVisible && !this.browser.$(selector).isVisible()) {
                this.browser.$(selector).waitForVisible()
            }
        } else {
            if (!selector.isExisting()) {
                selector.waitForExist()
            } else if (needVisible && !selector.isVisible()) {
                selector.waitForVisible()
            }
        }

        const element = typeof selector === "string" ? this.browser.$(selector) : selector;

        return element;
    };
}
