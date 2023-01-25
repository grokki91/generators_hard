import canIterate from '../index';

describe(('Check function canIterate'), () => {
  test('Check for Map', () => {
    expect(canIterate(new Map())).toBeTruthy();
  });
  test('Check for Set', () => {
    expect(canIterate(new Set())).toBeTruthy();
  });
  test('Check for Null', () => {
    expect(canIterate(null)).toBeFalsy();
  });
  test('Check for Number', () => {
    expect(canIterate(10)).toBeFalsy();
  });
  test('Check for String', () => {
    expect(canIterate('Netology')).toBeTruthy();
  });
});
