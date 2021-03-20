const {check} = require("express-validator");

const isMatch = (value, {req}) => {
    return value == req.body.password ? true : false;
};

// Server-Side Validator
exports.RegisterValidator = [

    // Name Validator
    check('name')
    .trim()
    .escape()
    .matches(/^[A-Za-z\s]+$/).withMessage('Name must only contain letters')
    .isLength({ min:1, max:30 }).withMessage('Name must be between 1 and 30 characters'),

    // Email Validator
    check('email', 'Enter an email address')
    .notEmpty()
    .trim()
    .escape()
    .isEmail().withMessage('Enter a valid email address'),

    // Password Validator
    check('password', 'Enter a password')
    .notEmpty(),

    // Confirm Password Validator
    check('confirm', 'Confirm your password')
    .notEmpty()
    .custom(isMatch).withMessage('Password does not match'),

];

exports.LoginValidator = [

    // Email Validator
    check('email', 'Enter your email address')
    .notEmpty(),

    // Password Validator
    check('password', 'Enter your password')
    .notEmpty(),
];

exports.ProjectValidator = [

    // Project Validator
    check('name', 'Enter a name for project')
    .notEmpty()
    .isLength({ min:1, max:30 }).withMessage('Project name must be between 1 and 30 characters')
];