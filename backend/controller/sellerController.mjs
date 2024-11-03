import Seller from "../model/SellerModel.mjs";
import bcrypt from 'bcrypt'

export const registerSeller = async (req,res)=>{
    const { name, email, password} = req.body;
    console.log(name,email,password);
    try{
        const existingSeller = await Seller.findOne([email]);
        if(existingSeller) return res.status(400).json({ message:'Email already register'})
        
        const hashedPassword = await bcrypt.hash(password,10);
        const newSeller = new Seller({name,email, password:hashedPassword})
        await newSeller.save();

        res.status(201).json({ message: 'Seller registered succesfully', seller: newSeller});
    }catch(err){
        res.status(500).json({message: 'Error registering seller', err})
    }
};

export const getAllSellers = async(req,res)=>{
    try{
        const sellers = await Seller.find();
        res.status(200),json({sellers});
    }catch(err){
        res.status(500).json({message: 'Error fetching seller', err});
    }
};
export const getSellerById = async(req,res)=>{
    const {id}= req.params;
    try {
        const seller = await Seller.findById(id);
        if(!seller) return res.status(404).json({message:'Seller Not Found'})

        res.status(200).json(seller)
    } catch (err) {
        res.status(500).json({message: 'Error fetching seller', err})
    }
}

//update
export const updateSeller = async(req,res)=>{
    const {id}= req.params;
    const {name,email,password}=req.body;
    try{
        const hashedPassword = await bcrypt.hash(password,10);
        const updatedSeller = await Seller.findByIdAndUpdate(
            id,
            {name,email,password:hashedPassword},
            {new:true},
        )
        if(!updatedSeller) return res.status(404).json({message: "Seller not found"});

        res.status(200).json({message: 'Seller updated',seller:updatedSeller})
    }catch(err){
        res.status(500).json({message: 'Error updating seller',error})
    }
};

//delete
export const deleteSeller = async(req,res)=>{
    const {id} = req.params;
    try{
        const deletedseller = await Seller.findByIdAndDelete(id);
        if(!deletedseller) return res.status(404).json({message:'seller not found'})

        res.status(200).json({message:'Seller Deleted successfully'})
    }catch(err){
        res.status(500).json({message:'Error deleting seller',err})
    }
}



