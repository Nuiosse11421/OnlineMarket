import mongoose from "mongoose";

const buyerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    password:{
        type:String,
        required:true,
        minLength:8,
    },
    cart:[{
        product:{type:mongoose.Schema.Types.ObjectId,ref:'Product'},
        quantity:{type:Number,required:true}
    }],
    orders:[{
        products:[
            {
                product:{type:mongoose.Schema.Types.ObjectId,ref:'Product'},
                quantity:{type:Number,required:true},
            }
        ],
        totalAmount:{type:Number,requird:true},
        orderDate:{type:Date,default: Date.now}
    }]
})

const Buyer = mongoose.model('Buyer',buyerSchema);
export default Buyer;