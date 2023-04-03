const shuffle = require('../src/shuffle')
// const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

// beforeEach(async () => {
//   driver = await new Builder().forBrowser(Browser.CHROME).build();
// });

// afterEach(async () => {
//   await driver.quit();
// });

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
