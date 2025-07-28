import {expect, test} from "@playwright/test";
import {filterData, retrieveData} from "../../utils/filterResponse";
import {getLoginCredentials} from "../../utils/get-login-credentials";
import {filterPatientData, filterPatientsData, retrievePatientsData} from "../../utils/filter-patients-list-response";
import {getPatientRecordBody, updatePatientRecordBody} from "../../utils/get-patient-records-body";

let token : unknown;
let patientId = 3;
const authDetails = getLoginCredentials();
const patientJsonBody = getPatientRecordBody();
test.describe('Delete patient/s record  endpoint', () => {
    test.beforeEach(async ({}) => {


    });

    test('should delete patient/s record from endpoint', async ({request}) => {

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

        const updatePatientResponse = await request.delete(`/api/patients/${patientId}`,
            {
            headers : {
                'Authorization': `Bearer ${token}`
            }
        });

        expect(updatePatientResponse.status() === 200);

    });

});