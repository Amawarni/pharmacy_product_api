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
            res.status(404).send({Status: "error" });
        }
        else
        {
            res.status(200).send({Status: "success", products: product });
        }
        }).catch((err) => {
            res.status(500).send({error: err.message});
    })
    
});


router.route("/update/:id").put(async(req, res) =>{

    let productId = req.params.id;
    const {Registeration_number,Item_code,Product_name,Product_description,Company_name,Company_Adress,VEN_status,Item_category }  = req.body;

    const updateProduct =  {
        Registeration_number,
        Item_code,
        Product_name,
        Product_description,
        Company_name,
        Company_Adress,
        VEN_status,
        Item_category
    }

  await Product.findByIdAndUpdate(productId, updateProduct)
    .then(() => {
        res.status(200).send({Status : "Product Updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({Status : " Error with updating data " , error : err.message});
    })
    

    
});



router.route("/delete/:id").delete(async (req, res) => {
    let productId = req.params.id;

    await Product.findByIdAndDelete(productId)
    .then(() => {
        res.status(200).send({Status : "Product deleted"});
    }). catch((err) => {
        console.log(err.message);
        res.status(500).send({Status : "Error with delete Product", error : err.message});
    })




});

router.route("/get/:id").get(async(req, res) => {

    let productId = req.params.id;


   const product =  await  Product.findById(productId).then(() => {
        res.status(200).send({Status : "Product fetched", data : product})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({Status : "Error with  get Product"});
    })
});

   
   router.route("/get").get(async(req, res) => {

    const validProduct = await Product.find().then((product) => {
        if(product == null)
        {
            res.status(404).send({Status: "error" });
        }
        else
        {
            res.status(200).send({Status: "success", products: product });
        }
        }).catch((err) => {
            res.status(500).send({error: err.message});
    });
  
   
    });

 router.route("/").get((req,res) => {
     Product.find().then((products)=>{
         res.json(products)
     }).catch((err)=>{
         console.log(err)
     })
 })






module.exports = router;

