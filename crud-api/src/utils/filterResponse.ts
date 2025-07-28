import {APIResponse} from "@playwright/test";

export interface TokenResponse {
    token: string;
    user: {
        id: number,
        email: string,
        name: string,
        role: string,
        createdAt: string
    };

}

export async function retrieveData(
    data: APIResponse,
): Promise<TokenResponse> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    }).then((result: APIResponse): Promise<TokenResponse> => result.json());
}

export function filterData(retrievedData: TokenResponse): string[] {
    const returnedData: string[] = [];

    const username = retrievedData.user.name;
    const userEmail = retrievedData.user.email;
    const role = retrievedData.user.role;
    const token = retrievedData.token;

    returnedData.push(username);
    returnedData.push(userEmail);
    returnedData.push(role);
    returnedData.push(token);


    return returnedData;
}