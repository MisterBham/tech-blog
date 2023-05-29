const router = require('express').Router();
const { Chirp, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const chirpData = await Chirp.findAll({
      include: [
        {
          model: Comment,
          attributes: ['contents', 'chirp_id', 'member_id'],
        },
      ],
    });

    const chirps = chirpData.map((chirp) => 
    chirp.get({ plain: true })
    );
    console.log(chirps);
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', {
      chirps,
      loggedIn: req.session.loggedIn,
    });
  } 
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/chirp/:id', async (req, res) => {
  try {
    const chirpData = await Chirp.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ['contents', 'chirp_id', 'member_id'],
        },
      ],
    });
    const chirp = chirpData.get({ plain: true })

    console.log(chirpData);
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('chirp-detail', {
      chirp,
      loggedIn: req.session.loggedIn,
    });
  } 
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/chirp');
    return;
  }

  res.render('login');
});

module.exports = router;
