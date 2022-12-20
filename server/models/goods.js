import mongoose from "mongoose";
//import Category from "./category.js";

const Good = new mongoose.Schema({
    image: {type: String},
    name: {type: String},
    price: {type: Number},
    article: {type: String},
    available: {type: Boolean},
    category: {
        ref: 'Category',
        type: mongoose.Schema.Types.ObjectId
    },
    quantity: {type: Number}
})

export default mongoose.model('Good', Good)