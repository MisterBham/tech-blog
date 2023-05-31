const router = require('express').Router();
const { Chirp, Comment, Member } = require('../models');

router.get('/', async (req, res) => {
  if(req.session.loggedIn) {
    try {
      // Send over the 'loggedIn' session variable to the 'homepage' template
      res.redirect('/dashboard');
    } 
    catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.render('homepage');
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    const chirpData = await Chirp.findAll({
      include: [
        {
          model: Member,
          attributes: ['name'],
        },
      ],
      order: [['date_created', 'DESC']]
    });

    const chirps = chirpData.map((chirp) => chirp.get({ plain: true }));
    
    // Send over the 'loggedIn' session variable to the 'homepage' template
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
          attributes: ['name'],
        },
        {
          model: Comment,
          include: [
            {
              model: Member,
              attributes: ['id','name']
            }
          ]
        },
      ],
    });
    const chirp = chirpData.get({ plain: true })

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
    res.redirect('/dashboard');
    return;
  } else {
    res.render('login');
    }
  });

router.get('/logout', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.render('logout');
    return;
  } else {
    res.render('login');
  }
});

module.exports = router;
