import { TableIndexArray } from './table-index-array';
import { TableIndex } from './table-index';

describe('TableIndexArray', () => {
  it('should create an instance', () => {
    expect(new TableIndexArray()).toBeTruthy();
  });

  it('I can push ', () => {
    let array = new TableIndexArray();
    let item = new TableIndex(0, 0);
    
    expect(array.push(item)).toBeTruthy();
  });

  it('I can pop', () => {
    let array = new TableIndexArray();

    array.push(new TableIndex(0, 0));
    array.push(new TableIndex(1, 1));
    array.push(new TableIndex(2, 2));
    
    expect(array.pop()?.equals(2, 2)).toBeTruthy();
    expect(array.pop()?.equals(1, 1)).toBeTruthy();
  });

  it('I can some', () => {
    let array = new TableIndexArray();

    array.push(new TableIndex(0, 0));
    array.push(new TableIndex(1, 1));
    array.push(new TableIndex(2, 2));
    
    expect(array.some(x => x.equals(1, 1))).toBeTruthy();
    expect(array.some(x => x.equals(5, 5))).toBeFalse();
  });

  it('I can pushXY', () => {
    let array = new TableIndexArray();

    array.pushXY(0, 0);
    array.pushXY(1, 1);
    array.pushXY(2, 2);
    
    expect(array.length === 3).toBeTruthy();
    expect(array.some(x => x.equals(1, 1))).toBeTruthy();
  });

  it('I can check includesXY', () => {
    let array = new TableIndexArray();

    array.pushXY(0, 0);
    array.pushXY(1, 1);
    array.pushXY(2, 2);
    
    expect(array.includesXY(1, 1)).toBeTruthy();
    expect(array.includesXY(5, 5)).toBeFalse();
  });
});
