const express = require('express');
const router = express.Router();
const Product = require('../models/products');
const multer = require('multer');

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, './public/images/products');
    },
    filename:function(req, file, cb){
        cb(null, Date.now() + ".jpg");
    }
})

router.get('/', (req, res) => {
    Product.find().exec((err, doc) => {
        res.render('index',{products:doc});
    })
    
})

router.get('/addForm', (req, res) => {
    res.render('form');
})

router.get('/manage', (req, res) => {
    Product.find().exec((err, doc) => {
        res.render('manage',{products:doc});
    })
})

router.get('/delete/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id, {useFindAndModify:false}).exec(err => {
        if(err) console.log(err);
        res.redirect('/manage');
    })
})

const upload = multer({
    storage:storage
})

router.post('/insert', upload.single("image"), (req, res) => {
    let data = new Product({
        name:req.body.name,
        price:req.body.price,
        image:req.file.filename,
        description:req.body.description
    })
    Product.saveProduct(data, (err) => {
        if(err) console.log(err);
        res.redirect('/');
    })
})

module.exports = router;