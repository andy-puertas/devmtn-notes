## What are Express Sessions?
- `cookies`: help us retain small bits of data on a user/client computer to be accessed when they visit our site/server again

- we can pull data accessed by cookies from them using restructuring:

    req.session.key

- structuring a session > `server/index.js`

    app.use( session({
        secret: '@nyThing y0u w@nT',
        resave: false, // boolean
        saveUninitialized: false, // boolean // what is your initial state?
        expires: 100000 // milliseconds until website user logs out
    }));

- great for shopping carts or other authentication scenarios where users are the same across multiple requests 

## What are Endpoints?
- points in our index that listen for user requests and return a response

- `GET` - `POST` - `PUT` - `DELETE`
    - C.R.U.D. functions all over again

- How do we want to handle user requests on our own server?

- structuring an endpoint > `server/index.js`

    app.get('/api/path', function(req, res, next) {
        var whatdowewanttohappen;
        var putthatcodeinhere;
    }, next(); );

- this is where we would add filters / middleware
- endpoints ignore question marks which is why it can handle filter requests 
