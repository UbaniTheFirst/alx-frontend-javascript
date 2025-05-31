// 1. Create type alias
export type RowID = number;

// 2. Create RowElement interface
export interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;
}