const express = require('express');
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  
  userdata,
  
  logout,
  
  add_to_cart,

} = require('../controller/controller');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', createUser);
router.post('/login', authMiddleware,loginUserCtrl);
router.post('/logout', authMiddleware, logout);
router.get('/all-users', authMiddleware, isAdmin, getallUser);
router.get('/user/:id', authMiddleware, isAdmin, getUser);
router.delete('/user/:id', authMiddleware, isAdmin, deleteUser);
router.put('/edit-user', authMiddleware, updateUser);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser);
router.get('/store', userdata); 
router.post('/add-to-cart', authMiddleware,add_to_cart); 



module.exports = router;
