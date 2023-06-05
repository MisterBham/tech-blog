const router = require('express').Router();
const { Chirp, Comment, Member } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
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

    res.render('feed', {
      chirps,
      loggedIn: req.session.loggedIn,
      member_id: req.session.member_id,
      username: req.session.username,
    });
  } 
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const chirpData = await Chirp.findAll({
      where: {
        member_id: req.session.member_id,
      },
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
      member_id: req.session.member_id,
      username: req.session.username,
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
      member_id: req.session.member_id,
      username: req.session.username,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/editChirp/:id', withAuth, async (req, res) => {
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

    res.render('edit-chirp', {
      chirp,
      loggedIn: req.session.loggedIn,
      member_id: req.session.member_id,
      username: req.session.username,
    });
  } 
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/newChirp', withAuth, async (req, res) => {
  res.render('newChirp', {
    loggedIn: req.session.loggedIn,
    member_id: req.session.member_id,
    username: req.session.username,
  });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard', {
      loggedIn: req.session.loggedIn,
      member_id: req.session.member_id,
      username: req.session.username,
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
