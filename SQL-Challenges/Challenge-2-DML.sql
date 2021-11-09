#CHALLENGE 2
USE owners_pets;
SHOW TABLES;

-- 1. Insert the data into the owners table.
INSERT INTO owners (owner_id, first_name, last_name, city, state, email) VALUES 
(1,'Samuel', 'Smith', 'Boston', 'MA', 'samsmith@gmail.com'),
(2,'Emma', 'Johnson', 'Seattle', 'WA', 'emjohnson@gmail.com'),
(3, 'John', 'Oliver', 'New York', 'NY', 'johnoliver@gmail.com'),
(4, 'Olivia', 'Brown', 'San Francisco', 'CA', 'oliviabrown@gmail.com'),
(5, 'Simon', 'Smith', 'Dallas', 'TX', 'sismith@gmail.com');

desc owners;
ALTER TABLE owners MODIFY email VARCHAR(30);
SELECT * FROM owners;

INSERT INTO owners values(7,'','Maxwell', '', 'CA', 'lordmaxwell@gmail.com');

-- 2. Insert the data into the pets table.
INSERT INTO pets VALUES 
(1, 'Dog', 'Rex', 6, 1),
(2, 'Rabbit', 'Fluffy', 2, 5),
(3, 'Cat', 'Tom', 8, 2),
(4, 'Mouse', 'Jerry', 2, 2),
(5, 'Dog', 'Biggles', 4, 1),
(6, 'Tortoise', 'Squirtle', 42, 3);

SELECT * FROM pets;

-- 3. Update Fluppy the rabbits age to 3.
SET SQL_SAFE_UPDATES = 0;
UPDATE pets SET age = 3 where full_name like 'Fluffy';

-- 4. Delete Mr Maxwell from the owners table.
DELETE FROM owners WHERE last_name like 'Maxwell';

SELECT * FROM owners;