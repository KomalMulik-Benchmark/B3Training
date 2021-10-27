// Coding Challenge 2

/*
Use the BMI example from Challenge 1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI.The message can be either "Mark's BMI is higher than John's" or "John's BMI is higher than Mark's".
2. Use a template string to include the BMI values is the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)"
*/

console.log("Coding Challenge 2");

let marksWeight = 78, marksHeight = 1.69;
let johnsWeight = 92, johnsHeight = 1.95;

let marksBMI = marksWeight / marksHeight ** 2;
let johnsBMI = johnsWeight / johnsHeight ** 2;

if (marksBMI > johnsBMI) {
    console.log("Mark's BMI is higher than John's");
}
else {
    console.log("John's BMI is higher than Mark's");
}


marksWeight = 95, marksHeight = 1.88;
johnsWeight = 85, johnsHeight = 1.76;

marksBMI = marksWeight / marksHeight ** 2;
johnsBMI = johnsWeight / johnsHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's ${johnsBMI}`);
}
else {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);
}

