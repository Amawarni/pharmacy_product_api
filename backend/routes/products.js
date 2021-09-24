const router = require("express").Router();
let Product = require("../models/product");


router.route("/add").post((req, res) => {

    const id = req.body.id;
    const registrationNo = Number(req.body.registrationNo);
    const productName = req.body.productName;
    const productDescription = req.body.productDescription;
    const companyName = req.body.companyName;
    const companyAdress = req.body.companyAdress;
    const qualityStatus = req.body.qualityStatus;

    const newProduct = new Product({

        id,
        registrationNo,
        productName,
        productDescription,
        companyName,
        companyAdress,
        qualityStatus

    })

    newProduct.save().then(() =>{
        res.json("Product added successfully!");
    }).catch((err) => {
        console.log(err);
    })


});

module.exports = router;