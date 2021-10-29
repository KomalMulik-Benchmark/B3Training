// Section 7 - Coding Challenge #1

/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attachh a click event handler.
2. In the handler function, restore initial values of the score and number variables.
3. Restore the Initial conditions of the message, number, score and guess input field.
4. Also restore the original background color (#222) and number width (15 rem)
*/

"use strict";

function display(msg){
    document.querySelector('.message').textContent = msg;
}

const winNumber = Math.trunc(Math.random()*20)+1;     
console.log(winNumber);
let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);

    document.querySelector('.check').addEventListener('click', function(){
        const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        display('💥Please Enter Number');
    }else if (guess === winNumber) {
        display('🎉You win the game🎁');
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = '🎊🎊   ' + winNumber + '    🎊🎊';
        document.querySelector('.number').style.width = '100rem';
        
        if(score > highscore){
            document.querySelector('.highscore').textContent = score;
        }
    }else if(guess != winNumber){
            if(score > 1){ 
                if (guess > winNumber) {
                    display('📈Guess is too high');
                    score--;
                    document.querySelector('.score').textContent = score;

                }else if (guess < winNumber) {
                     display('📉Guess is too low');
                    score--;
                    document.querySelector('.score').textContent = score;
                }
            }else {
                 display('💢You Lost the game');
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = 'red';
                 document.querySelector('.number').style.width = '40rem';
            }
            
   }

   });

    document.querySelector('.again').addEventListener('click', function(){
        score = 20;
        display('Start guessing...');
        document.querySelector('.score').textContent = '20';
        document.querySelector('.number').textContent = '?';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    });
