CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(180),
    email VARCHAR(180),
    img TEXT, -- we don't know how long the img URLs are going to be so no reason to cap the length with VARCHAR 
    auth_id TEXT -- could be returning as a string, combo of numbers and letters 
);

-- now go input this to SQL tabs 
-- SELECT * FROM Users to make sure it worked

