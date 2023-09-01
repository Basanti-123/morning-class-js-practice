//const { createQR } = require("./qr.controller");
const qrController  = require("./qr.controller");

const router = require("express").Router();

router.post("/", async (req,res,next)=>{
    try{

        // logic 
        const {url} = req.body;
        if(!url) throw new Error("URL is required");
        const result = await qrController.createQR(url);
        res.json({data: result, msg: "success"});
    } catch (e) {
        next(e);
    }

});

module.exports = router;