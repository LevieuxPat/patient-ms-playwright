import type { Locator, Page } from "@playwright/test";
import { step } from "../../utils/test-step";

export class LoginPage {
    readonly emailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly signInButton: Locator;
    readonly dashboardHeader : Locator;
    readonly loginPageHeader : Locator;
    readonly invalidLoginMessage : Locator;


    constructor(readonly page: Page) {
        this.emailInputField = page.getByPlaceholder("Enter your email");
        this.passwordInputField = page.getByPlaceholder("Enter your password");
        this.signInButton = page.getByText("Sign in").nth(1);
        this.dashboardHeader = page.getByText("Patient Management Dashboard");
        this.loginPageHeader = page.getByText("Welcome Back");
        this.invalidLoginMessage = page.getByText("Invalid credentials");
    }

    @step
    async navigateToLoginPage() {
        const webAppUrl = "https://crud-fe-sigma.vercel.app/";

        await this.page.goto(webAppUrl);
    }

    @step
    async loginToDashboard() {
        const username ="demo@example.com";
        const password = "password123";

        await this.emailInputField.fill(username!);
        await this.passwordInputField.fill(password!);
        await this.signInButton.click();

    }
    async invalidLoginToDashboard() {
        const username ="demo@exasscscs.com";
        const password = "passw23asasc242";

        await this.emailInputField.fill(username!);
        await this.passwordInputField.fill(password!);
        await this.signInButton.click();

    }


}
