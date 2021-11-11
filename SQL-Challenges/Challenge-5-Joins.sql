# Challenge 1

use movie_data;

-- INNER JOIN
-- 1. Select the directors first and last names, the movie names and release dates for all Chinese, Korean and Japanese movies. 
SELECT d.first_name, d.last_name, m.movie_name, m.release_date
FROM directors d INNER JOIN movies m
ON m.director_id = d.director_id
WHERE m.movie_lang IN ('Chinese', 'Korean','Japanese');

-- 2. Select the movie names, release dates and international takings of all English language movies. 
SELECT m.movie_name, m.release_date, mr.international_takings 
FROM movies m
JOIN movie_revenues mr
ON m.movie_id = mr.movie_id
WHERE m.movie_lang = 'English'
ORDER BY mr.international_takings;

-- 3. Select the movie names, domestic takings and international takings for all movies with either missing domestic takings or missing international takings
-- and order the results by movie name.  
SELECT m.movie_name, mr.domestic_takings, mr.international_takings
FROM movies m JOIN movie_revenues mr
USING(movie_id)
WHERE mr.domestic_takings IS null OR mr.international_takings IS NULL 
ORDER BY m.movie_name;


# Challenge 2 

-- 1. Use a left join to select the first and last names of all British directors and the names and age certifictes of the movies that they directed. 
SELECT d.first_name, d.last_name, m.movie_name, m.age_certificate
FROM directors d LEFT JOIN movies m
ON d.director_id = m.director_id
where d.nationality = 'British';

-- 2. Count the number of movies that each director has directed.
SELECT COUNT(m.movie_id)
FROM directors d JOIN movies m
ON d.director_id = m.director_id
GROUP BY (d.director_id);

# Challenge 3 - Joining multiple tables

-- 1. Select the firt and last names of all the actors who have starred in movies directed by Wes Anderson.alter
SELECT ac.first_name, ac.last_name, m.movie_name, d.first_name, d.last_name FROM actors ac 
JOIN movies_actors ma ON ma.actor_id = ac.actor_id
JOIN movies m ON m.movie_id = ma.movie_id
JOIN directors d ON d.director_id = m.director_id
WHERE d.first_name = 'Wes'
AND d.last_name = 'Anderson';

-- 2. Which director has the highest total domestic takings. 
SELECT d.first_name, d.last_name, SUM(mr.domestic_takings) AS total_domestic_takings
FROM directors d JOIN movies m ON m.director_id = d.director_id
JOIN movie_revenues mr ON m.movie_id = mr.movie_id 
WHERE mr.domestic_takings IS NOT null
GROUP BY d.director_id
ORDER BY total_domestic_takings;

# Challenge 4 - UNION, UNION ALL

-- 1. Select the first names, last names and date of birth from directors and actors. Order the results by the date of birth. 
SELECT first_name, last_name, date_of_birth FROM directors
UNION
SELECT first_name, last_name, date_of_birth FROM actors
ORDER BY date_of_birth;

-- 2. Select the first and last names of all directors and actors born in the 1960s. Order the results by last name. 
SELECT first_name, last_name FROM directors
WHERE date_of_birth BETWEEN '1960-01-01'AND '1969-12-31'
UNION ALL
SELECT first_name, last_name FROM actors
WHERE date_of_birth BETWEEN '1960-01-01'AND '1969-12-31'
ORDER BY last_name;

# Challenge 5 - INTERSECT, EXCEPT

-- 1. Intersect the first name, last name and date of birth columns in the directors and actors tables. 
SELECT first_name, last_name, date_of_birth FROM directors
INTERSECT
SELECT first_name, last_name, date_of_birth FROM actors;

-- 2. Retrieve the first names of male actors unless they have the same first name as any British directors. 
SELECT first_name FROM actors
WHERE gender = 'M'
EXCEPT
SELECT first_name FROM directors
WHERE nationality = 'British';

-- OR

SELECT first_name FROM actors
WHERE gender = 'M'
AND first_name NOT IN(
SELECT first_name FROM directors
WHERE nationality = 'British');
