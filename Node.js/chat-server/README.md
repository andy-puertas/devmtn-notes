# [`node-chat`](https://github.com/DevMountain/node-chat)
# Project Summary

In this project, we will create a local node chat server. After building out the server, we'll use postman unit tests to make sure the API has been built out correctly and also use a pre-built front-end to interact with the API.

<img src="https://github.com/DevMountain/node-chat/blob/solution/readme-assets/1.png" />

## Step 1
### Summary
In this step, we will create a `package.json` and install our dependencies.

### Instructions
* In the root of the project, create a `package.json` file.
* Using npm, install and save `express` and `body-parser` to the `package.json`.


## Step 2
### Summary
In this step, we will create a `.gitignore` file so our `node_modules` folder doesn't get tracked.

### Instructions
* Create a `.gitignore` file in the root of the project.
* Add `node_modules` to the file.


## Step 3
### Summary
In this step, we will create our `index.js` file.

### Instructions
* Open `server/index.js`.
* Require `express` and `body-parser`.
* Create an express app.
* Configure the app to parse JSON from the body.
* Configure the app to listen on port 3000 and display a message when it is listening.



## Step 4
### Summary
In this step, we will create a controller that will handle the logic to create, read, update, and delete messages. A message will be an object with an `id`, `text`, and `time` property. 

### Instructions
* Create a `controllers` folder in `server/`.
* Create a `messages_controller` in `server/controllers/`.
* Open `server/controllers/messages_controller.js`.
* Create an array to hold the messages.
* Create a variable that will keep track of what `id` to assign to messages.
  * The `id` should start at `0` and increment after every creation.
* Export an object with methods to create, read, update, and delete messages.
  * Create - Should be able to create a message using `text` and `time` off of the request body.
    * Should be able to assign a unique `id` to the message.
  * Read - Should be able to return the messages array.
  * Update - Should be able to update the `text` property of a message using the request body.
    * Should be able to determine which message to update using an `id` url parameter.
  * Delete - Should be able to delete a message using an `id` url parameter.
* All methods should send a response of the updated messages array.


## Step 5
### Summary
In this step, we will hook up our controller to our app in `server/index.js`.

### Instructions
* Open `server/index.js`.
* Require the messages controller.
* Create a `post`, `get`, `put`, and `delete` endpoint that use the corressponding method on the messages controller.
* The url for this api should be `/api/messages`.
  * Remember to add on a url parameter of `id` for the methods that are using it.


## Step 6
### Summary
In this step, we will test the API endpoints using postman unit tests.

### Instructions
* Startup the API and make sure it doesn't crash.
* Open postman.
* Import the `postman_collection` into postman.
* Run the collection's tests.
  * If all tests do not pass, revist previous steps.
  * Tests will only pass if the `messages` array is empty when the postman collection starts.


## Step 7
### Summary
In this step, we will setup the API to serve our front-end files.

### Instructions
* Open `server/index.js`.
* Use `express.static` to serve the `public/build` folder.
  * Restart the API or Start the API.
* Open `http://localhost:3000/` to see the front-end interact with the API.


## Black Diamond
* Modify the chat api to include a display name for each message.
* Host the chat api.
* Modify the `create-react-app` front-end to hit the hosted chat api instead.
* See if you can chat with your classmates.