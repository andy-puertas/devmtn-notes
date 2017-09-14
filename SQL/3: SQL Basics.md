## What is a relational database?
- like an excel sheet
- columns, rows, and keys
- different SQL languages
    - we are using postgreSQL

## Schemas
- blueprint for your database
- instructions for how to set up your table

CREATE TABLE <table name> (
    <column name> <data type> [<constraint>],
    <column name> <data type> [<constraint>] ...
);

## Datatypes
- Null: an empty value within a table
- Numeric
    + INTEGER -- will return a whole/rounded number
    + DECIMAL -- unlimited decimal places! 
    + FLOAT -- up to 15 digits after the decimal
    + SERIAL -- equates to an incrementing integer
- Character 
    + TEXT -- unlimited
    + VARCHAR(n) -- limited to n characters 

## SQL Statement
- AKA Query
- Semicolons matter! 

## SELECTS
SELECT <column name> FROM <table name>;
SELECT * FROM <table name>; -- returns "all" from "table name"
SELECT <column name, column name, column name> FROM <table name>; -- multiple column returns
SELECT DISTINCT <column name> -- returns no repeats (think of US State example)
SELECT * FROM <table name> WHERE <column name = 'value'> -- single quotes are important! value = column name condition
SELECT * FROM <table name> WHERE <section name> IN('value1', 'value2');

## Adding, Updating, Removing Rows in a Table 
- INSERT INTO
    (<column names...>)
    VALUES
    (<values matching the column order>);
- UPDATE <table name>
    SET <column name> = <new value>
    WHERE id = <id number>
- DELETE FROM <table name>
    WHERE id = <id number>
        + DO NOT FORGET WHERE CLAUSE