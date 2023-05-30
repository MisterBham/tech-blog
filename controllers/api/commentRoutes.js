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

module.exports = router;
