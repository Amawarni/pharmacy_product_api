const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const productSchema =  new Schema({

    Registeration_number : {
        type : String,
        required : true
    },
    Item_code : {
        type : String,
        required : true
    },
    Product_name: {
        type : String,
        required : true
    },
    Product_description : {
        type : String

    },
    Company_name :{
        type : String,
        required : true
    },
    Company_Adress : {
        type : String,
        
    },
    VEN_status :{
        type : String,
        required : true
    },
    Item_category :{
        type : String,
        required : true
    }


});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;