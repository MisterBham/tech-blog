const router = require('express').Router();
const { Chirp } = require('../../models');

// route is /api/chirp
router.get('/', async (req, res) => {
    try {
        const chirpData = await Chirp.findAll()
        res.status(200).json(chirpData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newChirp = await Chirp.create({
            title: req.body.title,
            contents: req.body.contents,
            member_id: req.session.member_id
        });
        res.status(200).json(newChirp);
        console.log('New chirp posted!')
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;
