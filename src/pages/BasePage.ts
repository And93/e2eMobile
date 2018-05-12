import {BaseBlock} from "src/block/BaseBlock";

export abstract class BasePage extends BaseBlock {

    constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
    };
}
