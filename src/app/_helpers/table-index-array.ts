import { TableIndex } from './table-index';

export class TableIndexArray extends Array<TableIndex> {
    public pushXY(x: number, y: number) {
        this.push(new TableIndex(x, y));
    }
    
    public includesXY(x: number, y: number): boolean {
        return this.some(v => v.equals(x, y))
    }
}
