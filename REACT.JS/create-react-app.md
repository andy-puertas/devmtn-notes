### Steps surrounding `create-react-app`

1. `cd` into your outer working directory (where do you want the folder containing this project to exist?)

2. on the command line in your outer directory, type `create-react-app your-project-name`

3. `cd` into your new working directory and open up VSX and terminal within VSX
   - opening terminal within VSX: `CNTL + 'backtick'`
   - type into the command line: `npm init -y`

4. install any necesary packages you might need
   - `npm install --save package-name you-can-install multiples-on the-same-command`
      + `react-router-dom`: allows for `<HashRouter>`, `<Provider>`, `<Switch>`, `<Link>`, and `<Route>`
      + `react-redux`: allows us to structure our app with redux
      + `axios`: allows us to communicate with an API
      + `express`: allows us to establish sessions, cookies
      + `cors`:
      + `body-parser`: helps interpret user input, allows us to send `req.body` and gives it to us in `res.body`

5. start structuring! 