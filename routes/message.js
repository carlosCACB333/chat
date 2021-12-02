
const Router = require('express')
const { check } = require('express-validator')
const { getMessages, getMessageGroup } = require('../controllers/message')
const { validateJWT } = require('../middlewares/authentications')
const { validateErrors } = require('../validators/validator')

const router = Router()

router.get('/:from', [
    validateJWT,
    check('from', 'No es un id válido').isMongoId(),
    validateErrors
], getMessages)

router.get('/group/:from', [
    validateJWT,
    check('from', 'No es un id válido').isMongoId(),
    validateErrors
], getMessageGroup)

module.exports = router