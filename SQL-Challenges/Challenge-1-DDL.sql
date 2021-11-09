#Challenge 1
-- 1.Create a new database called owners_pets.
CREATE DATABASE  owners_pets;
USE owners_pets;

-- 2. Crete the owners table with id, first name, last name, city, state.
CREATE TABLE owners(
	owner_id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    city VARCHAR(30),
    state CHAR(2)
);

-- 3. Create the pets table (with a foreign key) contains id, species, full_name, age, owner_id. 
CREATE TABLE pets(
	pet_id INT PRIMARY KEY,
    species VARCHAR(30),
    full_name VARCHAR(30),
    age INT,
    owner_id INT REFERENCES owners (owner_id)
);

-- 4. Add an email column to the owners table.
ALTER TABLE owners ADD COLUMN email VARCHAR(20) UNIQUE;

-- 5. Change the data type of the last_name column in the owners table to VARCHAR(50).
ALTER TABLE owners MODIFY last_name VARCHAR(50);

desc owners;