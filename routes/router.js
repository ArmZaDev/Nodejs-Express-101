const express = require('express');
const router = express.Router();
const Product = require('../models/products');
const multer = require('multer');

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, './public/images/products');
    },
    filename:function(req, file, cb){
        cb(null, Date.now() + ".jpg")
    }
})

router.get('/', (req, res) => {
    const products = [
        {name:"โน๊ตบุ๊ค", price:25500, image:"images/products/product1.png"},
        {name:"เสื้อผ้า", price:2000, image:"images/products/product2.png"},
        {name:"หูฟัง", price:800, image:"images/products/product3.png"},
    ]
    res.render('index',{products:products});
})

router.get('/addForm', (req, res) => {
    res.render('form');
})

router.get('/manage', (req, res) => {
    res.render('manage');
})

const upload = multer({
    storage:storage
})

router.post('/insert', upload.single("image"), (req, res) => {
    let data = new Product({
        name:req.body.name,
        price:req.body.price,
        image:req.file.fieldname,
        description:req.body.description
    })
    Product.saveProduct(data, function(err){
        if(err) console.log(err);
        res.redirect('/');
    })
})

module.exports = router;