import {LogInPage} from "src/pages/LogInPage";
import {RegistrationPage} from "src/pages/RegistrationPage";
import {RegistrationSample} from "src/fixtures/RegistrationData";
import {PromoPage} from "src/pages/PromoPage";
import {ApplicationPage} from "src/pages/ApplicationPage";

const logInPage = new LogInPage(browser),
    registrationPage = new RegistrationPage(browser),
    promoPage = new PromoPage(browser),
    applicationPage = new ApplicationPage(browser);

describe("RegistrationTest", function () {

    it("should registration account", function () {

        logInPage.registrationButton.click();
        registrationPage.fillRegistrationForm(RegistrationSample);
        registrationPage.comeInInput.click();

        promoPage.nextButton.click();
        promoPage.nextButton.click();
        promoPage.startButton.click();

        applicationPage.incomingBlock.incomingHeader.waitForVisible();
    });
});
