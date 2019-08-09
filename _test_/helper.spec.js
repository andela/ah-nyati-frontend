import Helpers from '../src/helpers/helpers';

const { setCount } = Helpers;

describe('Helpers', () => {
  it('returns a number when called', () => {
    const window = [2100, 1300, 1200, 1000, 700, 600, 500, 400];
    expect(setCount(window[0])).toEqual(10000);
    expect(setCount(window[1])).toEqual(150);
    expect(setCount(window[2])).toEqual(120);
    expect(setCount(window[3])).toEqual(100);
    expect(setCount(window[4])).toEqual(70);
    expect(setCount(window[5])).toEqual(120);
    expect(setCount(window[6])).toEqual(70);
    expect(setCount(window[7])).toEqual(50);
  });
});
