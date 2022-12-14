import mongoose from "mongoose";
//import Category from "./category.js";

const Order = new mongoose.Schema({
    userId: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId
    },
    goodId: {
        ref: 'Good',
        type: mongoose.Schema.Types.ObjectId
    },
    quantity: {type: Number},
    price: {type: Number},
    date: {type: Date}
})

export default mongoose.model('Order', Order)