const puppeteer = require('puppeteer')
const path = require('path')

async function takeshot() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(path.join(__dirname, "index.html"))
    await page.screenshot({
        path: "./shot.png",
        fullPage: true
    })
     await page.close()
    await browser.close()
}

takeshot()