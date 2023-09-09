'use strict';
let secretnumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highestscore =0;
document.querySelector('.check').addEventListener('click' , function () {
   const guess =  Number(document.querySelector('.guess').value);

    const displaymessage = function (message) {
        document.querySelector('.message').textContent = message;
    }
   //when there is no input

   if (!guess) {

    displaymessage('😢No number');

   } 

   //when player wins
   else if(guess === secretnumber){
    
    displaymessage('🎉💥Correct Number🎉💥');
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highestscore) {
        highestscore = score;
        document.querySelector('.highscore').textContent=highestscore;
    }

   }

   // when guess number is too high

   else if(guess > secretnumber){
    if (score > 1) {
        displaymessage('Too high');
        score--;
        document.querySelector('.score').textContent=score;
    } else {
        displaymessage('💥 You lost the game');
        document.querySelector('.score').textContent=0;
    }
   }

   //when guess number is too low

   else if(guess < secretnumber){
    if (score > 1) {
        displaymessage('Too Low');
        score--;
        document.querySelector('.score').textContent=score;
    } else {
        displaymessage('💥 You lost the game');
        document.querySelector('.score').textContent=0;
    }
   }

   document.querySelector('.again').addEventListener('click' , function() {
    score=20;
    secretnumber = Math.trunc(Math.random()*20)+1;
    displaymessage('start guessing');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent=' ? ';
    document.querySelector('.guess').value=' ';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
})
})

// reset the game 

