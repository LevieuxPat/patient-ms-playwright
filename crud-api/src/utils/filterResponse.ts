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

export interface ErrorResponse {
    error: string,
    "details": [
        string
    ]

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

export async function retrieveErrorMessage(
    data: APIResponse,
): Promise<ErrorResponse> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    }).then((result: APIResponse): Promise<ErrorResponse> => result.json());
}

export function getErrorMessage(retrievedData: ErrorResponse): {} {
    const returnedData: string[] = [];

    const errorMessage = retrievedData.error;
    const errorDescription = retrievedData.details[0];


    returnedData.push(errorMessage);
    returnedData.push(errorDescription);


    return returnedData;
}

export function getError404Message(retrievedData: ErrorResponse): {} {
    const returnedData: string[] = [];

    let errorMessage = retrievedData.error;

    returnedData.push(errorMessage);

    return returnedData;
}
