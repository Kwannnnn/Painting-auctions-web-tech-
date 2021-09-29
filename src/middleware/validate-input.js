const {validationResult, body} = require("express-validator");
const {StatusCodes} = require("http-status-codes");

exports.paintingValidators = [
    body('name')
        .escape()
        .notEmpty().withMessage("Painting name must not be empty"),
    body('artist_name')
        .escape()
        .notEmpty().withMessage("Artist name must not be empty"),
    body('year_of_origin')
        .escape()
        .isInt().withMessage("Year of origin must be an integer"),
    body('current_price')
        .escape()
        .isFloat({min: 0}).withMessage("Current price must be a number and not lower than 0"),
    body('end_date')
        .escape()
        .isDate({format: "YYYY-MM-DD"}).withMessage("End date must be in the following format: YYYY-MM-DD")
        .notEmpty().withMessage("End date must not be empty")
];

exports.bidValidators = [
    body('user_id')
        .escape()
        .isInt({min: 0}).withMessage("User id must be an integer and not lower than 0"),
    body('painting_id')
        .escape()
        .isInt({min: 0}).withMessage("Painting id must be an integer and not lower than 0"),
    body('amount')
        .escape()
        .isInt({min: 0}).withMessage("Amount must be an integer and not lower than 0")
];

exports.userValidators = [
    body('email_address')
        .escape()
        .isEmail().withMessage("You must use a valid email"),
    body('username')
        .escape()
        .notEmpty().withMessage("User name must not be empty"),
    body('password')
        .escape()
        .isLength({min: 5}).withMessage("Password must be at least 5 characters long"),
    body('role')
        .escape()
        .notEmpty().withMessage("Role must not be empty")
];

exports.validateResult = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errors);
    }

    next();
}