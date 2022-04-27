import { TableIndex } from './table-index';

describe('TableIndex', () => {
  it('should create an instance', () => {
    expect(new TableIndex(0, 0)).toBeTruthy();
  });

  it('equals true 0,0', () => {
    let ti1 = new TableIndex(0, 0);
    expect(ti1.equals(0, 0)).toBeTrue();
  });

  it('equals true 2,3', () => {
    expect(new TableIndex(2, 3).equals(2, 3)).toBeTrue();
  });


  it('equals false 2,3', () => {
    expect(new TableIndex(2, 3).equals(3, 2)).toBeFalse();
  });

/*
  it('equals 2 objects', () => {
    let ti1 = new TableIndex(0, 0);
    let ti2 = new TableIndex(0, 0);
    expect(TableIndex.equals(ti1, ti2)).toBeTruthy();
  });
  
  */
});
