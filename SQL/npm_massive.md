## What does massive do?
- Convert our SQL requests/commands in `db` to functions that return in our `console.log` 'db' object
- `getAll()` sends out for info 
- => `then()` what happens when it comes back? 
- => => `catch()` filters remaining errs

## When creating a server...
- `npm init -y` {creates a `package.json`}
- create a `server` folder
- create an `index.js` inside that `server` folder
- `npm i --save body-parser express cors` {and any other necc packages} {returns a `node_modules` folder}
- `nodemon path/to/server`
- `npm i --save dotenv` {allows us to create **environmental variables** for our server in a .env file} !!!!!!!
- copy URI from heroku into .env file as CONNECTION_STRING=""
- `require('dotenv').config();` in `server/index.js`
- `npm i --save massive`
- in `server/index` > initiate massive `massive( process.env.CONNECTION_STRING );`
    - this connects our server to our database via massive
    - locate your postgres URI in heroku (or whatever server using to host db)
    - in `.env`: `username:password@host:port/databasename` + `?ssl=true`
- `.then( db => {console.log(db) app.set('NAME', VALUE)})` names and returns our database to the server in nodemon 
- `.catch(err=>console.log(err))` // returns "err" in our console log when an error is processed
