import {expect, test} from "@playwright/test";
import {filterData, retrieveData} from "../../utils/filterResponse";
import {getLoginCredentials} from "../../utils/get-login-credentials";
import {filterPatientsData, retrievePatientsData} from "../../utils/filter-patients-list-response";

let token : unknown;

let patientName = "John Doe";
let patientAge = "35";
let patientGender = "Male";
let patientMedicalHistory = "Hypertension";
let patientAllergies = "Penicillin";
let patientCurrentMedications = "Metformin";
const authDetails = getLoginCredentials();
test.describe('Testing get patients list endpoint', () => {
    test.beforeEach(async ({}) => {


    });

    test('should invoke the get all patients endpoint', async ({request}) => {

        const loginResponse = await request.post('/api/auth/login', {
            data: authDetails
        });

        expect(loginResponse.status() === 200);

        const retrievedData = await retrieveData(loginResponse);
        const loginDetails = filterData(retrievedData);

        token = loginDetails[3];
        console.log(token);

        const getPatientsResponse = await request.get('/api/patients', {
            headers : {
                'Authorization': `Bearer ${token}`
            }
        });

        expect(getPatientsResponse.status() === 200);

        const retrievedPatientList = await retrievePatientsData(getPatientsResponse);
        const patientDetails = filterPatientsData(retrievedPatientList);
        expect(patientDetails[1]).toBe(patientName);
        expect(patientDetails[2]).toBe(patientAge);
        expect(patientDetails[3]).toBe(patientGender);
        expect(patientDetails[4]).toBe(patientMedicalHistory);
        expect(patientDetails[5]).toBe(patientAllergies);
        expect(patientDetails[6]).toBe(patientCurrentMedications);


    });

});