let bopItSuccess;
let twistItSuccess;
let pullItSuccess;

let bopItToggle = false;
let twistItToggle = false;
let pullItToggle = false;

let gameLevel = 1
let globalResetTimer = .05

let globalLevelTimer = 200
let globalLevelTimerPull = 350
let globalLevelProgression = 10

let bopItInstructionToggle = true
let twistItInstructionToggle = true
let pullItInstructionToggle = true

document.addEventListener('DOMContentLoaded', function(event) {

  // DOM Element Variables //
  const bopit = document.getElementsByClassName('bopit')[0]
  const bopitBox = document.getElementById('box')
  const scrollBar = document.getElementById('scrollbar')
  const startButton = document.getElementById('start')
  const highscoreButton = document.getElementById('highscore')
  const inputContainer = document.getElementById("input-container")
  const inputField = document.getElementById('input-field')
  const inputFieldButton = document.getElementById('input-field-button')

  // Event Listeners
  startButton.addEventListener('click', introDance)
  inputField.addEventListener('keyup', pullLog)
  bopitBox.addEventListener('click', bopLog);
  scrollBar.addEventListener('scroll', twistLog);
  highscoreButton.addEventListener('click', highScore)

  // Event Listener Callbacks
  function bopLog() {
    if (bopItToggle === true) {
      bopItToggle = false;
      bopItSuccess = true;
    }
  }

  function twistLog() {
    if (twistItToggle === true) {
      twistItToggle = false;
      twistItSuccess = true;
    }
  }

  function pullLog() {
    if (pullItToggle === true) {
      if (inputField.value === 'pull') {
      pullItSuccess = true;
      inputField.value = '';
      pullItToggle = false;
      }
    }
  }


})



//Timers//

function bopItTimerFunction() {
  console.log('BOP IT!')
  document.getElementsByTagName('h2')[0].innerHTML = "Bop It!"

  let count = globalLevelTimer;

  let counter = setInterval(timer, 10); //10 will run it every 100th of a second

  globalLevelTimer -= globalLevelProgression
  globalLevelTimerPull -= globalLevelProgression

  if (bopItInstructionToggle === true) {
    document.getElementById('instructions').style.display = 'block';
    document.getElementById('instructions').innerHTML = "Press the purple Bop It button!"
  }
  bopItInstructionToggle = false

  bopItToggle = true;

  function timer() {

    if (count <= 0) // If time expires end the game
    {
      bopItToggle = false;
      clearInterval(counter);
      console.log('Game over!');
      document.getElementsByTagName('h2')[0].style.color = "red"
      document.getElementsByTagName('h2')[0].style.left = "300px"
      document.getElementsByTagName('h2')[0].innerHTML = "Awww Game Over!"
      document.getElementById('instructions').style.display = 'none';
      document.getElementById('input-field').style.display = 'none';
      document.getElementById('highscore-form').style.display = 'block';
      return;
    }

    else if (bopItSuccess === true) { // If BopIt was successful keep playing
      bopItToggle = false;
      console.log('success!');
      clearInterval(counter);
      bopItSuccess = false;
      document.getElementById('instructions').innerHTML = '';
      document.getElementById('instructions').style.display = 'none';
      increaseScore();
      bopItLevelReset();
    }
    count--;

    document.getElementById("timer").innerHTML=count /100;

  }

}

function twistItTimerFunction() {
  console.log('TWIST IT!')
  document.getElementsByTagName('h2')[0].innerHTML = "Twist It!"
  let count = 200;

  let counter = setInterval(timer, 10); //10 will  run it every 100th of a second

  if (twistItInstructionToggle === true) {
      document.getElementById('instructions').style.display = 'block';
      document.getElementById('instructions').innerHTML = "Scroll the yellow handle!"}

  twistItInstructionToggle = false

  globalLevelTimer -= globalLevelProgression
  globalLevelTimerPull -= globalLevelProgression

  twistItToggle = true;

  function timer() {

    if (count <= 0) // If time expires end the game
    {
      clearInterval(counter);
      console.log('Game over!');
      document.getElementsByTagName('h2')[0].style.color = "red"
      document.getElementsByTagName('h2')[0].style.left = "300px"
      document.getElementsByTagName('h2')[0].innerHTML = "Awww Game Over!"
      document.getElementById('instructions').style.display = 'none';
      document.getElementById('input-field').style.display = 'none';
      document.getElementById('highscore-form').style.display = 'block';
      return;
    }

    else if (twistItSuccess === true) { // If TwistIt was successful keep playing
      console.log('success!');
      clearInterval(counter);
      twistItSuccess = false;
      document.getElementById('instructions').innerHTML = '';
      document.getElementById('instructions').style.display = 'none';
      increaseScore();
      twistItLevelReset();
    }
    count--;

    document.getElementById("timer").innerHTML=count /100;

  }

}


function pullItTimerFunction() {
  console.log('PULL IT!');
  document.getElementsByTagName('h2')[0].innerHTML = "Pull It!"
  document.getElementById('input-container').style.display = 'block';
  document.getElementById('input-field').focus();

  let count = globalLevelTimerPull;

  let counter = setInterval(timer, 10); //10 will  run it every 100th of a second

  if (pullItInstructionToggle === true) {
     document.getElementById('instructions').innerHTML = "Type 'pull' into the text box!"}

  pullItInstructionToggle = false;

  globalLevelTimer -= globalLevelProgression
  globalLevelTimerPull -= globalLevelProgression

  pullItToggle = true;

  function timer() {

    if (count <= 0) // If time expires end the game
    {
      clearInterval(counter);
      console.log('Game over!');
      document.getElementsByTagName('h2')[0].style.color = "red"
      document.getElementsByTagName('h2')[0].style.left = "300px"
      document.getElementsByTagName('h2')[0].innerHTML = "Awww Game Over!"
      document.getElementById('instructions').style.display = 'none';
      document.getElementById('input-field').style.display = 'none';
      document.getElementById('highscore-form').style.display = 'block';
      return;
    }

    else if (pullItSuccess === true) { // If PullIt was successful keep playing
      console.log('success!');
      clearInterval(counter);
      pullItSuccess = false;
      document.getElementById('input-container').style.display = 'none';
      document.getElementById('instructions').innerHTML = '';
      document.getElementById('instructions').style.display = 'none';
      increaseScore();
      pullItLevelReset();
    }
    count--;

    document.getElementById("timer").innerHTML=count /100;

  }
}

function bopItLevelReset() {

  // Calculates the amount of time between levels based on level and globalResetTimer (increase the latter to make the game harder)
  function calculateLevelResetTime() {
    var num = 1 - (gameLevel * globalResetTimer);
    return (num * 1000);
  }

  document.getElementsByTagName('h2')[0].innerHTML = "Nicely Done!"

  // Creates game difficulty progression
  globalResetTimer += .05;

  // Replaces the image with "activated" version to indicate succesful completion of the task
  document.getElementsByClassName('bopit')[0].src='assets/BopIt-image-bopit-imprint.png';
  setTimeout(
    function () { console.log('next level!');
    document.getElementsByClassName('bopit')[0].src='assets/BopIt-image.png'; gameLogic()}, //reset the game loop
    calculateLevelResetTime());
}

function twistItLevelReset() {

  // Calculates the amount of time between levels based on level and globalResetTimer (increase the latter to make the game harder)
  function calculateLevelResetTime() {
    var num = 1 - (gameLevel * globalResetTimer);
    return (num * 1000);
  }

  document.getElementsByTagName('h2')[0].innerHTML = "Good work!"

  // Creates game difficulty progression
  globalResetTimer += .05;

  // Replaces the image with "activated" version to indicate succesful completion of the task
  document.getElementsByClassName('bopit')[0].src='assets/BopIt-image-twisted.png';
  setTimeout(
    function () {console.log('next level!');
    document.getElementsByClassName('bopit')[0].src='assets/BopIt-image.png'; gameLogic()}, //reset the game loop
    calculateLevelResetTime());
}

// Gameflow between levels
function pullItLevelReset() {

  // Calculates the amount of time between levels based on level and globalResetTimer (increase the latter to make the game harder)
  function calculateLevelResetTime() {
    var num = 1 - (gameLevel * globalResetTimer);
    return (num * 1000);
  }

  document.getElementsByTagName('h2')[0].innerHTML = "Great job!"

  // Creates game difficulty progression
  globalResetTimer += .05;

  // Replaces the image with "activated" version to indicate succesful completion of the task
  document.getElementsByClassName('bopit')[0].src='assets/BopIt-image-pulled.png';
  setTimeout(
    function () {console.log('next level!');
    document.getElementsByClassName('bopit')[0].src='assets/BopIt-image.png'; gameLogic()}, //reset the game loop
    calculateLevelResetTime());
}

//Picks a number between 1 and 3 to determine which "game" to play
function gameLogic() {

  console.log(globalLevelTimerPull)

  let command = Math.floor(Math.random() * 3) + 1
  switch (command) {
    case 1:
    bopItTimerFunction();
    break;
    case 2:
    twistItTimerFunction();
    break;
    case 3:
    pullItTimerFunction();
    break;
  }
}

// Introductory Dancing of the Bopit
function introDance() {
  let danceCounter = 4;
  let danceInterval = setInterval(rotateBopit, 500);

  document.getElementById('start').style.visibility = 'hidden';
  document.getElementById('highscore').style.visibility = 'hidden';

  function rotateBopit() {
    if (danceCounter > 0 ){
      if (document.getElementsByClassName('bopit')[0].id === 'bopit-angle-centered') {
        console.log(1);
        console.log(danceCounter);
        document.getElementsByClassName('bopit')[0].setAttribute("id", 'bopit-angle-right');
        danceCounter--;
        document.getElementsByTagName('title');
        document.getElementsByTagName('h2')[0].innerHTML = "Ready?"
      }
      else if (document.getElementsByClassName('bopit')[0].id === 'bopit-angle-right') {
        console.log(2);
        document.getElementsByClassName('bopit')[0].setAttribute("id", 'bopit-angle-left');
        danceCounter--;
      }
      else if (document.getElementsByClassName('bopit')[0].id === 'bopit-angle-left') {
        console.log(3);
        document.getElementsByClassName('bopit')[0].setAttribute("id", 'bopit-image-up');
        danceCounter--;
        document.getElementsByTagName('h2')[0].innerHTML = "Leggo!"
      }
      else if (document.getElementsByClassName('bopit')[0].id === 'bopit-image-up') {
        console.log(4);
        document.getElementsByClassName('bopit')[0].setAttribute("id", 'bopit-angle-centered')
        danceCounter--;
      }
      // else if (document.getElementsByClassName('bopit')[0].id === 'bopit-image-down') {
      //   console.log(5);
      //   console.log(danceCounter);
      //   document.getElementsByClassName('bopit')[0].setAttribute("id", 'bopit-angle-centered');
      //   danceCounter--;
      // }
    } else {
      clearInterval(danceInterval);
      document.getElementsByTagName('h2')[0].innerHTML = ''
      gameLogic();
    };
  }
}

function increaseScore() {
  let scoreString = document.getElementById('scoreval').innerHTML
  let scoreNum = parseInt(scoreString)
  document.getElementById('scoreval').innerHTML = scoreNum + 1
}

function highScore(){
  Array.from(document.getElementsByTagName('section')).forEach(function(element) {element.style.display = 'none'})

  document.getElementById('highscore-table').style.display = 'block'
}
