# Getting Started with SQL

## Todd's Focus Questions:
- _What does having a “Relational Database” mean?_
- _What does Schema mean?_
- _When do we use the WHERE keyword?_
- _What keywords do we use to modify information in the Database?_

### What is a relational database?
- like an excel sheet
- columns, rows, and keys
- different SQL languages, but we are using postgreSQL

### What is SQL?
- Helps us pull data from and add data to or create tables

### What are schemas?
- blueprint for your database
- instructions for how to set up your table

### How do we use Data Types?
- null: an empty value within a table
- numeric:
    - INTEGER - will return a whole/rounded number
    - DECIMAL - unlimited decimal places!
    - FLOAT - up to 15 digits after the decimal
    - SERIAL - equates to an incrementing integer 
- character:
    - TEXT - unlimited
    - VARCHAR(n) - limited to n characters 

### A SQL statement is a query; semicolons! matter! 

### Selecting Data from a Table
- general syntax

        SELECT ColumnName
        FROM TableName;

 - return "all" from TableName:

        SELECT *
        FROM TableName;

- return multiple columns 

        SELECT Column1, Column2, Column3
        FROM TableName;

- return no repeated values 

        SELECT DISTINCT ColumnName
        FROM TableName;

- return only 1 column, named 'value1'

        SELECT *
        FROM TableName
        WHERE ColumnName='value';

### Adding. Updating, Removing Rows in a Table 
- add multiple values on the same line, separate using (), (), ();

        INSERT INTO TableName (column1, column2)
        VALUES (column1value0, column2value0), (column1value1, column2value1);

- update the table at a specific value 

        UPDATE TableName 
        SET ColumnName = NewName
        WHERE id = idNum;

- delete a specific value at a given id/index 

        DELETE FROM TableName
        WHERE id = idNum;

### What is Massive.js?
`more to come`

### Getting Data from DB using Endpoints 
`more to come`

### Inserting Data to DB using Endpoints 
`more to come`