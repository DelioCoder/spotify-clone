const Router = require('express');
const router = Router();

const { refreshToken } = require('../controllers/RefreshController');

router.route('/')
    .post(refreshToken);

module.exports = router;