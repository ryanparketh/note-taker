const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const apiRoutes = require('./apiRoutes.js');


router.use(apiRoutes);

module.exports = router;