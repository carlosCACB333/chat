const { Router } = require("express");
const { check } = require("express-validator");
const { authLogin, authSinup, renewToken, searchUser } = require("../controllers/auth");
const { validateJWT } = require("../middlewares/authentications");
const { validateErrors } = require("../validators/validator");

const baseValidator = [
    check('username', 'El username es requerido').notEmpty(),
    check('password', 'El password es requerido').notEmpty(),
]

const loginValidator = [
    ...baseValidator,
    validateErrors,
]

const signupValidator = [
    ...baseValidator,
    check('firstName', 'El nombre es requerido').notEmpty(),
    check('lastName', 'El Apellido es requerido').notEmpty(),
    check('email', 'El email no es válido').if((value, { req }) => req.body.email).isEmail(),
    validateErrors,
]

const router = Router()
router.post('/login', loginValidator, authLogin)
router.post('/signup', signupValidator, authSinup)
router.post('/renew', validateJWT, renewToken)
router.post('/list', validateJWT, searchUser)

module.exports = router;
