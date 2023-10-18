-- Lists all cities contained in the Database hbtn_0d_usa
-- Lists all rows of a particular column in a Database
SELECT cities.id, cities.name, states.name FROM cities LEFT JOIN states ON states.id = cities.state_id ORDER BY cities.id;
