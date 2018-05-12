import {EmployeeSample} from "src/fixtures/Employee";
import {LogInPage} from "src/pages/LogInPage";
import {PromoPage} from "src/pages/PromoPage";
import {ApplicationPage} from "src/pages/ApplicationPage";

const logInPage = new LogInPage(browser),
    promoPage = new PromoPage(browser),
    applicationPage = new ApplicationPage(browser);

describe("LogInTest", function () {

    it("should logIn in application", function () {

        logInPage.fillLogInForm(EmployeeSample);
        logInPage.logInButton.click();

        promoPage.nextButton.click();
        promoPage.nextButton.click();
        promoPage.startButton.click();

        applicationPage.incomingBlock.incomingHeader.waitForVisible();
    });
});
