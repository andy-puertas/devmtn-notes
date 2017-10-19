## FULLLLLLLLL
## STTTTAAAACCCCKKKKK
## SSIIIIIMMMMUUUULLLAAAATTTIIOOOOONNNN
## Refer to : full-stack-review for implemented notes 

1. in `server` > `server.js`
    - a: dependencies!

            require('dotenv').config(); // syntax is key!  

    - b: invoke them

            const app = express();
            app.use( session({
                secret: 'xxxx',     // pull this from .env
                resave: false,
                saveUninitialized: false
            }));
            app.use( passport.initialize() );
            app.use( passport.session() );
            passport.use( new Auth0Strategy({}, function(){} ));

    - c: `Docked to ${PORT}`

    - d: `package.json` > `"main": "./server/server.js"` 
        - ^^ allows you to run nodemon without designating a location

    - e: set up client secrets and domains in > `.env`

            process.env.SECRET, process.env.AUTH_DOMAIN, process.env.AUTH_CLIENT_ID,   process.env.AUTH_CLIENT_SECRET, process.env.AUTH_CALLBACK

        - DON'T FORGET: Toggle OEDP to `off` in the Advanced Settings on new clients 

    - f: more passport invokation needed

            passport.serializeUser( function(user, done) { done(null, user) });
            passport.deserializeUser( function(user, done) { done(null, user) });

    - g: build out our authentication endpoints
        - one for the general authentication process to kick off 

                app.get('/auth', passport.authenticate('auth0'));

        - one for what happens when there's either a success or failure

                app.get('/auth/callback', passport.authenticate('auth0', {
                    successRedirect: 'http://yourlink:here', 
                    failureRedirect: 'http://yourlink:here' 
                        // maybe set this to '/auth' so the user cantry logging in again
                }));

        - this endpoint will redirect our callback to the front end
        - however, our callback URL in client is the backend host `'http://localhost:3030/auth/callback'`

2. get connected to Heroku using `CONNECTION_STRING`
    - a: invoke massive using this string

            massive( process.env.CONNECTION_STRING ).then( db => {app.set('db', db) });
             'db' -- massive database 

3. create a db folder 
    - a: > `users_table.sql`
        - keep all SQL files in the db folder 
        - will help maintain a structure that is easy to troubleshoot 
        - call your `users_table` in `Auth0Strategy`

                const db = app.get('db');

    - b: > `get_user.sql`
        - this is checking to see if logged in user already exists in our db

    - c: `create_user.sql`
        - the method of adding a user that doesn't already exist in our table as 'new' to our db

4. return to `server` > `server.js`, create new endpoint for "current user"
    - if `!req.user` --> `"404: user not found"`
    - if `req.user` --> return user info

            app.get('/auth/user', (req, res) => {
                if (!req.user) {
                    return res.status(404).send('User not found, sorry!');
                } else {
                    res.status(200).send(req.user);
                }
            })

5. get started on the front end!
    - Create a components folder. Inside of `components`:
        - `Login` > `Login.js`, `Login.css`
        - `Private` > `Private.js`, `Private.css`

6. Building the Login page
    - a: `import React`, `stylesheet.css`, and `logo.svg`
        - standard component build `export default class __ extends ___ {}`

    - b: repeat for Private

    - c: `package.json` > `"proxy": "http://localhost:3030"` <-- whatever your backend port is 
        - this fills in the remainder of the path via `axios.get(/auth/user)`
        - proxy tells our code to redirect requests to the proxy URL when needed

    - d: `.env` > `"REACT_APP_LOGIN":http://localhost:3030/auth`
        - changes to `package.json `or `.env` require a quit and restart of npm 

7. hooking up to redux
    - src > ducks > users.js
        - a: default params! set up initial state obj
        - b: bring it in first parameter (state=initialState, aciton)

8. src > store.js
    - import { createStore } from 'redux';
        - import reducer from './ducks/users';
        - export default createStore(reducer);

9. create a logout endpoint
    - `logOut()` method is pre-loaded
    - kills the current session

            app.get('/auth/logout', (req, res) => {
                req.logOut();
                res.redirect(302, 'http://localhost:3000')
            });

10. `users.js` 
    - set up the reducer to track state of 'user'

            const initialState = {
                user: {}
            };

            export default function reducer(state=initialState, action) {
                return state;
            }

11. Adding method to Private.js
    - a: `componentDidMount()` makes the axios request for user data to then push to the "private" screen view

    - b: build a constructor in the `'Private.js'` default export

            constructor(props) {
                super(props);
                this.state = {
                    user: {}
                };
            };

    - c: `import axios from 'axios'`

            componentDidMount() {
                axios.get('/auth/user').then( res => {
                    this.setState({
                        user: res.data
                    });
                })
            };

`... to be continued... `
 