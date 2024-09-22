const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');

router.get('/', controller.index);
router.get('/shop', controller.shop);
router.get('/detail', controller.detail);
router.get('/cart', controller.cart);
router.get('/checkout', controller.checkout);
router.get('/contact', controller.contact);
router.get('/home', controller.home);

module.exports = router;