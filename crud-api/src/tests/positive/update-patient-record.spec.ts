import {expect, test} from "@playwright/test";
import {filterData, retrieveData} from "../../utils/filterResponse";
import {getLoginCredentials} from "../../utils/get-login-credentials";
import {filterPatientData, filterPatientsData, retrievePatientsData} from "../../utils/filter-patients-list-response";
import {getPatientRecordBody, updatePatientRecordBody} from "../../utils/get-patient-records-body";

let token : unknown;
let patientId = 3;
let patientName = "Lois Lane";
let patientAge = "34";
let patientGender = "Female";
let patientMedicalHistory = "Flu";
let patientAllergies = "Peanut";
let patientCurrentMedications = "Amoxicillin";
const authDetails = getLoginCredentials();
const patientJsonBody = updatePatientRecordBody();
const updatePatientJsonBody = updatePatientRecordBody();
test.describe('Update patient/s record from endpoint', () => {
    test.beforeEach(async ({}) => {


    });

    test('should update patient/s record from endpoint', async ({request}) => {

        const loginResponse = await request.post('/api/auth/login', {
            data: authDetails
        });

        expect(loginResponse.status() === 200);

        const retrievedData = await retrieveData(loginResponse);
        const loginDetails = filterData(retrievedData);

        token = loginDetails[3];


        const addNewPatientResponse = await request.post('/api/patients',
            {data: patientJsonBody,
                headers : {
                    'Authorization': `Bearer ${token}`
                }
            });

        expect(addNewPatientResponse.status() === 200);

        const updatePatientResponse = await request.put(`/api/patients/${patientId}`,
            {data: updatePatientJsonBody,
            headers : {
                'Authorization': `Bearer ${token}`
            }
        });

        expect(updatePatientResponse.status() === 200);

        const retrievedPatientList = await retrievePatientsData(updatePatientResponse);
        const patientDetails = filterPatientData(retrievedPatientList);
        expect(patientDetails[0]).toBe(patientName);
        expect(patientDetails[1]).toBe(patientAge);
        expect(patientDetails[2]).toBe(patientGender);
        expect(patientDetails[3]).toBe(patientMedicalHistory);
        expect(patientDetails[4]).toBe(patientAllergies);
        expect(patientDetails[5]).toBe(patientCurrentMedications);


    });

});