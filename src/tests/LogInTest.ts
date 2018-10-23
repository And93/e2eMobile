import {EmployeeSample} from "src/fixtures/Employee";
import {LogInPage} from "src/pages/LogInPage";
import {PromoPage} from "src/pages/PromoPage";
import {ApplicationPage} from "src/pages/ApplicationPage";

const logInPage = new LogInPage(browser),
    promoPage = new PromoPage(browser),
    applicationPage = new ApplicationPage(browser);

describe("LogInTest", () => {

    it("should logIn in application", () => {

        logInPage.fillLogInForm(EmployeeSample);
        logInPage.getLogInButton.click();

        promoPage.getNextButton.click();
        promoPage.getNextButton.click();
        promoPage.getStartButton.click();

        applicationPage.incomingBlock.getIncomingHeader.waitForVisible();
    });
});
