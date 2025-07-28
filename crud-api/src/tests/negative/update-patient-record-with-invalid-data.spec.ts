import {expect, test} from "@playwright/test";
import {filterData, getErrorMessage, retrieveData, retrieveErrorMessage} from "../../utils/filterResponse";
import {getLoginCredentials} from "../../utils/get-login-credentials";
import {getPatientRecordBody, updatePatientRecordBodyWithInvalidData} from "../../utils/get-patient-records-body";

let token : unknown;
let patientId = 3;
const authDetails = getLoginCredentials();
const patientJsonBody = getPatientRecordBody();
const updatePatientJsonBody = updatePatientRecordBodyWithInvalidData();
test.describe('Update patient/s record from endpoint', () => {

    test('should update patient/s record from endpoint', async ({request}) => {

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

        expect(addNewPatientResponse.status()).toBe(201);

        const updatePatientResponse = await request.put(`/api/patients/${patientId}`,
            {data: updatePatientJsonBody,
            headers : {
                'Authorization': `Bearer ${token}`
            }
        });

        expect(updatePatientResponse.status()).toBe(400);

        const retrievedPatientList = await retrieveErrorMessage(updatePatientResponse);
        const patientDetails = getErrorMessage(retrievedPatientList);
        console.log(patientDetails);


    });

});