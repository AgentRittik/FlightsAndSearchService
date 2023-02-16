const express = require('express');
const router = express.Router();

const v1ApiRoutes = require('./v1/index');

router.use('/v1', v1ApiRoutes); // whenever you get a route that starts with /v1 it will be handled by the v1ApiRoutes

module.exports = router;