# [full-crud](https://github.com/devMountain/sql-massive-node)

## Overview
In this project, we are going to make our first full CRUD back-end that uses a database.

## Step 1
### Summary
In this step, we are going to create a bare-bones server.

### Instructions
* Run `npm init -y`.
* Use npm to install and save `express`, `body-parser`, `cors`, `dotenv` and `massive`.
* Create a `.env` file.
* Create a `.gitignore` to ignore the `node_modules` folder and the `.env` file.
* Create an `index.js` file.
* Require all the packages that we installed and saved.
* Get your server listening on port `3000`.


## Step 2
### Summary
In this step, we are going to add massive to the server so we can connect to a database.

### Instructions
* Open the `.env` file and create a variable called `CONNECTION_STRING` that equals the URI connection string from your Heroku database.
  * Make sure to add `?ssl=true` at end of your connection string.
* Use `massive` and the `CONNECTION_STRING` to establish a connection.
* In the `.then` callback from `massive`, set `db` on app to equal the database instance.


## Step 3
### Summary
In this step, we are going to create our table and the `.sql` files we'll need to preform operations on our data. The schema for our table will look like:
* ProductID - Serial Primary Key
* Name - varchar(40)
* Description - varchar(80)
* Price - integer
* Imageurl - text

### Instructions
* Create a `Products` table in your Heroku database.
* Create a folder called `db`.
  * Create a `create_product.sql` file.
  * Create a `read_products.sql` file.
  * Create a `read_product.sql` file.
  * Create a `update_product.sql` file.
  * Create a `delete_product.sql` file.
* `create_product.sql`:
  * The SQL should be able to add a new product to the `Products` table.
  * The SQL should have four parameters ( Name, Description, Price, ImageUrl ).
* `read_products.sql`:
  * The SQL should be able to return all products from the `Products` table.
* `read_product.sql`:
  * The SQL should be able to returna a specific product from the `Products` table.
  * The SQL should use a parameter to find the product whose `ProductID` matches.
* `update_product.sql`:
  * The SQL should be able to update the description of a specific product from the `Products` table.
  * The SQL should use a parameter to find the product whose `ProductID` matches.
  * The SQL should use a parameter to update the value of the `Description`.
* `delete_product.sql`:
  * The SQL should be able to delete a specific product from the `Products` table.
  * The SQL should use a parameter to find the product whose `ProductID` matches.


## Step 4
### Summary
In this step, we will create a `products_controller.js` file to will handle the logic of interacting with the database.

### Instructions
* Create a `products_controller.js` file.
* Use `module.exports` to export an object with five methods.
  * `create`, `getOne`, `getAll`, `update`, and `delete`.
* Inside of each method, access the database instance.
* Inside of each method, use the correct SQL file.
  * `create` -> `create_product.sql`.
  * `getOne` -> `read_product.sql`.
  * `getAll` -> `read_products.sql`.
  * `update` -> `update_product.sql`.
  * `delete` -> `delete_product.sql`.
* Don't worry about the parameter(s) in this step.
* `create`, `update`, and `delete` should send status 200 on success and status 500 on failure.
* `getOne` should send status 200 and the product on success and status 500 on failure.
* `getAll` should send status 200 and the products on success and status 500 on failure.


## Step 5
### Summary
In this step, we will create endpoints that will call the methods on our controller. We will also require our controller in `index.js`.

### Instructions
* Create the following endpoints: ( `request method`, `url`, `controller method` )
  * `GET` - `/api/products` - `getAll`.
  * `GET` - `/api/product/:id` - `getOne`.
  * `PUT` - `/api/product/:id?desc=...` - `update`.
  * `POST` - `/api/product` - `create`.
  * `DELETE` - `/api/product/:id` - `delete`.


## Step 6
### Summary
In this step, we'll modify the controller to use parameters or the request body.

### Instructions
* Open `products_controller.js`.
* Modify `update` to use `id` from `req.params` and `desc` from `req.query`.
* Modify `getOne` to use `id` from `req.params`.
* Modify `delete` to use `id` from `req.params`.
* Modify the `create` to use `name`, `description`, `price`, and `imageurl` from the request body.


## Step 7
### Summary
In this step, we'll test to make sure all the endpoint are working.

### Instructions
* Import the provided `postman_collection` into postman and make sure all the tests pass.