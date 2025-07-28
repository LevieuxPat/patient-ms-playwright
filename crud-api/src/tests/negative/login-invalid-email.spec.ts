import {expect, test} from "@playwright/test";
import {getInvalidLoginCredentials} from "../../utils/get-login-credentials";
import {getErrorMessage, retrieveErrorMessage} from "../../utils/filterResponse";


let message ="Invalid credentials";
const authDetails = getInvalidLoginCredentials();
test.describe('Negative test - login endpoint', () => {

    test('should invoke the post login enp editing patient details', async ({request}) => {

        const loginResponse = await request.post('/api/auth/login', {
            data: authDetails
        });

        expect(loginResponse.status()).toBe(401);

        const retrievedData = await retrieveErrorMessage(loginResponse);
        const errorMessage = getErrorMessage(retrievedData);
        expect(errorMessage).toContain(message);

    });

});