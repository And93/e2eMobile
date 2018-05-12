import {BaseBlock, PageElement} from "src/block/BaseBlock";
import {Selector} from "src/helpers/utils/android/Selector";

export class IncomingBlock extends BaseBlock {

    constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
    };

    get incomingHeader(): PageElement {
        return this.browser.$(Selector.textAndClass("Входящие", "android.widget.TextView"));
    };
}
