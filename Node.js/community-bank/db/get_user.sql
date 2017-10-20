SELECT *
FROM users 
WHERE auth_id = $1; 

-- making sure the user logging in doesn't already exist in our system
-- auth_id is the most specific means to ensure no duplicates 