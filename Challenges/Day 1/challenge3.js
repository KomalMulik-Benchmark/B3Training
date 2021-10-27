// Coding Challenge 3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

console.log("Coding Challenge 3");

const dolphinsScore1 = Number(prompt("Enter first score of dolphin:"));
const dolphinsScore2 = Number(prompt("Enter second score of dolphin:"));
const dolphinsScore3 = Number(prompt("Enter third score of dolphin:"));

const avgDolphine = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

const koalasScore1 = Number(prompt("Enter first score of koalas:"));
const koalasScore2 = Number(prompt("Enter second score of koalas:"));
const koalasScore3 = Number(prompt("Enter third score of koalas:"));

const avgKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

if (avgDolphine > avgKoalas && avgDolphine >= 100) {
    console.log("🎉🎉Dolphine is winner with score ", avgDolphine);
} else if (avgKoalas > avgDolphine && avgKoalas >= 100) {
    console.log("🎉🎉Koalas is winner with score ", avgKoalas);
} else {
    console.log("⌛The match is draw⌛");
}
