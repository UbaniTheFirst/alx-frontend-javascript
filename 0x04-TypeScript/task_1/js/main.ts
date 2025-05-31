interface Teacher {
    readonly firstName: string;          // only modifiable on initialization
    readonly lastName: string;           // only modifiable on initialization
    fullTimeEmployee: boolean;           // must always be defined
    yearsOfExperience?: number;          // optional
    location: string;                    // must always be defined
    [key: string]: any;                  // allows any additional properties with any name and type
}

// Task 1 Example
const teacher3: Teacher = {
    firstName: 'Frank',
    lastName: 'Lampard',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};

console.log('Teacher:', teacher3);


// Task 2: Extending the Teacher interface
interface Directors extends Teacher {
    numberOfReports: number;
}

// Task 2 Example
const director1: Directors = {
    firstName: 'Mike',
    lastName: 'Moore',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log('Director:', director1);

// Task 3: Interface for the function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Task 3: Function that matches the interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

console.log('Print Teacher:', printTeacher("John", "Doe"));

// Task 4: Interface for the constructor
interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

// Task 4: Interface for the class methods
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Task 4: Class that implements the interface
class StudentClass implements StudentClassInterface {
    constructor(private firstName: string, private lastName: string) { }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Test the class
const student = new StudentClass("Jesse", "Ubani");

console.log("Work:", student.workOnHomework());
console.log("Display Name:", student.displayName());