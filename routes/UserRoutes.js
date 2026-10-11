const express=require('express');

const {
    GetAllUsers,
    GetUserById,
    CreateUser,
    UpdateUser,
    DeleteUser
}=require('../controller/UserControl');

const router=express.Router();
router.get('/',GetAllUsers);
router.get('/:id',GetUserById);
router.post('/',CreateUser);
router.put('/:id',UpdateUser);
router.delete('/:id',DeleteUser);

module.exports=router;