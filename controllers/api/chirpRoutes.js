const router = require('express').Router();
const { Chirp } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const chirpData = await Chirp.findAll()
        res.status(200).json(chirpData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;
