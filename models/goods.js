import mongoose from "mongoose";

const Good = new mongoose.Schema({
    image: {type: String},
    name: {type: String},
    price: {type: Number},
    article: {type: String},
    available: {type: Boolean},
    category: {type: String},
    quantity: {type: Number}
})

export default mongoose.model('Good', Good)