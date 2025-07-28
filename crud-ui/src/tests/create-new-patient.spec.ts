import test, { expect } from "../../utils/pages-factory";


test.describe('Patient Form Tests', () => {

    test.beforeEach(async ({loginPage, dashBoardPage}) => {
        await loginPage.navigateToLoginPage();
        await loginPage.loginToDashboard();
        await dashBoardPage.addPatient();


    });

    test('should fill and submit the patient form successfully', async ({patientForm,dashBoardPage}) => {
        await patientForm.fillPatientForm(
            'Patty Marcus',
            30,
            'Male',
            'None',
            'Peanuts',
            'Ibuprofen',
            {name: 'Bianca Williams', relationship: 'Spouse', phone: '0651234567'}
        );

        const details = await dashBoardPage.getPatientDetails();
        expect(details.name).toBe('Patty Marcus');
        expect(details.age).toBe('30 years');
        expect(details.gender).toBe('Male');
        expect(details.medicalHistory).toContain('None');
        expect(details.allergies).toContain('Peanuts');
        expect(details.currentMedications).toContain('Ibuprofen');
    });

    test('should not submit the form with missing required fields', async ({patientForm}) => {
        await patientForm.fillPatientForm(
            '', // missing full name
            30,
            'Male',
            'None',
            'Peanuts',
            'Ibuprofen',
            {name: 'Bianca Williams', relationship: 'Spouse', phone: '0651234567'}
        );

        await expect(patientForm.nameRequired).toBeVisible();
    });

    test('should fill the form and cancel submission', async ({patientForm,dashBoardPage}) => {
        await patientForm.fillPatientForm(
            'Lois Lane',
            30,
            'Female',
            'None',
            'Peanuts',
            'Ibuprofen',
            {name: 'Nico Van', relationship: 'Spouse', phone: '0651234568'}
        );

        await patientForm.cancelPatientForm();
        await expect(dashBoardPage.dashboardHeader).toBeVisible();
    });

});