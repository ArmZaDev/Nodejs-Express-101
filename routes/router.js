const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const products = [
        {name:"โน๊ตบุ๊ค", price:25500, image:"images/products/product1.png"},
        {name:"เสื้อผ้า", price:2000, image:"images/products/product2.png"},
        {name:"หูฟัง", price:800, image:"images/products/product3.png"},
    ]
    res.render('index.ejs',{products:products});
})

router.get('/addForm', (req, res) => {
    res.render('form.ejs');
})

router.get('/manage', (req, res) => {
    res.render('manage.ejs');
})

router.post('/insert', (req, res) => {
    console.log(req.body);
    res.render('form');
})

module.exports = router;