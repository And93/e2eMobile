import {BasePage} from "src/pages/BasePage";
import {IncomingBlock} from "src/block/IncomingBlock";

export class ApplicationPage extends BasePage {

    public incomingBlock: IncomingBlock;

    constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
        this.incomingBlock = new IncomingBlock(browser);
    };
}
