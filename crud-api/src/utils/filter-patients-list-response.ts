import {APIResponse} from "@playwright/test";

export interface PatientResponse {

    id: number,
    name: string,
    age: number,
    gender: string,
    medicalHistory: [
        string,
        string
    ],
    allergies: [
        string
    ],
    medications: [
        string,
        string
    ],
    emergencyContact: {
        name: string,
        relationship: string
        phone: string
    },
    createdAt: string


}

export async function retrievePatientsData(
    data: APIResponse,
): Promise<PatientResponse> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    }).then((result: APIResponse): Promise<PatientResponse> => result.json());
}

export function filterPatientsData(retrievedData: PatientResponse): string[] {
    const returnedData: string[] = [];


    const patientsId = retrievedData[0].id;
    const patientsName = retrievedData[0].name;
    const patientsAge = retrievedData[0].age;
    const patientsGender = retrievedData[0].gender;
    const patientsMedicalHistory = retrievedData[0].medicalHistory;
    const patientsAllergies = retrievedData[0].allergies;
    const patientsMedications = retrievedData[0].medications;
    const patientsEmergencyContact = retrievedData[0].emergencyContact;


    returnedData.push(String(patientsId));
    returnedData.push(patientsName);
    returnedData.push(String(patientsAge));
    returnedData.push(patientsGender);
    returnedData.push(patientsMedicalHistory[0]);
    returnedData.push(patientsAllergies[0]);
    returnedData.push(patientsMedications[0]);
    returnedData.push(patientsEmergencyContact.name);
    returnedData.push(patientsEmergencyContact.relationship);
    returnedData.push(patientsEmergencyContact.phone);



    return returnedData;
}

export function filterPatientData(retrievedData: PatientResponse): string[] {
    const returnedData: string[] = [];



    const patientsName = retrievedData.name;
    const patientsAge = retrievedData.age;
    const patientsGender = retrievedData.gender;
    const patientsMedicalHistory = retrievedData.medicalHistory;
    const patientsAllergies = retrievedData.allergies;
    const patientsMedications = retrievedData.medications;
    const patientsEmergencyContact = retrievedData.emergencyContact;


    returnedData.push(patientsName);
    returnedData.push(String(patientsAge));
    returnedData.push(patientsGender);
    returnedData.push(patientsMedicalHistory[0]);
    returnedData.push(patientsAllergies[0]);
    returnedData.push(patientsMedications[0]);
    returnedData.push(patientsEmergencyContact.name);
    returnedData.push(patientsEmergencyContact.relationship);
    returnedData.push(patientsEmergencyContact.phone);



    return returnedData;
}