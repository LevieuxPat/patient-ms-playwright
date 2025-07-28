export function getPatientRecordBody() {
    return {
        "name": "Lois Lane",
        "age": 32,
        "gender": "Female",
        "medicalHistory": [
            "None"
        ],
        "allergies": [
            "Peanut"
        ],
        "medications": [
            "Panado"
        ],
        "emergencyContact": {
            "name": "Nico Van",
            "relationship": "Friend",
            "phone": "0651234568"
        }
    }
}

export function updatePatientRecordBody() {
    return {
        "name": "Lois Lane",
        "age": 34,
        "gender": "Female",
        "medicalHistory": [
            "Flu"
        ],
        "allergies": [
            "Peanut"
        ],
        "medications": [
            "Amoxicillin"
        ],
        "emergencyContact": {
            "name": "Freddy Moore",
            "relationship": "Cousin",
            "phone": "0651234568"
        }
    }
}

export function getInvalidPatientRecordBody() {
    return {
        "name": "!@#$%^&*",
        "age": -32,
        "gender": "Female",
        "medicalHistory": [
            "None"
        ],
        "allergies": [
            "Peanut"
        ],
        "medications": [
            "Panado"
        ],
        "emergencyContact": {
            "name": "@#$%^&*(",
            "relationship": "",
            "phone": ""
        }
    }
}

export function updatePatientRecordBodyWithInvalidData() {
    return {
        "name": "1212124",
        "age": -34,
        "gender": "Female",
        "medicalHistory": [
            "Flu"
        ],
        "allergies": [
            "Peanut"
        ],
        "medications": [
            "Amoxicillin"
        ],
        "emergencyContact": {
            "name": "123123123",
            "relationship": "Cousin",
            "phone": "0651234568"
        }
    }
}