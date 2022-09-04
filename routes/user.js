const express=require('express');
const router=express.Router();

const userController=require('../controllers/user');

router.post('/addnewusers',userController.addUser);
router.get('/getusers',userController.getUsers);
router.get('/getusers/:userid',userController.getUserById);
router.delete('/deleteuser/:userid',userController.deleteUser);
router.put('/edituser/:userid',userController.updateUser);
module.exports=router;