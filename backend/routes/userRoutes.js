// userRoutes.js
const express = require('express');
const { createUser, getUsers, loginUser, deleteUser, updateUser, getUserById } = require('../controllers/userController');

const router = express.Router();

router.post('/register', createUser);
router.get('/', getUsers);
router.post('/login', loginUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
router.get('/:id', getUserById);


module.exports = router;
