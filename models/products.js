// ใช้งาน mongoose
const mongoose = require('mongoose');

// เชื่อมต่อไปยัง mongoDB
const dbUrl = 'mongodb://127.0.0.1:27017/productDB'
mongoose.connect(dbUrl, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err => console.log(err));

// ออกแบบ Shema
let productSchema = mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String
})

// ส้รางโมเดล
let Product = mongoose.model("products", productSchema);

// ส่งออกโมเดล
module.exports = Product;