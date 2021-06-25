const puppeteer = require("puppeteer")
const expect = require('chai').expect

let browser
let page
var price

before(async () => {
  browser = await puppeteer.launch({ headless: false })
  page = await browser.newPage()
})

describe("Prueba Desafío 3", () => {
  it("debe de abrir el navegador", async () => {
    await page.goto('http://automationpractice.com/index.php')
    await page.waitForSelector("h1")
    price = await page.$eval('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.last-line.last-item-of-tablet-line.last-item-of-mobile-line > div > div.left-block > div > div.content_price > span', ele=>ele.textContent)
    console.log("Precio1 Id6:"+price)
    await page.waitFor(10000)
  })
  
  it(" dar clic en add to cart ", async () => {
    await page.click('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.last-line.last-item-of-tablet-line.last-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span')
    await page.waitForSelector('h2')
    const price2 = await page.$eval('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div:nth-child(2) > span', ele=>ele.textContent)
    console.log("Precio2 Id-6:"+price2)
    expect(price).to.be.a('string',price2)
    await page.waitFor(10000)
  })
})

after(async () => {
  await browser.close()
})