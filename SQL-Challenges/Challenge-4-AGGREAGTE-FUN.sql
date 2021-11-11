# Challenge 1

use movie_data;

-- 1. Count the number of actors born after the 1st of January 1970. 
SELECT COUNT(*) FROM actors
WHERE date_of_birth > '1970-01-01';

-- 2. What was the highest and lowest domestic takings for a movie. 
desc movie_revenues;
SELECT MAX(domestic_takings), MIN(domestic_takings) FROM movie_revenues;

-- 3. What is the sum total movie length for movies rated 15?
SELECT SUM(international_takings) FROM MOVIE_REVENUES WHERE international_takings > 15;

-- 4. How many Japanese directors are in the directors table?
select * from directors;
SELECT COUNT(*) FROM directors WHERE nationality like'Japanese';

-- 5. What is the average movie length for Chinese movies?
SELECT AVG(movie_length) FROM movies WHERE movie_lang LIKE 'Chinese';

# Challenge 2
-- 1. How many directors are there per nationality?
SELECT nationality, COUNT(director_id)
FROM directors
GROUP BY nationality
order by nationality;

-- 2. What is the sum total movie length for each age certificcate and movie language combination?
SELECT age_certificate, movie_lang, SUM(movie_length)
FROM movies
GROUP BY age_certificate, movie_lang
ORDER BY movie_lang, age_certificate;

-- 3. Return the movie languages which have a sum total movie length over 500 minutes. 
 SELECT movie_lang, SUM(movie_length) 
 FROM movies
 GROUP BY movie_lang
 HAVING  SUM(movie_length) > 500;
 