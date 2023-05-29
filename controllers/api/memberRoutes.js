const router = require('express').Router();
const { Member } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const memberData = await Member.findAll()
        req.session.save(() => {
            req.session.member_id = memberData.id;
            req.session.loggedIn = true;

        res.status(200).json(memberData);
    })
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;
