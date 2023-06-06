const router = require('express').Router();
const { Comment } = require('../../models');

// route is /api/comment
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll()
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

// POST route to /api/comment
router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create({
            contents: req.body.contents,
            chirp_id: req.body.chirp_id,
            loggedIn: req.session.loggedIn,
            member_id: req.session.member_id,
            username: req.session.username,
        });
        res.status(200).json(commentData);
        console.log('New comment posted!')
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;
