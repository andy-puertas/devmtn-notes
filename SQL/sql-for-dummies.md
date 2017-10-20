## Super Basic Breakdown of Standard SQL Commands

1. create our database

        `CREATE DATABASE Apple;`

2. create a new table

        CREATE TABLE CEOS (
            name VARCHAR(255),
            year INTEGER
        );

3. add some CEO data to the table we made

        INSERT INTO CEOS
        VALUES 
        ('Steve Jobs', 1976), 
        ('Mike Markkula', 1977),
        ('Mike Scott', 1978),
        ('John Sculley', 1983),
        ('Michael Spindler', 1993),
        ('Gil Amelio', 1996),
        ('Steve Jobs', 1997);

4. show us the values we've input

        SELECT *
        FROM CEOS; 

5. who was an Apple CEO before 1984?

        SELECT name
        FROM CEOS
        WHERE year < 1984;

   - should return 1 column, 4 rows

6. who was an Apple CEO in the 1970s?

        SELECT name
        FROM CEOS 
        WHERE year BETWEEN 1970 and 1979;

   - should return 1 column, 3 rows 

- a `SELECT` can have any number of filtering clauses 
- the first is preceded with a `WHERE` and laters are preceded with an `AND` or an `OR` 
- can involve parentheses, subqueries, and other constructs 

7. what is the name and number of times each person in our table has been a CEO? 

        SELECT name, count(*)
        FROM CEOS GROUP BY name;

   - should return 2 columns, 6 rows
   - imagine `GROUP BY` is forcing the creation of a number of minitables
   - the `count(*)` indicates that all rows should be counted for each name 