const shuffle = require('../src/shuffle')

let testArr = [1,2,3,4,5];

describe('shuffle should...', () => {
  // CODE HERE
  test("be an array", async () => {
    expect(Array.isArray(shuffle([]))).toBe(true);
});

  test("return array of same length", async () => {
    expect(shuffle(testArr).length).toBe(testArr.length);
 });
})
