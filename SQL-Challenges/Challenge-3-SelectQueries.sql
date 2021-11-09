#CHALLENGE 1

-- 1. Select the movie_name and release_date of every movie. 
SELECT movie_name, release_date FROM movies;

-- 2. Select the first and last names of all American directors. 
SELECT first_name, last_name FROM directors WHERE nationality like 'American';

-- 3. Select all male actors born after the 1st of Janurary 1970. 
desc actors;
SELECT * FROM ACTORS WHERE GENDER = 'M' AND date_of_birth > '1970-01-01';

-- 4. Select the names of all movies which are over 90 minutes long and movie language is Englisj.
desc movies;
SELECT movie_name FROM movies WHERE movie_length > 90 AND movie_lang = 'English';

#CHALLENGE 2

-- 1. Select the movie names and movie language of all movies with a movie language of English, Spanish or Korean. 
desc movies;
SELECT movie_name, movie_lang FROM movies WHERE movie_lang IN ('English', 'Spanish', 'Korean');

-- 2. Select the first and last names of the actors whose last name begins with M and born between 01/01/1940 and 31/12/1980.
desc actors;
SELECT first_name, last_name FROM actors WHERE last_name LIKE 'M%' AND date_of_birth BETWEEN '1940-01-01' AND '1980-12-31';

-- 3. Select the first and last names of the directors with nationality of British, French or German born between 01/01/1950 and 31/12/1980. 
desc directors;
SELECT first_name, last_name FROM directors WHERE nationality IN ('British', 'French', 'German') AND date_of_birth BETWEEN '1950-01-01' AND '1980-12-31';

#CHALLENGE 3

-- 1. Select American directors ordered from oldest to youngest.
SELECT * FROM directors 
WHERE nationality = 'American'
ORDER BY date_of_birth;

-- 2. Return the distinct nationalities from the directors table.
desc directors;
SELECT DISTINCT nationality FROM directors ORDER BY nationality;

-- 3. Return the first names, last names and date of births of the 10 youngest female actors. 
SELECT first_name, last_name, date_of_birth 
FROM actors
WHERE gender = 'F'
ORDER BY date_of_birth DESC
LIMIT 10;

#CHALLENGE 4

-- 1. Return the top 3 movies with the highest international takings. 
SELECT * FROM movie_revenues
ORDER BY international_takings DESC
LIMIT 3;


-- 2. Concatenate the first and last names of the directors, separated by a space, and call this new column full_name. 
SELECT CONCAT_WS(' ', first_name, last_name) AS full_name FROM directors;

-- 3. Return the actors with missing first_names or missing date_of_births. 
SELECT * FROM actors
WHERE first_name IS NULL 
OR date_of_birth IS NULL;