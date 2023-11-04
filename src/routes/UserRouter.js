const express = require("express");
const router = express.Router();
const userController = require('../controller/UserController');
const { authMiddleWare,authUserMiddleWare} = require("../middleware/authMiddleware");

router.post('/sign-up', userController.createUser)
router.post('/sign-in', userController.loginUser)
router.post('/log-out', userController.logoutUser)
router.put('/update-user/:id',userController.updateUser) //,authUserMiddleware
router.delete('/delete-user/:id', userController.deleteUser) //authMiddleware
router.get('/get-all', userController.getAllUser) //authMiddleware
router.get('/get-details/:id', userController.getDetailsUser) //,authUserMiddleware
router.post('/refresh-token',userController.refreshToken)
router.post('/delete-many', userController.deleteMany) //authMiddleWare

module.exports = router 