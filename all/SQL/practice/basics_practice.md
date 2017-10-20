## Practicing Basic Concepts

1. Find the average length of all tracks in Milliseconds = 6.043391378818156
- `column: Milliseconds` 
- `table: Track`

        SELECT AVG(length(Milliseconds)) 
        FROM Track;

2. Find the number of invoices in the USA = 91
- `column: billingCountry` 
- `table: invoice`

        SELECT count(Total) 
        FROM Invoice 
        WHERE BillingCountry='USA';

3. Make a list of all the First Names of Customers that contain an 'a'
- `column: FirstName` 
- `table: Customer`

        SELECT *
        FROM Customer
        WHERE FirstName = '%a%';

4. Make a list of the 10 longest tracks
- `column: Milliseconds` 
- `table: Track` 
- `ORDER BY` 
- `LIMIT`

        SELECT *
        FROM Track
        ORDER BY Milliseconds DESC
        LIMIT 10;

5. Make a list of the 20 shortest tracks
- `column: Milliseconds` 
- `table: Track` 
- `ORDER BY` 
- `LIMIT`

        SELECT *
        FROM Track
        ORDER BY Milliseconds ASC
        LIMIT 20;

6. Find all the customers that live in California or Washington
- `table: Customer` 
- `column: State`

        SELECT *
        FROM Customer
        WHERE State = 'CA' OR State = 'WA';

7. Find all the customers that live in California, Washington, Utah, Florida, or Arizona
- `table: Customer` 
- `column: State`

        SELECT *
        FROM Customer
        WHERE State IN ('CA', 'WA', 'UT', 'FL', 'AZ');

8. Insert an artist to the database

        INSERT INTO Artist (Name)
        VALUES ('The Who');

9. Insert yourself as a customer to the database

        INSERT INTO Customer (FirstName, LastName, Company, City, State, PostalCode, Email)
        VALUES ('Kylie', 'Stewart', 'Dev Mountain', 'Phoenix', 'AZ', 85004, 'kaas@me.com');

10. Find a list of all Playlists that start with `Classical` 

        SELECT * 
        FROM Playlist
        WHERE Name LIKE 'Classical%';