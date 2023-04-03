const { Builder, Browser, By, until } = require("selenium-webdriver");

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');


let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("shows choices after clicking draw", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    expect (await driver.findElement(By.id("choices")).then(function(){return true;})).toBe(true)
  });

  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.findElement(By.xpath(`//*[@id="choices"]/div[1]/button`)).click();
    expect (await driver.findElement(By.id("player-duo")).then(function(){return true;})).toBe(true)
  });
});