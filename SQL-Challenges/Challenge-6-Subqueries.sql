# Challenge 1

-- 1. Select the first and last names of all the actors older than Marlon Brando. 
SELECT first_name, last_name FROM actors 
WHERE date_of_birth < (SELECT date_of_birth FROM actors 
WHERE first_name = 'Marlon' AND last_name = 'Brando');

-- 2. Select the movie names of all movies that have domestic takings above 300 million. 
SELECT movie_name FROM movies 
WHERE movie_id IN (SELECT movie_id FROM movie_revenues 
WHERE domestic_takings > 300);

-- 3. Return the shortest and longest movie length for movies with an above average domestic takings. 
SELECT min(movie_length), max(movie_length) FROM movies 
WHERE movie_id IN (SELECT movie_id FROM movie_revenues 
WHERE domestic_takings > (SELECT AVG(domestic_takings) FROM movie_revenues));

# Challenge 2

-- 1. Select the first name, last name, and date of birth for the oldest actors of each gender.
SELECT a1.first_name, a1.last_name, a1.date_of_birth FROM actors a1 
where a1.date_of_birth = (select MIN(date_of_birth) from actors a2
where a1.gender = a2.gender);  

-- 2. Select the movie name, movie length and age certificate for movies with an above average length for their age certificate.
SELECT m1.movie_name, m1.movie_length, m1.age_certificate FROM movies m1
WHERE m1.movie_length > (SELECT AVG(m2.movie_length) FROM movies m2 WHERE m1.age_certificate = m2.age_certificate);
