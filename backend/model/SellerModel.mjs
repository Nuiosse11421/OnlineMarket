import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }]
});

const Seller = mongoose.model('Seller', sellerSchema);

export default Seller;