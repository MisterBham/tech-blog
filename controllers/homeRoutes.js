const router = require('express').Router();
const { Chirp, Comment, Member } = require('../models');

router.get('/', async (req, res) => {
  res.render('homepage', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/dashboard', async (req, res) => {
  try {
    const chirpData = await Chirp.findAll({
      include: [
        {
          model: Member,
          attributes: ['username'],
        },
      ],
      order: [['date_created', 'DESC']]
    });

    const chirps = chirpData.map((chirp) => chirp.get({ plain: true }));
    
    res.render('dashboard', {
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
          model: Member,
          attributes: ['username'],
        },
        {
          model: Comment,
          include: [
            {
              model: Member,
              attributes: ['id','username']
            }
          ]
        },
      ],
    });
    const chirp = chirpData.get({ plain: true })

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

router.get('/newChirp', async (req, res) => {
  if (req.session.loggedIn) {
    res.render('newChirp', {
      loggedIn: req.session.loggedIn,
    });
  } else {
    res.render('login');
    }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard', {
      loggedIn: req.session.loggedIn,
    });
    return;
  } else {
    res.render('login');
    }
  });

router.get('/logout', (req, res) => {
  res.render('logout')
});

module.exports = router;
