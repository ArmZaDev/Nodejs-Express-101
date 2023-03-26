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

router.get('/add-product', (req, res) => {
    if(req.cookies.login){
        res.render('form'); //บันทึกสินค้้า
    }else{
        res.render('admin'); //เข้าสู่ระบบ
    }   
})

router.get('/manage', (req, res) => {
    if(req.cookies.login){
        Product.find().exec((err, doc) => {
            res.render('manage',{products:doc});
        })
    }else{
        res.render('admin'); //เข้าสู่ระบบ
    } 
})

//logout
router.get('/logout', (req, res) => {
    console.log("test logout");
    res.clearCookie('username');
    res.clearCookie('password');
    res.clearCookie('login');
    res.redirect('/manage');
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

router.get('/:id', (req, res) => {
    const product_id = req.params.id;
    Product.findOne({_id:product_id}).exec((err, doc) => {
        res.render('product', {product:doc});
    })
})

router.post('/edit', (req, res) => {
    const edit_id = req.body.edit_id;
    Product.findOne({_id:edit_id}).exec((err, doc) => {
        res.render('edit', {product:doc});
    })
})

router.post('/update', (req, res) => {
    // ข้อมูลใหม่ที่ถูกส่งมาจากฟอร์มแก้ไข
    const update_id = req.body.update_id;
    let data = {
        name:req.body.name,
        price:req.body.price,
        description:req.body.description
    }
    //อัพเดตข้อมูล
    Product.findByIdAndUpdate(update_id, data, {useFindAndModify:false}).exec(err => {
        res.redirect('/manage')
    })
})
//login
router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const timeExpire = 30000; // 30 sec.

    if(username === "admin" && password === "1234"){
        //สร้าง cookie
        res.cookie('username', username, {maxAge:timeExpire});
        res.cookie('password', password, {maxAge:timeExpire});
        res.cookie('login', true, {maxAge:timeExpire});
        res.redirect('/manage');
    }
    else{
        res.render('404');
    }
})

module.exports = router;