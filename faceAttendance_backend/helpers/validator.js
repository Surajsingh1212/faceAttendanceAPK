const { check } = require('express-validator');

exports.registerValidator = [
    check('employee_name','Employee Name is required').not().isEmpty(),
    check('employee_id','Employee ID is required').not().isEmpty(),
    check('department','Department is required').not().isEmpty(),
    check('work_mode','Work Mode is required').not().isEmpty(),
    check('joining_date','Joining Date is required').not().isEmpty(),
    check('email','Please enter a valide email').isEmail().normalizeEmail({
        gmail_remove_dots:true
    }),
    check('password','Password is required').not().isEmpty(),
]
exports.loginValidator = [
    check('email','Please enter a valide email').isEmail().normalizeEmail({
        gmail_remove_dots:true
    }),
    check('password','Password is required').not().isEmpty(),
]
exports.faceValidator = [
    check('userId','User ID is required').not().isEmpty(),
    check('base64Image','Face Image is required').not().isEmpty(),
]