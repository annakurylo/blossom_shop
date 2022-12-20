import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    number: {type: String, required: true, unique: true},
    street: {type: String, required: true},
    house: {type: String, required: true},
    password: {type: String, required: true}
})

export default mongoose.model('User', User)