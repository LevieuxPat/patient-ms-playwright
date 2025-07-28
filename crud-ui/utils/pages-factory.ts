import { test as playwrightTest } from "@playwright/test";
import { LoginPage } from "../src/pages/login-page";
import {DashBoardPage} from "../src/pages/dashboard-page";
import {PatientForm} from "../src/pages/patient-form";

const test = playwrightTest.extend<{
    // pages
    loginPage: LoginPage;
    dashBoardPage : DashBoardPage;
    patientForm: PatientForm;


}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    dashBoardPage: async ({ page }, use) => {
        await use(new DashBoardPage(page));
    },
    patientForm: async ({ page }, use) => {
        await use(new PatientForm(page));
    }
});

playwrightTest.beforeAll(() => {});

export default test;
export const expect = test.expect;
export const setup = test;
