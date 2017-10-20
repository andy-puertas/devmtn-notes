# Full Stack Review! 
## with [Joe Blank](https://github.com/joeblank)

## What are we building?
- Banking app, requires a Google login
- Using...
  + `massive`, `passport`, `passport-auth0`

## What endpoints do we need?
- `GET` `/auth`
- `GET` `/auth/callback`
- `GET` `/auth/user`
- `GET` `/api/logout`

## What goes into our db?
```
   Users TABLE 
     id SERIAL PRIMARY KEY
     user_name VARCHAR(180)
     img TEXT
     auth_id TEXT
```

## Components
- Landing page: Login, logo
- Second view: Account info (banking page, username, email, img, id, available balance)
- Logout endpoint
