--Weather Observation Station 8

--Query the list of CITY names from STATION which have vowels (i.e., a, e, i, o, and u) as both their first and last characters. Your result cannot contain duplicates.

/*
Enter your query here.
*/
SELECT DISTINCT CITY FROM STATION
WHERE CITY REGEXP '^[aeiou]' AND CITY REGEXP '[aeiou]$';