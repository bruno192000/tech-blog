const express = require('express');
const axe = express();
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const PORT = process.env.PORT || 2077;
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
const session = require('express-session');


const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret secret',
    cookie: { maxAge: 36000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

axe.use(express.static(path.join(__dirname, 'public')));
axe.engine('handlebars', hbs.engine);
axe.set('view engine', 'handlebars');
axe.use(session(sess));
axe.use(express.json());
axe.use(express.urlencoded({ extended: true }));



axe.use(routes);
sequelize.sync({ force: false }).then(() => {
    axe.listen(PORT, () => console.log(`Ready in localhost:${PORT}!`));
});