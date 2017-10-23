# Getting started with Node

## Todd's Focus Questions:
- _What do we use NPM for?_
    <details>
    <summary> <code> answer </code> </summary>
    </details>
- _How are package.json files useful?_
    <details>
    <summary> <code> answer </code> </summary>
    </details>
- _What is a client? What is a server? Explain the data flow between them._
    <details>
    <summary> <code> answer </code> </summary>
    </details>
- _In the simplest terms, what does Node allow us to do?_
    <details>
    <summary> <code> answer </code> </summary>
    </details>
- _What is an Endpoint?_
    <details>
    <summary> <code> answer </code> </summary>
    </details>
- _What is a URL Parameter?_
    <details>
    <summary> <code> answer </code> </summary>
    </details>

## What is npm? 
- npm comes from node modules, so no `./` necessary as prefix
- **N**ode **P**ackage **M**anager
- commonly used tool on the command line

- `npm install`: 
    - installs to `node_modules` folder. Accessed when we import React
    - you can install multiple packages in the same command
    - to make sure we can access these files later, `--save [folder name]` 
        + (opens `package.json` and adds folders to dependencies so that we don’t have to upload & save to GitHub each time)    
    - `.gitignore`: a file where you list anything you want GitHub to ignore 
        - must be created before you git commit
    - `-g`: creates a global tool (to be used on the command line) for your `create-react-app`, `live-server`, etc.

- `package.json`:
    - file helps remember important information without publishing the individual elements to GitHub
                
- `yarn`:
    - takes less time to install  
    - includes both npm and bower
    - `yarn install` (equivalence to npm install)

## Working with node.js...
+ instead of 
  ```
    import { this }  from ‘destination’ 
  ```
    ... or ...
  ```
    const this = ‘destination' 
  ```
    ... we use ...
  ```
    var this = require(‘destination’)
  ```
- blame legacy code for this

- `req.body === res.data`