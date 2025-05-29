// 1. Define the interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// 2. Create two students
const student1: Student = {
    firstName: "Frank",
    lastName: "Ajayi",
    age: 28,
    location: "Nigeria",
};

const student2: Student = {
    firstName: "Ama",
    lastName: "Boateng",
    age: 25,
    location: "Ghana",
};

// 3. Add them to an array
const studentsList: Student[] = [student1, student2];

// 4. Create and display a table in the DOM
const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "50%";
table.style.margin = "20px 0";

// Create table header
const tableHead = document.createElement("thead");
const headerRow = document.createElement("tr");

const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
firstNameHeader.style.border = "1px solid black";
firstNameHeader.style.padding = "8px";

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
locationHeader.style.border = "1px solid black";
locationHeader.style.padding = "8px";

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;
    nameCell.style.border = "1px solid black";
    nameCell.style.padding = "8px";

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid black";
    locationCell.style.padding = "8px";

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);