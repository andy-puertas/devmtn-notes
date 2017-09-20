-- Foreign Keys Review

-- Primary Keys cannot be repeated, but Foreign Keys can! 

-- COMPUTER SCIENCE FUN FACT:
-- Why do we see the number 255 everywhere? 
    -- When we count in binary, 8 bits in a byte 
    -- The largest number we can express with a full byte is 255

-- Setup
CREATE TABLE Customers (
    id SERIAL INTEGER PRIMARY KEY,
    Name VARCHAR(255)
);

INSERT INTO Customers (Name)
VALUES ('Steve'), ('Todd'), ('Tyler');

CREATE TABLE Purchases (
    Customer INTEGER REFERENCES Customers(id),
    PurchaseID SERIAL INTEGER PRIMARY KEY,
    Item VARCHAR(255)
)

INSERT INTO Purchases (Customer, Item)
VALUES (1, 'Supplies'), (1, 'Easel'), (1, 'Paintbrush'), (1, 'Paints');

-- Join is used for display purposes, not table modification
-- The following values are displayed (in order): id, Name, Customer, PurchaseID, Item
SELECT *
FROM Customers
JOIN Purchases ON Purchases.Customer=Customers.id;
