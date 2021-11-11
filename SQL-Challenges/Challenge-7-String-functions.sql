# Challenge 1

-- 1. Select the directors first and last names and movie names in upper case.
SELECT upper(d.first_name), UPPER(d.last_name), UPPER(m.movie_name) 
FROM directors d JOIN movies m ON d.director_id = m.movie_id; 

-- 2. Select the first and last names, in initial capitalisation format, of all the actors who have starred in a Chinese or Korean movie.
SELECT INITCAP(a.first_name), INITCAP(last_name) FROM actors a 
WHERE a.actor_id IN (SELECT ac.actor_id FROM movies_actors ac
JOIN movies m ON ac.movie_id = m.movie_id
WHERE m.movie_lang IN ('Chinese','Korean'));


-- 3. Retrieve the reversed first and last names of each directors and the first three characters of their nationality.
SELECT REVERSE(first_name), REVERSE(last_name), LEFT(nationality, 3) FROM directors;

-- 4. Retrieve the initials of each director and display it in one column named 'initials'.
SELECT CONCAT(LEFT(first_name, 1), LEFT(last_name,1)) AS initials FROM directors;

# Challenge 2

-- 1. Use the substring function to retrieve the first 6 characters of each movie name and the year they released. 
SELECT SUBSTRING(movie_name, 1, 6), substring(release_date, 1,4) AS Year FROM movies; 

-- 2. Retrieve the first name initial and last name of every actor born in May.
SELECT CONCAT_WS('.', LEFT(first_name, 1), last_name) FROM actors
WHERE SPLIT_PART(date_of_birth::TEXT, '-', 2) = '05';

-- 3. Replace the movie language for all English language movies, with age certificate rating 18, to 'Eng'
SELECT REPLACE(movie_lang, 'English', 'Eng') FROM movies WHERE age_certificate = 18;
