// 1. Import types from interface
import { RowID, RowElement } from './interface';

// 2. Declare module types
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;