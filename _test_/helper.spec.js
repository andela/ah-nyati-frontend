import Helpers from '../src/helpers/helpers';

const {
  setCount,
  removeDuplicate,
  checkDuplicate,
  stringToBoolean,
} = Helpers;

const duplicatedArray = [
  {
    id: 1,
    name: 'Obi',
  },
  {
    id: 1,
    name: 'Ada',
  },
  {
    id: 2,
    name: 'Obi',
  },
];

const uniqueArrayById = [
  {
    id: 1,
    name: 'Obi',
  },
  {
    id: 2,
    name: 'Obi',
  },
];

const uniqueArrayByName = [
  {
    id: 1,
    name: 'Obi',
  },
  {
    id: 1,
    name: 'Ada',
  },
];

describe('Helpers', () => {
  describe('setCount', () => {
    it('returns a number when called', () => {
      const window = [2100, 1300, 1200, 1000, 700, 600, 500, 400];
      expect(setCount(window[0])).toEqual(10000);
      expect(setCount(window[1])).toEqual(150);
      expect(setCount(window[2])).toEqual(100);
      expect(setCount(window[3])).toEqual(50);
      expect(setCount(window[4])).toEqual(70);
      expect(setCount(window[5])).toEqual(70);
      expect(setCount(window[6])).toEqual(70);
      expect(setCount(window[7])).toEqual(50);
    });
  });

  describe('checkDuplicate', () => {
    it('checks for duplicated items and returns a boolean', () => {
      expect(checkDuplicate(duplicatedArray, 'id')).toEqual(true);
      expect(checkDuplicate(duplicatedArray, 'name')).toEqual(true);
    });
  });

  describe('removeDuplicate', () => {
    it('filters out duplicated items and returns an array of unique items', () => {
      expect(removeDuplicate(duplicatedArray, 'id')).toEqual(uniqueArrayById);
      expect(removeDuplicate(duplicatedArray, 'name')).toEqual(uniqueArrayByName);
    });
  });

  describe('stringToBoolean', () => {
    it('returns the boolean equivalent of a string', () => {
      expect(stringToBoolean('true')).toEqual(true);
      expect(stringToBoolean('false')).toEqual(false);
    });
    it('returns undefined for invalid arguments', () => {
      expect(stringToBoolean('kdood')).toEqual(undefined);
      expect(stringToBoolean('fejjfkk')).toEqual(undefined);
      expect(stringToBoolean(null)).toEqual(undefined);
    });
  });
});
