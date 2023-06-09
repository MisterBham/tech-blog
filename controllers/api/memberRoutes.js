const router = require('express').Router();
const { Member } = require('../../models');

// route is /api/member
router.get('/', async (req, res) => {
    try {
        const memberData = await Member.findAll()
        req.session.save(() => {
            req.session.member_id = memberData.id;

        res.status(200).json(memberData);
    })
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

// POST route is /api/member/
router.post('/', async (req, res) => {
    try {
        const memberData = await Member.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.member_id = memberData.id;
            req.session.username = memberData.username;
            req.session.loggedIn = true;

            res.status(200).json(memberData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
    

// route is /api/member/login
router.post('/login', async (req, res) => {
    try {
        const memberData = await Member.findOne({ where: { email: req.body.email } });

        if(!memberData) {
            res
                .status(400)
                .json({ message: 'This email does not exist in our database, please verify!' });
            return;
        }

        const validatePass = await memberData.checkPassword(req.body.password);

        if(!validatePass) {
            res
                .status(400)
                .json({ message: 'The supplied password does not match our database record, please verify!'});
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.member_id = memberData.id;
            req.session.username = memberData.username;

            res
                .status(200)
                .json({ member: memberData, message: 'Successfully logged in!'})
        });
    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// route is /api/member/logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
        res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
    });

module.exports = router;
