export class TableIndex {
    constructor(public x: number, public y: number) { }

    public set(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public equals(x: number, y: number) {
        return this.x === x && this.y === y;
    }

    static equals(t1: TableIndex, t2: TableIndex) {
        return t1.equals(t2.x, t2.y)
    }
}
