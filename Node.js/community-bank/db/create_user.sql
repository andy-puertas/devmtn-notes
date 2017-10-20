INSERT INTO users 
(user_name, email, img, auth_id)
VALUES
($1, $2, $3, $4)
    -- we don't yet know the values that will be input 
    -- but we expect to receive them in our Auth0Strategy method 
RETURNING *;
    -- returns all columns of whatever was just inserted 
    -- stands in for SELECT * FROM users WHERE id=$1; 
    -- allows us to see the direct affect of our code