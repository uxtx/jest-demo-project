import { reverseString, isPalindrome, addTwo } from './my-stupid-utils';

describe('addTwo', () => {
  it('can add 2 to a number', () => {
    expect(addTwo(4)).toBe(6);
  });
  it('throws an error if you try to add to anything but a number', () => {
    expect(() => { addTwo('cheese'); }).toThrow('must be a number');
  });
});

describe('reverseString', () => {
  it('can add reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('foo bar')).toBe('rab oof');
    expect(reverseString(2)).toBeFalsy();
  });
});

describe('isPalindrome', () => {
  it('can check if a string is a palindrome', () => {
    expect(isPalindrome('kayak')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome(3)).toBeFalsy();
  });
});
