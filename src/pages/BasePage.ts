import {BaseBlock} from "src/block/BaseBlock";

export abstract class BasePage extends BaseBlock {

    protected constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
    };
}
