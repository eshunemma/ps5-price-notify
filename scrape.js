const axios = require("axios");
const cheerio = require("cheerio");
const { sendWhatsAppMsg } = require("./sendWhatsapp");

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
});

const url1 =
  "https://www.amazon.com/PlayStation-5-Console-CFI-1215A01X/dp/B0BCNTW8GH/ref=sr_1_1?keywords=ps5&qid=1695414457&sr=8-1&th=1";

const url2 =
  "https://www.amazon.com/PlayStation-5-Console-CFI-1215A01X/dp/B0BCNKKZ91/ref=sr_1_1?keywords=ps5&qid=1695414457&sr=8-1&th=1";

async function scrape(url) {
  try {
    const product = { name: "", price: "", link: "" };
    // Fetcg Data
    const { data } = await axios.get(url).catch((error) => {
      console.error("Error");
    });
    //   Load up the html
    const $ = cheerio.load(data);
    const item = $("div#ppd");

    // //   Extract data
    product.name = $(item).find("h1 span#productTitle").text().trim();
    product.price = $(item).find("span .a-offscreen").first().text();
    product.link = url;

    return product;
  } catch (error) {
    console.log(error.message);
  }
}

async function compile() {
  try {
    const d1 = await scrape(url1);
    const d2 = await scrape(url2);
    const msg = `The Current price of ${d1.name}🎮 is ${d1.price}🔥 and ${d2.name}🎮 is ${d2.price}🔥 as at ${formattedDate}. Follow the link below to buy on Amazon ${d2.link}`;
    // // Send WhatsAppMessage
    sendWhatsAppMsg(msg);
  } catch (error) {
    sendWhatsAppMsg("Something went wrong sending message");
  }
}

module.exports = { compile };
