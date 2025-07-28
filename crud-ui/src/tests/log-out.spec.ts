import test, { expect } from "../../utils/pages-factory";


test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigateToLoginPage();

})

test("should log out", async ({ loginPage, dashBoardPage }) => {
    await loginPage.loginToDashboard();
    await dashBoardPage.logOut();

    await expect(loginPage.loginPageHeader).toBeVisible();
});

