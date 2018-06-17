import {BasePage} from "src/pages/BasePage";
import {Selector} from "src/helpers/utils/android/Selector";
import {Employee} from "src/fixtures/Employee";
import {PageElement} from "src/block/BaseBlock";

export class LogInPage extends BasePage {

    private accountInput = Selector.contentDisposition("input-login_account");
    private emailInput = Selector.contentDisposition("input-login_login");
    private passwordInput = Selector.contentDisposition("input-login_password");
    private logInButton = Selector.contentDisposition("button_login");
    private registrationButton = Selector.contentDisposition("button_go_register");

    constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
    };

    get getAccountInput(): PageElement {
        return this.getElement(this.accountInput);
    };

    get getEmailInput(): PageElement {
        return this.getElement(this.emailInput);
    };

    get getPasswordInput(): PageElement {
        return this.getElement(this.passwordInput);
    };

    get getLogInButton(): PageElement {
        return this.getElement(this.logInButton);
    };

    get getRegistrationButton(): PageElement {
        return this.getElement(this.registrationButton);
    };

    public fillLogInForm(employee: Employee) {
        this.getAccountInput.setValue(employee.account);
        this.getEmailInput.setValue(employee.login);
        this.getPasswordInput.setValue(employee.password);
        this.browser.back();
    };
}
