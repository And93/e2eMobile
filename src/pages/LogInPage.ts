import {BasePage} from "src/pages/BasePage";
import {Selector} from "src/helpers/utils/android/Selector";
import {Employee} from "src/fixtures/Employee";
import {PageElement} from "src/block/BaseBlock";

export class LogInPage extends BasePage {

    constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
    };

    get accountInput(): PageElement {
        return this.getElement(Selector.contentDisposition("input-login_account"));
    };

    get emailInput(): PageElement {
        return this.getElement(Selector.contentDisposition("input-login_login"));
    };

    get passwordInput(): PageElement {
        return this.getElement(Selector.contentDisposition("input-login_password"));
    };

    get logInButton(): PageElement {
        return this.getElement(Selector.contentDisposition("button_login"));
    };

    get registrationButton(): PageElement {
        return this.getElement(Selector.contentDisposition("button_go_register"));
    };

    public fillLogInForm(employee: Employee) {
        this.accountInput.setValue(employee.account);
        this.emailInput.setValue(employee.login);
        this.passwordInput.setValue(employee.password);
        this.browser.back();
    };
}
