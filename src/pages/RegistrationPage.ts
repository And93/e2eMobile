import {BasePage} from "src/pages/BasePage";
import {Selector} from "src/helpers/utils/android/Selector";
import * as moment from "moment";
import {RegistrationData} from "src/fixtures/RegistrationData";
import {PageElement} from "src/block/BaseBlock";


export class RegistrationPage extends BasePage {

    constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
    };

    get emailInput(): PageElement {
        return this.getElement(Selector.textAndClass("Эл. почта", "android.widget.EditText"));
    };

    get nameInput() {
        return this.getElement(Selector.textAndClass("Имя Фамилия", "android.widget.EditText"));
    };

    get phoneInput(): PageElement {
        return this.getElement(Selector.indexAndClass(7, "android.widget.EditText"));
    };

    get registrationButton(): PageElement {
        return this.getElement(Selector.contentDisposition("button_register"));
    };

    get smsInput(): PageElement {
        return this.getElement(Selector.textAndClass("Код из СМС", "android.widget.EditText"));
    };

    get comeInInput(): PageElement {
        return this.getElement(Selector.textAndClass("ВОЙТИ", "android.widget.TextView"))
    }

    get invalidEmailValidationMessage() {
        return this.browser.$(Selector.textAndClass("Укажите корректный Email", "android.widget.TextView"))
    }

    get repeatEmailValidationMessage() {
        return this.browser.$(Selector.textAndClass("Аккаунт с такой электропочтой уже зарегистрирован", "android.widget.TextView"))
    }

    /**
     * Mock sms data for test
     * @returns {string}
     */

    private get randomEmail(): string {
        const random = String(Math.floor(Math.random() * 123000));
        return `...+${random}@.......`
    };

    private get code(): string {

        const currentMoment = moment().locale("ru");
        let doubleMonth: any = Number(currentMoment.format("MM")) * 2;
        let doubleDay: any = Number(currentMoment.format("DD")) * 2;

        doubleMonth = doubleMonth < 10 ? "0" + String(doubleMonth) : String(doubleMonth);
        doubleDay = doubleDay < 10 ? "0" + String(doubleDay) : String(doubleDay);

        return doubleMonth + doubleDay;
    };

    public fillRegistrationForm(data: RegistrationData) {

        this.emailInput.setValue(this.randomEmail);
        this.nameInput.setValue(data.fullName);
        this.phoneInput.setValue(data.phone);

        if (this.invalidEmailValidationMessage.isVisible() || this.repeatEmailValidationMessage.isVisible()) {
            this.emailInput.setValue(this.randomEmail);
        }

        this.browser.back();
        this.registrationButton.click();
        this.smsInput.setValue(this.code);
        this.browser.back();
    }
}
