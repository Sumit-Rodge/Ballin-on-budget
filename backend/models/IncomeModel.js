const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxLength:20
    },
    amount:{
        type:String,
        required:true,
        maxLength:20,
        trim:true
    },
    type:{
        type:String,
        default:'income'
    },
    date:{
        type:Date,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
},{timestamps:true })

module.exports = mongoose.model('Income',IncomeSchema)