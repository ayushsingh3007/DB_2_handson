// yaha login singup authentication edit user block user delete user 
const express = require('express');
const { createUser, loginUserCtrl, getallUser, getUser, deleteUser, updateUser, blockUser, unblockUser } = require('../controller/controller');
const {authMiddleware,isAdmin} = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.get('/all-users',getallUser)
router.get('/:id',authMiddleware,isAdmin, getUser)
router.get('/:id',deleteUser)
router.put('/edit-user',authMiddleware,updateUser)
router.put('/block-user/:id',authMiddleware,isAdmin,blockUser)
router.put('/unblock-user:id',authMiddleware,isAdmin,unblockUser)

module.exports = router;
