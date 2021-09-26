const router = require("express").Router();
let Product = require("../models/product");


router.route("/add").post((req, res) => {

    
    const registrationNo = Number(req.body.registrationNo);
    const productName = req.body.productName;
    const productDescription = req.body.productDescription;
    const companyName = req.body.companyName;
    const companyAdress = req.body.companyAdress;
    const qualityStatus = req.body.qualityStatus;
    const batchNo = number(req.body.batchNo);

    const newProduct = new Product({

        registrationNo,
        productName,
        productDescription,
        companyName,
        companyAdress,
        qualityStatus,
        batchNo

    })

    newProduct.save().then(() =>{
        res.json("Product added successfully!");
    }).catch((err) => {
        console.log(err);
    })


});


    router.route("/get/:registrationNo").get(async (req , res ) => {
        let productRegNo = req.params.registrationNo;

        const validProduct = await Product.findOne(productRegNo).then( () => {
            res.status(200).send({ status : " Regiterd product. ",
             "Product name " : validProduct.productName, 
             "Prduct Description " : validProduct.productDescription,
              " Batch no " : validProduct.batchNo,
              "Company name " : validProduct.companyName
            }).catch((err) => {
                console.log(500).send({Status: "Registration number not found, invalid product!", error: err.message});
            })
        })
        

        
    
    });

    







module.exports = router;

