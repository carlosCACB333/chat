const Router = require("express");
const { check } = require("express-validator");
const { toFollow, userDetail } = require("../controllers/users");
const { validateJWT } = require("../middlewares/authentications");
const { validateErrors } = require("../validators/validator");
const idValidator = [
    validateJWT,
    check('id', 'El id es requerido').notEmpty().isMongoId().withMessage('No es un id válido'),
    validateErrors
]
const router = Router();

router.post('/follow', idValidator, toFollow)
router.post('/:id', idValidator, userDetail)

module.exports = router