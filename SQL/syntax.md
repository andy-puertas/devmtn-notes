
[SELECT] <column name> 
[FROM] <table name> 
[WHERE] <value name>;

##############################
### Important SQL Commands ### 
##############################

* SELECT - extracts data from a database
    + SELECT DISTINCT - used to return only certain distinct values, removing duplicates
    +   SELECT DISTINCT column1, column2, …  
        FROM table-name;
    + For example…
        + SELECT DISTINCT Country FROM Customers;
* UPDATE - updates data in a database
* DELETE - deletes data from a database
* INSERT INTO - inserts new data into a database
* CREATE DATABASE / CREATE DB - creates a new database
* ALTER DATABASE / ALTER DB - modifies a database
* CREATE TABLE - creates a new table
* ALTER TABLE - modifies a table
* DROP TABLE - deletes a table
* CREATE INDEX - creates an index (search key)
* DROP INDEX - deletes an index

+ <column name>, <column name> is proper syntax to refer to multiple columns in SQL
+ “*" translates to “all” <column name> in SQL statements 

### WHERE
- Used to filter records. Extracts only records of a certain condition
        SELECT column1, column2 
        FROM table-name 
        WHERE condition;
* Operators within the WHERE clause: 
    * = : Equal
    * <> : Not equal
    * > : Greater than
    * < : Less than
    * >= : Greater than or equal to
    * <= : Less than or equal to
    * BETWEEN : Between an inclusive range
    * LIKE : Search for a pattern
    * IN : Specify multiple possible values for a column
* For example... 
        SELECT * 
        FROM Customers 
        WHERE Country=‘Mexico’;

### AND, OR, NOT 
- Used to specify when there is more than one condition
        SELECT column1 
        FROM table-name 
        WHERE condition1 AND condition2 AND condition3;

        SELECT column1 
        FROM table-name 
        WHERE condition1 OR condition2 OR condition3;

        SELECT column1 
        FROM table-name 
        WHERE NOT condition;
* Operators can be combined:
    * For example…
            SELECT * 
            FROM Customers 
            WHERE Country='Germany' AND (City='Berlin' OR City='München’);
        * The above statement selects all fields from “Customers” where country is “Germany” AND city must be “Berlin” OR “München"

### ORDER BY 
- Used to sort the result-set in ascending or descending order
        SELECT column1, column2, … 
        FROM table-name
        ORDER BY column1, column2, … ASC|DESC;
* Operators can be combined:
    * For example…
            SELECT * 
            FROM Customers 
            ORDER BY Country ASC, CustomerName DESC;
        * The above statement selects all customers from the “Customers” table, sorted ascending by the “Country” and descending by the “CustomerName” column

### LIKE 
- Used to search for a specified pattern in a column
        SELECT column1, column2, ...
        FROM table-name
        WHERE columnN LIKE pattern;
* Operators within the LIKE clause:
    * WHERE CustomerName LIKE ‘a%’ : Finds any values that start with “a”
    * WHERE CustomerName LIKE ‘%a’ : Finds any values that ends with “a”
    * WHERE CustomerName LIKE ‘%or%’ : Finds any values that have “or” in any position
    * WHERE CustomerName LIKE ‘_r%’ : Finds any values that have “r” in the second position
    * WHERE CustomerName LIKE ‘a_%_%’ : Finds any values that start with “a” and are at least 3 characters in length
    * WHERE ContactName LIKE ‘a%o’ : Finds any values that start with “a” and end with “o"

### INSERT INTO 
- Used to insert new records in a table
        INSERT INTO table-name (column1, column2, …) 
        VALUES (value1, value2, value3, …)
* For example…
            INSERT INTO Customers (CustomerName, City, Country) 
            VALUES (‘Cardinal’, ’Stavenger’, ’Norway’);
    * The above statement will insert a new record, but only insert data in the “CustomerName”, “City”, and “Country” columns (CustomerID will be updated automatically)

### UPDATE 
- Used to modify existing records in a table
        UPDATE table-name 
        SET column1 = value1, column2 = value2, … 
        WHERE condition;
* For example…
            UPDATE Customers 
            SET ContactName = ‘Alfred Schmidt’, City = ‘Frankfurt' 
            WHERE CustomerID = 1;
    * The above statement updates the first customer (CustomerID = 1) with a new contact person and a new city

### DELETE 
- Used to delete existing records in a table
        DELETE FROM table-name
        WHERE condition;
* For example…
            DELETE FROM Customers 
            WHERE CustomerName = ’Stacys Mom';
    * The above statement deletes the customer “Stacys Mom” from the “Customers” table
