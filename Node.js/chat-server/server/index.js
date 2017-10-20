const express = require('express'),
      bodyParser = require('body-parser');

// create an express app
const app = express();

const messages = require('./controllers/messages_controller');

// configure the app to parse JSON from the body
app.use( bodyParser.json() );

// set up endpoints to associate with methods in messages_controller
const messagesBaseUrl = '/api/messages';
app.post( messagesBaseUrl, messages.create );
app.get( messagesBaseUrl, messages.read );
app.put( `${messagesBaseUrl}/:id`, messages.update );
app.delete( `${messagesBaseUrl}/:id`, messages.delete );

const PORT = 3030;
app.listen( PORT, () => {
    console.log(`Ship is docked at ${PORT} leagues`);
});