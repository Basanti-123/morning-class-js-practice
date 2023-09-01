
constqrCode = require("qrcode")

const createQR = async(url)=>{
const qrUrl = await qrCode.toDataURL(url);
return qrUrl;
};

module.exports = {createQR};