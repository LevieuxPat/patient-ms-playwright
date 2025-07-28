import {expect, test} from "@playwright/test";
import {filterData, retrieveData} from "../../utils/filterResponse";
import {getLoginCredentials} from "../../utils/get-login-credentials";
import {filterPatientData, filterPatientsData, retrievePatientsData} from "../../utils/filter-patients-list-response";

let token:unknown;
let patientId = 1;
let patientName = "John Doe";
let patientAge = "35";
let patientGender = "Male";
let patientMedicalHistory = "Hypertension";
let patientAllergies = "Penicillin";
let patientCurrentMedications = "Metformin";
const authDetails = getLoginCredentials();
test.describe('Testing get a single patient record endpoint', () => {
    test.beforeEach(async ({}) => {


    });

    test('should invoke the login endpoint and get a single patient record by id', async ({request}) => {

        const loginResponse = await request.post('/api/auth/login', {
            data: authDetails
        });

        expect(loginResponse.status() === 200);

        const retrievedData = await retrieveData(loginResponse);
        const loginDetails = filterData(retrievedData);

        token = loginDetails[3];


        const getPatientsResponse = await request.get(`/api/patients/${patientId}`, {
            headers : {
                'Authorization': `Bearer ${token}`
            }
        });

        expect(getPatientsResponse.status() === 200);

        const retrievedPatientList = await retrievePatientsData(getPatientsResponse);
        const patientDetails = filterPatientData(retrievedPatientList);
        expect(patientDetails[0]).toBe(patientName);
        expect(patientDetails[1]).toBe(patientAge);
        expect(patientDetails[2]).toBe(patientGender);
        expect(patientDetails[3]).toBe(patientMedicalHistory);
        expect(patientDetails[4]).toBe(patientAllergies);
        expect(patientDetails[5]).toBe(patientCurrentMedications);


    });

});