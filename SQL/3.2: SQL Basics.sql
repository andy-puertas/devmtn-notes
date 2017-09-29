-- What is a relational database?
    -- like an excel sheet
    -- columns, rows, and keys
    -- different SQL languages, but we are using postgreSQL

-- What is SQL?
    -- Helps us pull data from and add data to or create tables

-- Schemas
    -- blueprint for your database
    -- instructions for how to set up your table

-- Data Types 
    -- null: an empty value within a table
    -- numeric:
        -- INTEGER - will return a whole/rounded number
        -- DECIMAL - unlimited decimal places!
        -- FLOAT - up to 15 digits after the decimal
        -- SERIAL - equates to an incrementing integer 
    -- character:
        -- TEXT - unlimited
        -- VARCHAR(n) - limited to n characters 

-- An SQL statement is a query; semicolons! matter! 

-- Selects
    -- general syntax
    SELECT ColumnName
    FROM TableName;

    -- return "all" from TableName:
    SELECT *
    FROM TableName;

    -- return multiple columns 
    SELECT Column1, Column2, Column3
    FROM TableName;

    -- return no repeated values 
    SELECT DISTINCT ColumnName
    FROM TableName;

    -- return only 1 column, named 'value1'
    SELECT *
    FROM TableName
    WHERE ColumnName='value';

-- Adding. Updating, Removing Rows in a Table 
    -- add multiple values on the same line, separate using (), (), ();
    INSERT INTO TableName (column1, column2)
    VALUES (column1value0, column2value0), (column1value1, column2value1);
    -- 
    UPDATE TableName 
    SET ColumnName = NewName
    WHERE id = idNum;

    -- delete a specific value at a given id/index 
    DELETE FROM TableName
    WHERE id = idNum;

-- What is Massive.js?
-- Getting Data from DB using Endpoints 
-- Inserting Data to DB using Endpoints 