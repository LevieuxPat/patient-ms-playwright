import {expect, test} from "@playwright/test";
import {filterData, retrieveData} from "../../utils/filterResponse";
import {getLoginCredentials} from "../../utils/get-login-credentials";


let username ="demo@example.com";
const authDetails = getLoginCredentials();
test.describe('Testing login endpoint', () => {
    test.beforeEach(async ({}) => {


    });

    test('should invoke the post login enp editing patient details', async ({request}) => {

        const loginResponse = await request.post('/api/auth/login', {
            data: authDetails
        });

        expect(loginResponse.status() === 200);

        const retrievedData = await retrieveData(loginResponse);
        const loginDetails = filterData(retrievedData);
        expect(loginDetails).toContain(username);

    });

});