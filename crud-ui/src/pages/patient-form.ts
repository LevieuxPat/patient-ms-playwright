import type {Locator, Page} from "@playwright/test";
import {step} from "../../utils/test-step";

export class PatientForm {

    readonly nameInput: Locator;
    readonly ageInput: Locator;
    readonly genderSelect: Locator;
    readonly medicalHistoryInput: Locator;
    readonly medicalHistoryInputAddButton : Locator;
    readonly allergiesInput: Locator;
    readonly allergiesInputAddButton : Locator;
    readonly medicationsInput: Locator;
    readonly medicationsInputAddButton: Locator;
    readonly emergencyContactNameInput: Locator;
    readonly emergencyContactRelationshipInput: Locator;
    readonly emergencyContactPhoneInput: Locator;
    readonly addPatientSubmitButton: Locator;
    readonly cancelButton: Locator;
    readonly nameRequired: Locator;
    readonly updatePatientButton: Locator


    constructor(readonly page: Page) {
        this.nameInput = page.locator('input[name="name"]')
        this.ageInput = page.locator('input[name="age"]');
        this.genderSelect = page.locator('select[name="gender"]');
        this.medicalHistoryInput = page.locator('input[placeholder="Add medical condition"]');
        this.medicalHistoryInputAddButton = page.locator('xpath=//input[@placeholder="Add medical condition"]/..//button');
        this.allergiesInput = page.locator('input[placeholder="Add allergy"]');
        this.allergiesInputAddButton = page.locator('xpath=//input[@placeholder="Add allergy"]/..//button');
        this.medicationsInput = page.locator('input[placeholder="Add medication"]');
        this.medicationsInputAddButton = page.locator('xpath=//input[@placeholder="Add medication"]/..//button');
        this.emergencyContactNameInput = page.locator('input[name="emergencyContact.name"]');
        this.emergencyContactRelationshipInput = page.locator('input[name="emergencyContact.relationship"]');
        this.emergencyContactPhoneInput = page.locator('input[name="emergencyContact.phone"]');
        this.addPatientSubmitButton = page.locator('button[type="submit"]');
        this.cancelButton = page.locator('button[type="button"]:has-text("Cancel")');
        this.nameRequired = page.getByText("Name is required");
        this.updatePatientButton = page.getByText("Update Patient");

    }


    @step
    async fillPatientForm(name: string, age: number, gender: string, medicalHistory: string, allergies: string, medications: string, emergencyContact: {
        name: string;
        relationship: string;
        phone: string
    }) {
        await this.nameInput.fill(name);
        await this.ageInput.fill(age.toString());
        await this.genderSelect.selectOption(gender);
        await this.medicalHistoryInput.fill(medicalHistory);
        await this.page.waitForTimeout(2000);
        await this.medicalHistoryInputAddButton.click();
        await this.allergiesInput.fill(allergies);
        await this.page.waitForTimeout(2000);
        await this.allergiesInputAddButton.click();
        await this.medicationsInput.fill(medications);
        await this.page.waitForTimeout(2000);
        await this.medicationsInputAddButton.click();
        await this.emergencyContactNameInput.fill(emergencyContact.name);
        await this.emergencyContactRelationshipInput.fill(emergencyContact.relationship);
        await this.emergencyContactPhoneInput.fill(emergencyContact.phone);
        await this.addPatientSubmitButton.click();
        await this.page.waitForTimeout(2000);
    }


    async cancelPatientForm() {
        await this.cancelButton.click();
        await this.page.waitForTimeout(2000);
    }

    @step
    async editPatientDetails(age: number, emergencyContact: {
        name: string;
        relationship: string;
        phone: string
    }) {
        await this.ageInput.clear();
        await this.ageInput.fill(age.toString());
        await this.emergencyContactNameInput.fill(emergencyContact.name);
        await this.emergencyContactRelationshipInput.fill(emergencyContact.relationship);
        await this.emergencyContactPhoneInput.fill(emergencyContact.phone);
        await this.updatePatientButton.click();
        await this.page.waitForTimeout(2000);
    }




}
