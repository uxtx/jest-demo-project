export const addTwo = (num) => {
  if (typeof num !== 'number') {
    throw new Error ('must be a number');
  }
  return num + 2;
};

export const reverseString = (str) => {
  if (typeof str !== 'string') {
    return;
  }
  return str.split("").reverse().join("");
}
export const isPalindrome = (str) => {
  if (typeof str !== 'string') {
    return;
  }
  const normalizedStr = str.toLowerCase().replace(/ /g, '');
  return reverseString(normalizedStr) === normalizedStr
};
