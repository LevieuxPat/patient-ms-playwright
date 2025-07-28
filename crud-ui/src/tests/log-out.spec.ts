import test, { expect } from "../../utils/pages-factory";


test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigateToLoginPage();

})

test("Logging out", async ({ loginPage, dashBoardPage }) => {
    await loginPage.loginToDashboard();
    await dashBoardPage.logOut();

    await expect(loginPage.loginPageHeader).toBeVisible();
});

test.afterEach("Update test result ", async ({  }) => {

});
