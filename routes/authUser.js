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
  logoutUser,
  userdata,
  addtocart,
  paymentController,
} = require('../controller/controller');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.post('/logout', authMiddleware, logoutUser);
router.get('/all-users', authMiddleware, isAdmin, getallUser);
router.get('/user/:id', authMiddleware, isAdmin, getUser);
router.delete('/user/:id', authMiddleware, isAdmin, deleteUser);
router.put('/edit-user', authMiddleware, updateUser);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser);
router.get('/store', userdata); // Add leading slash
router.post('/add-to-cart', authMiddleware, addtocart); // Change to POST method
router.post('/payment', authMiddleware, paymentController);

module.exports = router;
