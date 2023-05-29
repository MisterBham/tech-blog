const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// import db connection
const sequelize = require('./config/connection');

// create a new sequelize store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// create express server, set port
const app = express();
const PORT = process.env.PORT || 3001;

// create default handlebars engine, can pass in custom helpers
const hbs = exphbs.create({ helpers });

// configure session object with store
const sess = {
    secret: 'you shouldnt know',
    cookie: { maxAge: 60 * 60 * 1000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    })
};

// add express-session and store as Express.js middleware
app.use(session(sess));

// set view to be handled by handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// connect to routes in 'controller' folder
app.use(routes);

// sync sequelize models to db and start server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
});
