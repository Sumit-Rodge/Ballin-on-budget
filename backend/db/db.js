const mongoose = require('mongoose')
const db = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected")
    } catch (error) {
        console.log("Error connecting to database");
    }
}

module.exports = {db}