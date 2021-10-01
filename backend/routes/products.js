const router = require("express").Router();
//const {json} = require("body-parser");
let Product = require("../models/product");


router.route("/add").post((req, res) => {

    const Registeration_number = req.body.Registeration_number;
    const Item_code = req.body.Item_code;
    const Product_name = req.body.Product_name;
    const Product_description = req.body.Product_description;
    const Company_name = req.body.Company_name;
    const Company_Adress = req.body.Company_Adress;
    const VEN_status = req.body.VEN_status;
    const Item_category = req.body.Item_category;

    const newProduct = new Product({

        Registeration_number,
        Item_code,
        Product_name,
        Product_description,
        Company_name,
        Company_Adress,
        VEN_status,
        Item_category

    })

    newProduct.save().then(() =>{
        res.json("Product added successfully!");
    }).catch((err) => {
        console.log(err);
    })


});

router.route("/get/:registrationNo").get(async (req , res ) => {
    let productRegNo = req.params.registrationNo;

    const validProduct = await Product.findOne({Registeration_number : productRegNo}).then((product) => {
        if(product == null)
        {
            res.status(404).send({Status: "Registration number is not found, invalid product!"});
        }
        else
        {
            res.status(200).send({product});
        }
        }).catch((err) => {
            res.status(500).send({error: err.message});
    })
    
});


   
   router.route("/").get((req, res) => {

        res.send('Hello World!!!');
    });








module.exports = router;

