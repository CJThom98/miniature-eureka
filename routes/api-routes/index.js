const router = require('express').router();
const noteRoutes = require('./notes');

router.use(noteRoutes);

module.exports = router;