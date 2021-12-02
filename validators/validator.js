const { validationResult } = require("express-validator")


const validateErrors = (req, res, next) => {

    const formater = (data) => {
        return { [data.param]: data.msg };
    }
    const errors = validationResult(req).formatWith(formater);

    if (!errors.isEmpty()) {
        // convertimos array a objeto
        const obErrrors = errors.array().reduce((result, item) => {
            var key = Object.keys(item)[0];
            result[key] = item[key];
            return result;
        }, {})
        return res.status(400).json(obErrrors);
    }

    next();
}

module.exports = { validateErrors }