-- Lists all the cities of California that can be found in the Database hbtn_0d_usa
-- Lists all rows of a column in a Database
SELECT id, name FROM cities WHERE state_id = (SELECT id FROM states WHERE name = 'California') ORDER BY id ASC;
