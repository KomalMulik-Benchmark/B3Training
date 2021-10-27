// Coding Challenge 1

/* 
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / height * height)
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs using the formula 
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test Data 1: Mark's weight = 78kg height = 1.69m
             John weight = 92kg height = 1.95m

Test Data 2: Mark's weight = 95kg height = 1.88m
             John weight = 85kg height = 1.76m
*/

console.log("Coding Challenge 1");
let markWeight = 78, markHeight = 1.69;
let johnWeight = 92, johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

markWeight = 95, markHeight = 1.88;
johnWeight = 85, johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
