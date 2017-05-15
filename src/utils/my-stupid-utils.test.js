import { reverseString, isPalindrome, addTwo } from './my-stupid-utils';

describe('addTwo', () => {
  it('can add 2 to a number', () => {
    // you can use matchers to assert values
    expect(addTwo(4)).toBe(6);
    expect(addTwo(57)).toBe(59);
    expect(addTwo(8)).toBe(10);
  });
  it('throws an error if you try to add to anything but a number', () => {
    // you can use matchers to assert something throws an error
    expect(() => { addTwo('cheese'); }).toThrow('must be a number');
  });
});

describe('reverseString', () => {
  it('can add reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString(8)).toBeUndefined();
    // you can use matchers to assert truthiness or falsiness
    expect(reverseString('hello')).toBeTruthy();
    expect(reverseString(2)).toBeFalsy();
  });
});

describe('isPalindrome', () => {
  it('can check if a string is a palindrome', () => {
    expect(isPalindrome('kayak')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome(3)).toBeFalsy();
  });
  it('doesnt worry about case or spaces', () => {
    expect(isPalindrome('Taco cat')).toBe(true);
  });
});
