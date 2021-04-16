const {check} = require('express-validator')

module.exports = [
     check('email')
     .exists().withMessage('Vui lòng cung cấp địa chỉ email')
     .notEmpty().withMessage('Email không được để trống')
     .isEmail().withMessage('Email không hợp lệ'),

     check('password')
     .exists().withMessage('Vui lòng cung cấp mật khẩu')
     .notEmpty().withMessage('Mật khẩu không được để trống')
     .isLength({min: 6}).withMessage("Mật khẩu phải có tối thiểu 6 kí tự"),

     check('fullname')
     .exists().withMessage('Vui lòng cung cấp tên người dùng')
     .notEmpty().withMessage('Tên người dùng không được để trống')
     .isLength({min: 6}).withMessage("Tên người dùng phải có tối thiểu 6 kí tự")
     
]