// bring in your dependencies!
require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      session = require('express-session'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0');

const app = express();
app.use( session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

// pattern programming to get this connected 
app.use( passport.initialize() );
app.use( passport.session() );

// implement massive! step two! 
massive(process.env.CONNECTION_STRING).then ( db => {
    app.set('db', db)
});

// keep it secret! 
// pull this data from auth0 client services 
passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db'); // calls our database forward to this Auth0Strategy
    db.get_user( [profile.identities[0].user_id] ).then( user => {
        console.log(user);
        if (user[0]) { // if a user was found (if 'user[0]' returns 'truthy')
            done(null, user[0].id);     
        } else { // what do we want to happen if the user doesn't already exist in our table?
            db.create_user( [profile.displayName, profile.emails[0].value, profile.picture, profile.identities[0].user_id] )
            .then( user => {
                done(null, user[0].id)
            })
        }
    });
}));

// more patterned code to set this up
passport.serializeUser( function(userID, done) {
    done(null, userID)
});

passport.deserializeUser( function(userID, done) {
    app.get('db').current_user([userID]).then( user => {
        done(null, user[0]);
    })
});

// our authentication endpoints
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/private',
    failureRedirect: '/auth'
}));

// create a "me" / current user endpoint
app.get('/auth/user', (req, res) => {
    if (!req.user) {
        return res.status(404).send('User not found, sorry!');
        // if there is no req.user, no one is currently logged on
    } else {
        res.status(200).send(req.user);
        // if all goes well, return req.user
    }
})

// logout method is pre-loaded 
// kills the current session
app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3000/')
})

// pick a port that isn't your front end's for this 
const PORT = 3030;
app.listen( PORT, ()=> console.log(`We are docked at ${PORT}`) );