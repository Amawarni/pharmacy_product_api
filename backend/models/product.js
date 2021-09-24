const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema =  new Schema({

    ID : {
        type : String,
        required : true
    },
    Registration_number : {
        type : Number,
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
        required : true
    },
    Quality_status :{
        type : String,
        required : true
    }


});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;