const express =  require('express')
const router = express();
const authController = require('../controllers/authControllers');
const { registerValidator,loginValidator,faceValidator } = require('../helpers/validator')

router.post('/register',registerValidator,authController.registerUser)
router.post('/register-face',faceValidator,authController.registerFace)
router.post('/login',loginValidator,authController.loginUser)
module.exports = router;