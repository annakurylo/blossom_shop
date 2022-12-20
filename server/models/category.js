import mongoose from "mongoose";

const Category = new mongoose.Schema({
    category: {type: String}
})

export default mongoose.model('Category', Category)