import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    sizes:[{
        size:{type:String, required:true},
        price:{type:Number, required:true},
        quantity:{type:Number, required:true},
    }],
    description:{
        type:String,
        required:false,
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Seller',
        required:true,
    },
})

const Product = mongoose.model('Product', productSchema);

export default Product;