import test, { expect } from "../../utils/pages-factory";


test.describe('Delete Patient details tests', () => {
    test.beforeEach(async ({loginPage}) => {
        await loginPage.navigateToLoginPage();
        await loginPage.loginToDashboard();

    });

    test('should delete patient detail', async ({dashBoardPage,patientForm}) => {

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
        await dashBoardPage.clickOnDeleteButton();

        await expect(dashBoardPage.dashboardHeader).toBeVisible();
        const totalPatients = await dashBoardPage.getTotalPatients();

        expect(totalPatients).toBe("2");



    });

});