import test, { expect } from "../../utils/pages-factory";


test.describe('Edit Patient details tests', () => {
    test.beforeEach(async ({loginPage}) => {
        await loginPage.navigateToLoginPage();
        await loginPage.loginToDashboard();

    });

    test('should edit patient details', async ({dashBoardPage,patientForm}) => {

        await dashBoardPage.addPatient();
        await patientForm.fillPatientForm(
            'Lois Lane',
            28,
            'Female',
            'Asthma',
            'Peanuts',
            'Albuterol',
            {name: 'Bob Smith', relationship: 'Spouse', phone: '0651234567'}
        );
        await dashBoardPage.clickOnEditButton();
        await patientForm.editPatientDetails(32, {name: 'Pamela Alexi', relationship: 'Cousin', phone: '08251034467'})

        const details = await dashBoardPage.getPatientDetails();

        expect(details.age).toBe('32 years');
        expect(details.name).toBe('Lois Lane');
        expect(details.gender).toBe('Female');
        expect(details.medicalHistory).toContain('Asthma');
        expect(details.allergies).toContain('Peanuts');
        expect(details.currentMedications).toContain('Albuterol');

    });

});