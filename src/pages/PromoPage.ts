import {BasePage} from "src/pages/BasePage";
import {Selector} from "src/helpers/utils/android/Selector";
import {PageElement} from "src/block/BaseBlock";

export class PromoPage extends BasePage {

    private nextButton = Selector.textAndClass("ДАЛЕЕ", this.androidWidgetTextViewClass);
    private startButton = Selector.textAndClass("НАЧАТЬ", this.androidWidgetTextViewClass);

    constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
    };

    get getNextButton(): PageElement {
        return this.getElement(this.nextButton);
    };

    get getStartButton(): PageElement {
        return this.getElement(this.startButton);
    };
}
