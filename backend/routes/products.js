const router = require("express").Router();
const {json} = require("body-parser");
let Product = require("../models/product");


router.route("/add").post((req, res) => {

    const registrationNo = Number(req.body.Registeration_number);
    const itemCode = req.body.Item_code;
    const productName = req.body.Product_name;
    const productDescription = req.body.Product_description;
    const companyName = req.body.Company_name;
    const companyAdress = req.body.Company_Adress;
    const VENstatus = req.body.VEN_status;
    const itemCategory = req.body.Item_category;

    const newProduct = new Product({

        registrationNo,
        productName,
        productDescription,
        companyName,
        companyAdress,
        VENstatus,
        itemCategory

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
             "VEN status " : validProduct.VENstatus,
              " Item category" : validProduct.itemCategory,
              "Company name " : validProduct.companyName
            }).catch((err) => {
                console.log(500).send({Status: "Registration number not found, invalid product!", error: err.message});
            })
        })
        

        
    
    });

    







module.exports = router;

