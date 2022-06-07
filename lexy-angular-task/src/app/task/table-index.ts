export class TableIndex {
    equals(x: number, y: number): boolean {
        return x === 0 && y === 0;
    }
    constructor(public x: number, public y: number) { }
}
