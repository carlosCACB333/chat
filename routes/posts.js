const Router = require("express");
const { check } = require("express-validator");
const { newPost, getPosts, toLike } = require("../controllers/posts");
const { validateJWT } = require("../middlewares/authentications");
const { validateErrors } = require("../validators/validator");

const router = Router();

router.post('/', [validateJWT], newPost)
router.get('/', [validateJWT], getPosts)
router.post('/like', [
    validateJWT,
    check('id', 'No es un id válido').notEmpty().isMongoId().withMessage('No es un id válido'),
    validateErrors,
], toLike)
module.exports = router