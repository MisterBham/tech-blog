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
            // loggedIn: req.session.loggedIn,
            // member_id: req.session.member_id,
            // username: req.session.username,
        });
        res.status(200).json(newChirp);
        console.log('New chirp posted!')
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const newChirp = await Chirp.update(req.body, {
            where: {
                id: req.params.id,
            },
            // loggedIn: req.session.loggedIn,
            // member_id: req.session.member_id,
            // username: req.session.username,
        });
        res.status(200).json(newChirp);
        console.log('Chirp successfully edited!')
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const chirpData = await Chirp.destroy({
            where: {
                id: req.params.id,
                member_id: req.session.member_id,
            },
            // loggedIn: req.session.loggedIn,
            // member_id: req.session.member_id,
            // username: req.session.username,
        });

        if (!chirpData) {
            res.status(404).json({ message: "No chirp found with this ID!" });
            return;
        }
        res.status(200).json(chirpData);
        console.log('Chirp successfully deleted.')
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;
