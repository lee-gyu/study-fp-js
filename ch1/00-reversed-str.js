const reverseArray = (arr) => [ ...arr ].reverse();
const joinArray = (arr, joiner) => arr.join(joiner);
const getReversedStr = (str) => joinArray(reverseArray(str), '')

console.log(getReversedStr("Hello World"));