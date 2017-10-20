const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

massive( process.env.CONNECTION_STRING ).then( db => {
    console.log(db)
    app.set('db', db)
}).catch(err => console.log(err)) ;

app.get('/api/getAll', (req, res)=> {
    if(req.query.id) {
        req.app.get('db').searchUsers(+req.query.id).then(user => {
            res.status(200).send(user)
        })
    } else {
        req.app.get('db').getAll().then( users => {
            res.status(200).send(users)
        }) 
    }
})

app.post('/api/newUser', (req, res)=> {
    let { name, age } = req.body;
    req.app.get('db').createNewUser( [name, age] ).then( user => {
        res.status(200).json('it worked!');
    })
})

app.listen(port, () => console.log(`We are docked at port ${port}`));