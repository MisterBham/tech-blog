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

// POST route is /api/comment
router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create({
            loggedIn: req.session.loggedIn,
            contents: req.body.contents,
            chirp_id: req.body.chirp_id,
            member_id: req.session.member_id,
            username: req.session.username,
        });
        req.session.save(() => {
            req.session.member_id = commentData.id;
            req.session.username = commentData.username;
            req.session.loggedIn = true;

            res.status(200).json(commentData);
        });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;
