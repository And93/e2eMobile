import {BasePage} from "src/pages/BasePage";
import {Selector} from "src/helpers/utils/android/Selector";
import {PageElement} from "src/block/BaseBlock";

export class PromoPage extends BasePage {

    constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
    };

    get nextButton(): PageElement {
        return this.getElement(Selector.textAndClass("ДАЛЕЕ", "android.widget.TextView"));
    };

    get startButton(): PageElement {
        return this.getElement(Selector.textAndClass("НАЧАТЬ", "android.widget.TextView"));
    };
}
