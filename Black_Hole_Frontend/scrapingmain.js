const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
    const browser = await puppeteer.launch({ headless: true }); // "true" bedeutet, dass der Browser unsichtbar läuft
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded" });

    // XPath mit document.evaluate() ausführen
    const srcTxt = await page.evaluate(() => {
        const xpath = "/html/body/center[1]/p[4]/table/tbody[2]/tr[5]/td[6]";
        const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        const node = result.singleNodeValue;
        return node ? node.textContent.trim() : "Element nicht gefunden";
    });

    console.log("Gefundener Text:", srcTxt);

    await browser.close();
}

scrapeProduct("http://www.astro.gsu.edu/AGNmass/");
