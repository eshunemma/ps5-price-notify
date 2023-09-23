const axios = require("axios");
require("dotenv").config();

async function sendWhatsAppMsg(msg) {
  const url = process.env.url;
  const username = "78ed6272:fsTkMEQ11Q5jPz60";
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const data = {
    from: process.env.from,
    to: process.env.to,
    message_type: "text",
    text: msg,
    channel: "whatsapp",
  };

  const auth = {
    username,
  };

  axios
    .post(url, data, { headers, auth })
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error.response.data.title);
    });
}

module.exports = { sendWhatsAppMsg };
