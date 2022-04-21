import { TableIndex } from './table-index';

describe('TableIndex', () => {
  it('should create an instance', () => {
    expect(new TableIndex(0, 0)).toBeTruthy();
  });

  it('equals', () => {
    let ti1 = new TableIndex(0, 0);
    expect(ti1.equals(0, 0)).toBeTruthy();
  });

  it('equals2', () => {
    let ti1 = new TableIndex(0, 0);
    let ti2 = new TableIndex(0, 0);
    expect(TableIndex.equals(ti1, ti2)).toBeTruthy();
  });
});
