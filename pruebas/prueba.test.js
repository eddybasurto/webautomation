const puppeteer = require("puppeteer")

let browser
let page

before(async () => {
  browser = await puppeteer.launch({ headless: false })
  page = await browser.newPage()
})

describe("Mi primer prueba abrir navegador", () => {
  it(" debe de abrir el navegador", async () => {
    await page.goto('http://automationpractice.com/index.php')
    await page.waitForSelector("h1")
  })

  it(" dar clic en women ", async () => {
    await page.click('a[href="http://automationpractice.com/index.php?id_category=3&controller=category"]')
    await page.waitForSelector('#center_column > div.content_scene_cat > div > div > span')
  })

  it(" selector css ", async () => {
    await page.goBack()
    await page.waitForSelector("h1")
    await page.click('#block_top_menu > ul > li:nth-child(1) > a')
    await page.waitForSelector('#center_column > div.content_scene_cat > div > div > span', { delay: 2000})
  })

  it(" selector xpath ", async () => {
    await page.goBack()
    await page.waitForSelector("h1")
    const clixpath = await page.waitForXPath('//*[@id="block_top_menu"]/ul/li[1]', { delay: 2000})
    clixpath.click()
      })
})

after(async () => {
  await browser.close()
})