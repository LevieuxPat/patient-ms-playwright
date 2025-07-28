import {expect, test} from "@playwright/test";
import {filterData, retrieveData} from "../../utils/filterResponse";
import {getLoginCredentials} from "../../utils/get-login-credentials";
import {filterPatientData, filterPatientsData, retrievePatientsData} from "../../utils/filter-patients-list-response";
import {getPatientRecordBody} from "../../utils/get-patient-records-body";

let token : unknown;

let patientName = "Lois Lane";
let patientAge = "32";
let patientGender = "Female";
let patientMedicalHistory = "None";
let patientAllergies = "Peanut";
let patientCurrentMedications = "Panado";
const authDetails = getLoginCredentials();
const patientJsonBody = getPatientRecordBody();
test.describe('Add patients record from endpoint', () => {
    test.beforeEach(async ({}) => {


    });

    test('should add patient/s record from endpoint', async ({request}) => {

        const loginResponse = await request.post('/api/auth/login', {
            data: authDetails
        });

        expect(loginResponse.status()).toBe(200);

        const retrievedData = await retrieveData(loginResponse);
        const loginDetails = filterData(retrievedData);

        token = loginDetails[3];


        const addNewPatientResponse = await request.post('/api/patients',
            {data: patientJsonBody,
            headers : {
                'Authorization': `Bearer ${token}`
            }
        });

        //201 created record
        expect(addNewPatientResponse.status()).toBe(201);

        const retrievedPatientList = await retrievePatientsData(addNewPatientResponse);
        const patientDetails = filterPatientData(retrievedPatientList);
        expect(patientDetails[0]).toBe(patientName);
        expect(patientDetails[1]).toBe(patientAge);
        expect(patientDetails[2]).toBe(patientGender);
        expect(patientDetails[3]).toBe(patientMedicalHistory);
        expect(patientDetails[4]).toBe(patientAllergies);
        expect(patientDetails[5]).toBe(patientCurrentMedications);


    });

});