const router = require('express').Router();
const memberRoutes = require('./memberRoutes');
const chirpRoutes = require('./chirpRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/member', memberRoutes);
router.use('/chirp', chirpRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
