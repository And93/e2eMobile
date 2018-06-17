import {BasePage} from "src/pages/BasePage";
import {Selector} from "src/helpers/utils/android/Selector";
import * as moment from "moment";
import {RegistrationData} from "src/fixtures/RegistrationData";
import {PageElement} from "src/block/BaseBlock";


export class RegistrationPage extends BasePage {

    private emailInput = Selector.textAndClass("Эл. почта", this.androidWidgetEditTextClass);
    private nameInput = Selector.textAndClass("Имя Фамилия", this.androidWidgetEditTextClass);
    private phoneInput = Selector.indexAndClass(7, this.androidWidgetEditTextClass);
    private registrationButton = Selector.contentDisposition("button_register");
    private smsInput = Selector.textAndClass("Код из СМС", this.androidWidgetEditTextClass);
    private comeInInput = Selector.textAndClass("ВОЙТИ", this.androidWidgetTextViewClass);
    private invalidEmailValidationMessage = Selector.textAndClass("Укажите корректный Email", this.androidWidgetTextViewClass);
    private repeatEmailValidationMessage =
        Selector.textAndClass("Аккаунт с такой электропочтой уже зарегистрирован", this.androidWidgetTextViewClass);

    constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
    };

    get getEmailInput(): PageElement {
        return this.getElement(this.emailInput);
    };

    get getNameInput() {
        return this.getElement(this.nameInput);
    };

    get getPhoneInput(): PageElement {
        return this.getElement(this.phoneInput);
    };

    get getRegistrationButton(): PageElement {
        return this.getElement(this.registrationButton);
    };

    get getSmsInput(): PageElement {
        return this.getElement(this.smsInput);
    };

    get getComeInInput(): PageElement {
        return this.getElement(this.comeInInput)
    }

    get getInvalidEmailValidationMessage() {
        return this.browser.$(this.invalidEmailValidationMessage);
    };

    get getRepeatEmailValidationMessage() {
        return this.browser.$(this.repeatEmailValidationMessage);
    };

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

        this.getEmailInput.setValue(this.randomEmail);
        this.getNameInput.setValue(data.fullName);
        this.getPhoneInput.setValue(data.phone);

        if (this.getInvalidEmailValidationMessage.isVisible() || this.getRepeatEmailValidationMessage.isVisible()) {
            this.getEmailInput.setValue(this.randomEmail);
        }

        this.browser.back();
        this.getRegistrationButton.click();
        this.getSmsInput.setValue(this.code);
        this.browser.back();
    };
}
