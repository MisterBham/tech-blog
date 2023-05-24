const router = require('express').Router();
// const { User } = require('../models');
const withAuth = require('../utils/auth');

// , withAuth - Prevent non logged in users from viewing the homepage
router.get('/', async (req, res) => {
  try {
    const chirpData = await Chirp.findAll({
      include: [{
        model: User,
        attributes: { exclude: ['password', 'email'] },
    }, 
    {
        model: Comment,
        include: {
            model: User,
            attributes: ['id', 'username'],
        }
    }],
      order: [['date_created', 'DESC']]
    })

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
      member_name: req.session.member_name,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/login', (req, res) => {
//   // If a session exists, redirect the request to the homepage
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
