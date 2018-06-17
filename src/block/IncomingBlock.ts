import {BaseBlock, PageElement} from "src/block/BaseBlock";
import {Selector} from "src/helpers/utils/android/Selector";

export class IncomingBlock extends BaseBlock {

    private incomingHeader = Selector.textAndClass("Входящие", this.androidWidgetTextViewClass);

    constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
    };

    get getIncomingHeader(): PageElement {
        return this.browser.$(this.incomingHeader);
    };
}
