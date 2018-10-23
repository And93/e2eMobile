import {LogInPage} from "src/pages/LogInPage";
import {RegistrationPage} from "src/pages/RegistrationPage";
import {RegistrationSample} from "src/fixtures/RegistrationData";
import {PromoPage} from "src/pages/PromoPage";
import {ApplicationPage} from "src/pages/ApplicationPage";

const logInPage = new LogInPage(browser),
    registrationPage = new RegistrationPage(browser),
    promoPage = new PromoPage(browser),
    applicationPage = new ApplicationPage(browser);

describe("RegistrationTest", () => {

    it("should registration account", () => {

        logInPage.getRegistrationButton.click();
        registrationPage.fillRegistrationForm(RegistrationSample);
        registrationPage.getComeInInput.click();

        promoPage.getNextButton.click();
        promoPage.getNextButton.click();
        promoPage.getStartButton.click();

        applicationPage.incomingBlock.getIncomingHeader.waitForVisible();
    });
});
