/// <reference path="./crud.d.ts" />

// 1. Import types and functions
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// 2. Create a new row object
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

// 3. Insert the row and save the new ID
const newRowID: RowID = CRUD.insertRow(row);

// 4. Create an updated version of the row
const updatedRow: RowElement = {
    ...row,
    age: 23,
};

// 5. Update and delete row
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);