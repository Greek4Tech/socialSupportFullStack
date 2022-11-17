// Using express framework
const express = require('express');
const app = express();

// connect to the moon (database, authentication)
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


// sends messages from server to client (on screen)
const flash = require('express-flash');
const logger = require('morgan');
const connectDB = require('./config/database');

// paths for our routes
const mainRoutes = require('./routes/main');
const friendsRoutes = require('./routes/friends')
const googleRoutes = require('./routes/google');

// loads environment variables from a .env
require('dotenv').config({ path: './config/.env' });

// Passport config
require('./config/passport')(passport);

connectDB();

// setting our view enging to ejs
app.set('view engine', 'ejs');

// set up middleware for the application.
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

// Sessions
app.use(
  session({
    //makes sure you have a DB connection
    secret: 'keyboard cat', //used to compute the hash - can be changed
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware:
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

//home page => mainroute; find in routes folder
app.use('/', mainRoutes);
app.use('/friends', friendsRoutes);
app.use('/auth', googleRoutes)

app.listen(process.env.PORT, () => {
  console.log('Server is running, you better catch it!');
});
