## Todd's Focus Questions:
- _What is a foerign key?_
- _What does an Inner Join do?_
- _What does Aliasing allow you to do?_
- _What character does the Like keyword replace when using Where?_
- _What keyword is used for doing a sub query?_

## Manipulations
### Gathering data about our data

- return total # of names in cities instead of data within the "name"

        SELECT COUNT (name)
        FROM cities;

- return independent values and eliminate all duplicates

        SELECT COUNT (DISTINCT name)
        FROM cities;

- return the single oldest city in the table 

        SELECT MIN(founded), name
        FROM cities;

- return the average city population in our table
- does the math for us

        SELECT avg(Population)
        FROM cities;


## Altering Tables
### How do we alter tables without affecting their values?

- Adding a foreign key to an already existing table

        ALTER TABLE Scores
        ADD COLUMN scoreID
        ADD INTEGER PRIMARY KEY
        ADD FOREIGN KEY this REFERENCES thatTable;

    - All newly added columns and rows are empty by default 

- Changing existing data types

        ALTER DATA Grades
        ALTER Grades
        SET DATA TYPE decimal;

    - this example would change our letter grades to number grades in a table

- Renaming columns

        ALTER TABLE Grades  
        RENAME COLUMN student_name
        TO student_full_name;

    - this would change `student_name` from maybe a single var to the full name 

- Removing columns

        ALTER TABLE employees
        DROP COLUMN bonus;

    - this would eliminate the column of `bonus data` in our `employees` db

- Renaming tables
        
        ALTER TABLE employees
        RENAME TO underlings;


## Foreign Keys
### How we relate our tables to each other

- Must `REFERENCES` a `primary key` in another table
- It's important that it references a primary and not other foreign key

        CREATE TABLE Test (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            subject_id INTEGER REFERENCES users_id
        );

### Joins

- Allows us to join tables together that already utilize foreign keys
    - `INNER JOIN`: selects only rows where there is a match

            SELECT *
            FROM cities 
            INNER JOIN cities ON cities.stateID = states.id;

    - `OUTER JOIN`: joins all rows, with or without a match
        - `LEFT` (first), `RIGHT` (second), or `FULL` (both)

### Filter / Order By / Limit

- Options to organize and filter our results

    - `DISTINCT` - finds duplicates and eliminates them
    - `ORDER BY` - sorts data given a column name in `ASC` or `DESC` order
    - `LIMIT` - we determine the number of results we would like to see
        - important to use `ORDER BY` in addition to `LIMIT` when we want particular values 

### Partial Matches

- Using LIKE we can use wildcard symbols to make our searches more flexible 
    - `%m` - will return matches that end in 'm'
    - `%m%` - will return matches that contain 'm' flanked by text on both sides
    - `m%` - will return matches that begin with 'm'
    - `T_i` - returns all values that successfull fill in the blank

### Aliases
- Sometimes we don't want to type the full var name in longer requests
- Aliases allow us to shorten our SQL query 

        SELECT c.name, c.email, o.id, o.total
        FROM custoemrs AS c, orders AS o
        WHERE c.id = o.c_id;

### Subqueries 
- We can be even more specific in our requests using subqueries 

        SELECT name
        FROM cities 
        WHERE state_id IN (3, 4)
        WHERE statehood > 1800;

    - returns exactly 2 city names 