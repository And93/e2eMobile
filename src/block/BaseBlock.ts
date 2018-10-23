import {Client, Element, RawResult} from "webdriverio";

export type PageElement = Client<RawResult<Element>> & RawResult<Element>;

export const timeout = {
    xs: 1000,
    s: 5000,
    m: 10000,
    l: 20000,
    xl: 30000,
};

export abstract class BaseBlock {

    protected androidWidgetTextViewClass = "android.widget.TextView";
    protected androidWidgetEditTextClass = "android.widget.EditText";

    protected constructor(protected browser: WebdriverIO.Client<void>) {
    }

    public getElement(selector: string | PageElement, needVisible: boolean = true): PageElement {

        const element: PageElement = typeof selector === "string" ? this.browser.$(selector) : selector;

        if (!element.isExisting()) {
            element.waitForExist();
        } else if (!element.isVisible() && needVisible) {
            element.waitForVisible();
        }

        return element;
    };
}
