## Todd's Focus Questions:
- _Why would we want to use sessions?_
    <details>
    <summary> <code> answer </code> </summary>
    </details>
- _What is a cookie?_
    <details>
    <summary> <code> answer </code> </summary>
    </details>
- _Is the session unique to each computer or login?_
    <details>
    <summary> <code> answer </code> </summary>
    </details>

# In-Class Notes
## What is middleware?
- Code that sits in the middle of two other pieces of code 
- Is able to monitor and possibly modify communication, in both directions 
- All middleware takes a `req`, `res`, `next`
- Gives us a chance to modify requests

## When do we use `app.use()` vs inline middleware?
- `inline middleware`: when we insert middleware as a parameter, when we want it to run for just a single route/endpoint
- `app.use()`: runs the middleware for every single request to our server, which can be desireable (i.e. `body-parser`)

## What is the `next` parameter in a middleware function? What makes it useful, say, compared to if you were expect to use a return statement?
- The next paramter is called only when our middleware is done
- Allows us to do async operations, like looking up data within a db, or making a request to another server

## What's an HTTP session?
- An on-going conversation between client and server

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
