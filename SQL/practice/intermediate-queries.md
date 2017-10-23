# [Practicing](https://github.com/devmountain/intermediate-sql-queries-afternoon) Higher Level Queries in SQL

## Joins
1. Get all invoices where the `UnitPrice` on the `InvoiceLine` is greater than $0.99.

        SELECT *
        FROM Invoice i
        JOIN InvoiceLine il ON il.invoiceId = i.invoiceId
        WHERE il.UnitPrice > 0.99;

2. Get the `InvoiceDate`, customer `FirstName` and `LastName`, and `Total` from all invoices.

        SELECT i.InvoiceDate,c.FirstName, c.LastName, i.Total
        FROM Invoice i
        JOIN Customer c on i.CustomerId = c.CustomerId;

3. Get the customer `FirstName` and `LastName` and the support rep's `FirstName` and `LastName` from all customers.

        SELECT c.FirstName, c.LastName, e.FirstName, e.LastName
        FROM Customer c
        JOIN Employee e ON c.SupportRepId = e.EmployeeId;

4. Get the album `Title` and the artist `Name` from all albums.

        SELECT al.Title, ar.Name
        FROM Album al
        JOIN Artist ar ON al.ArtistId = ar.ArtistId;

5. Get all PlaylistTrack TrackIDs where the playlist `Name` is Music.

        SELECT pt.TrackId
        FROM PlaylistTrack pt
        JOIN Playlist p ON p.PlaylistId = pt.PlaylistId
        WHERE p.Name = 'Music';

6. Get all Track `Name`s for `PlaylistId` 5.

        SELECT t.Name
        FROM Track t
        JOIN PlaylistTrack pt ON pt.TrackId = t.TrackId
        WHERE pt.PlaylistId = 5;

7. Get all Track `Name`s and the playlist `Name` that they're on. 

        SELECT t.name, p.Name
        FROM Track t
        JOIN PlaylistTrack pt ON t.TrackId = pt.TrackId
        JOIN Playlist p ON pt.PlaylistId = p.PlaylistId;

8. Get all Track `Name`s and Album `Title`s that are the genre `"Alternative"`.

        SELECT t.Name, a.title
        FROM Track t
        JOIN Album a ON t.AlbumId = a.AlbumId
        JOIN Genre g ON g.GenreId = t.GenreId
        WHERE g.Name = "Alternative";

## Nested Queries 
1. Get all invoices where the `UnitPrice` on the `InvoiceLine` is greater than $0.99.

        SELECT *
        FROM Invoice
        WHERE InvoiceId IN ( SELECT InvoiceId FROM InvoiceLine WHERE UnitPrice > 0.99 );

2. Get all Playlist Tracks where the playlist name is Music.

        SELECT *
        FROM PlaylistTrack
        WHERE PlaylistId = ( SELECT PlaylistId FROM Playlist WHERE Name = "Music" );

3. Get all Track names for `PlaylistId` 5.

        SELECT Name
        FROM Track
        WHERE TrackId IN ( SELECT TrackId FROM PlaylistTrack WHERE PlaylistId = 5 );

4. Get all tracks where the `Genre` is Comedy.

        SELECT *
        FROM Track
        WHERE GenreId IN ( SELECT GenreId FROM Genre WHERE Name = "Comedy" );

5. Get all tracks where the `Album` is Fireball.

        SELECT *
        FROM Track
        WHERE AlbumId IN ( SELECT AlbumId FROM Album WHERE Title = "Fireball" );

6. Get all tracks for the artist Queen.

        SELECT *
        FROM Track
        WHERE AlbumId IN ( 
        SELECT AlbumId FROM Album WHERE ArtistId IN ( 
            SELECT ArtistId FROM Artist WHERE Name = "Queen" 
            )
        ); 

## Updating Rows
1. Find all customers with fax numbers and set those numbers to `null`. 

        UPDATE Customer
        SET Fax = null
        WHERE Fax IS NOT null;

2. Find all customers with no company(`null`) and set their company to `"Self"`.

        UPDATE Customer
        SET Company = "Self"
        WHERE Company IS null;

3. Find the customer `Julia Barnett` and change her last name to `Thompson`.

        UPDATE Customer 
        SET LastName = "Thompson" 
        WHERE FirstName = "Julia" AND LastName = "Barnett";

4. Find the customer with the email `luisrojas@yahoo.cl` and change his support rep to `4`.

        UPDATE Customer
        SET SupportRepId = 4
        WHERE Email = "luisrojas@yahoo.cl";

5. Find all tracks that are the genre `Metal` and have no composer. Set the composer to `"The darkness around us"`.

        UPDATE Track
        SET Composer = "The darkness around us"
        WHERE GenreId = ( SELECT GenreId FROM Genre WHERE Name = "Metal" )
        AND Composer IS null;


## Group By
1. Find a count of how many tracks there are per genre. Display the genre name with the count.

        SELECT Count(*), g.Name
        FROM Track t
        JOIN Genre g ON t.GenreId = g.GenreId
        GROUP BY g.Name;

2. Find a count of how many tracks are the `"Pop"` genre and how many tracks are the `"Rock"` genre.

        SELECT Count(*), g.Name
        FROM Track t
        JOIN Genre g ON g.GenreId = t.GenreId
        WHERE g.Name = 'Pop' OR g.Name = 'Rock'
        GROUP BY g.Name;

3. Find a list of all artists and how many albums they have.

        SELECT ar.Name, Count(*)
        FROM Artist ar
        JOIN Album al ON ar.ArtistId = al.ArtistId
        GROUP BY al.ArtistId;

## Use Distinct
1. From the `Track` table, find a unique list of all `Composer`s. 

        SELECT DISTINCT Composer
        FROM Track;

2. From the `Invoice` table, find a unique list of all `BillingPostalCode`s.

        SELECT DISTINCT BillingPostalCode
        FROM Invoice;

3. From the `Customer` table, find a uni1ue list of all `Company`s. 

        SELECT DISTINCT Company
        FROM Customer;

## Delete Rows
1. Delete all `"bronze"` entries from the table.

        DELETE 
        FROM practice_delete 
        WHERE Type = "bronze";

2. Delete all `"silver"` entries from the table.

        DELETE 
        FROM practice_delete 
        WHERE Type = "silver";

3. Delete all entries whose value is equal to `150`.

        DELETE 
        FROM practice_delete 
        WHERE Value = 150;