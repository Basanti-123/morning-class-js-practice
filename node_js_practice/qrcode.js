//1. Generate QR Code for  the url on the terminal using package qrcode.

const http = require("http");
const QRCode = require("qrcode");

http
  .createServer(async (req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    const qrData = await QRCode.toDataURL("I am a pony!");
    console.log({ QRCode });
    res.write(`<img src=${qrData}/>`);
    res.end();
  })
  .listen(3333);

console.log("App is running ");
