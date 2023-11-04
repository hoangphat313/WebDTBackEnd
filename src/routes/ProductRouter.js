const express = require("express");
const router = express.Router();
const ProductController = require('../controller/ProductController');
const { authMiddleware } = require("../middleware/authMiddleware");

router.post('/create', ProductController.createProduct)
router.put('/update/:id', ProductController.updateProduct) 
router.get('/get-details/:id',ProductController.getDetailsProduct) //,authMiddleware
router.delete('/delete/:id', ProductController.deleteProduct)//,authMiddleware
router.get('/get-all', ProductController.getAllProduct)
router.get('/get-all-type', ProductController.getAllType)
router.post('/delete-many', ProductController.deleteMany) //authMiddleWare

module.exports = router 