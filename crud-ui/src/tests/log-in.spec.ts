import test, { expect } from "../../utils/pages-factory";


test.describe('Login to Patient management dashboard test', () => {
    test.beforeEach(async ({loginPage}) => {
        await loginPage.navigateToLoginPage();
    })

    test("Should navigate to login the dashboard successfully", async ({loginPage}) => {
        await loginPage.loginToDashboard();

        await expect(loginPage.dashboardHeader).toBeVisible();
    });

    test("Should fail to navigate to the dashboard with invalid credentials", async ({loginPage}) => {
        await loginPage.invalidLoginToDashboard();

        await expect(loginPage.invalidLoginMessage).toBeVisible();
        await expect(loginPage.dashboardHeader).not.toBeVisible();
    });

});