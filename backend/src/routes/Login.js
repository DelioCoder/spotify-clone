const Router = require('express');
const router = Router();

const { login } = require('../controllers/LoginController');

router.route('/')
    .post(login);

module.exports = router;