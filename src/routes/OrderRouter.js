const express = require("express");
const router = express.Router()
const OrderController = require('../controller/OrderController');
const { authUserMiddleWare, authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create/:id', OrderController.createOrder) //authUserMiddleWare
router.get('/get-all-order/:id', OrderController.getAllOrderDetails) //authUserMiddleWare
router.get('/get-details-order/:id', OrderController.getDetailsOrder)
router.delete('/cancel-order/:id', OrderController.cancelOrderDetails)//authUserMiddleWare
router.get('/get-all-order', OrderController.getAllOrder) //authMiddleWare


module.exports = router