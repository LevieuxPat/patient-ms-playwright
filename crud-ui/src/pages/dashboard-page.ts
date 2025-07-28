import type {Locator, Page} from "@playwright/test";
import {step} from "../../utils/test-step";

export class DashBoardPage {
    readonly addPatientButton: Locator;
    readonly logoutButton: Locator;
    readonly dashboardHeader: Locator;
    readonly patientName: Locator;
    editButton: Locator;
    deleteButton: Locator;
    readonly age: Locator;
    readonly gender: Locator;
    readonly medicalHistory: Locator;
    readonly allergies: Locator;
    readonly currentMedications: Locator;
    readonly totalPatients:Locator;






    constructor(readonly page: Page) {
        this.addPatientButton = page.locator('button:has-text("Add Patient")');
        this.logoutButton = page.getByText("Logout");
        this.dashboardHeader = page.getByText("Patient Management Dashboard");
        this.patientName = page.locator('xpath=(//div[contains(@class,"bg-white")])[last()]//div//h3');
        this.editButton = page.locator('xpath=//h3[contains(.,"Lois Lane")]/../..//div[2]//button[@title="Edit patient"]');
        this.deleteButton = page.locator('xpath=//h3[contains(.,"Lois Lane")]/../..//div[2]//button[@title="Delete patient"]');
        this.age = page.locator('xpath=(//div[contains(@class,"bg-white")])[last()]//div[2]/div[1]/p[2]');
        this.gender = page.locator('xpath=(//div[contains(@class,"bg-white")])[last()]//div[2]/div[2]/p[2]');
        this.medicalHistory= page.locator('xpath=(//div[contains(@class,"bg-white")])[last()]//div//div//span[1]').nth(0);
        this.allergies = page.locator('xpath=(//div[contains(@class,"bg-white")])[last()]//div[4]/div/span');
        this.currentMedications = page.locator('xpath=(//div[contains(@class,"bg-white")])[last()]//div[5]/div/span');
        this.totalPatients =  page.locator('xpath=//dt[contains(.,"Total Patients")]/..//dd');
    }

    @step
    async logOut() {
        await this.logoutButton.click();

    }

    @step
    async addPatient() {
        await this.addPatientButton.click();
    }

    @step
    async editPatientDetails() {
        await this.editButton.click();
    }

    @step
    async deletePatient() {
        await this.deleteButton.click();
    }


    async clickOnEditButton() {
        await this.editButton.click();
        await this.page.waitForTimeout(2000);
    }

    async clickOnDeleteButton() {
        this.page.on('dialog', dialog => dialog.accept());
        await this.deleteButton.click();
        await this.page.waitForTimeout(3000);
    }


    async getPatientDetails() {
        return {
            name: await this.patientName.innerText(),
            age: await this.age.innerText(),
            gender: await this.gender.innerText(),
            medicalHistory: await this.medicalHistory.innerText(),
            allergies: await this.allergies.innerText(),
            currentMedications: await this.currentMedications.innerText(),

        };
    }

    async getTotalPatients() {
        return await this.totalPatients.innerText();
    }


}



