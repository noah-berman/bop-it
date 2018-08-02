let bopItSuccess;
let twistItSuccess;
let pullItSuccess;

let bopItToggle = false;
let twistItToggle = false;
let pullItToggle = false;

let gameLevel = 1
let globalResetTimer = .05


document.addEventListener('DOMContentLoaded', function(event) {

  // DOM Element Variables //
  const bopit = document.getElementsByClassName('bopit')[0]
  const bopitBox = document.getElementById('box')
  const scrollBar = document.getElementById('scrollbar')
  const startButton = document.getElementById('start')
  const inputContainer = document.getElementById("input-container")
  const inputField = document.getElementById('input-field')
  const inputFieldButton = document.getElementById('input-field-button')

  // Event Listeners
  startButton.addEventListener('click', introDance)
  inputField.addEventListener('keyup', pullLog)
  bopitBox.addEventListener('click', bopLog);
  scrollBar.addEventListener('scroll', twistLog);

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
  let count = 200;

  let counter = setInterval(timer, 10); //10 will  run it every 100th of a second

  bopItToggle = true;

  function timer() {

    if (count <= 0) // If time expires end the game
    {
      bopItToggle = false;
      clearInterval(counter);
      console.log('Game over!');
      return;
    }

    else if (bopItSuccess === true) { // If BopIt was successful keep playing
      bopItToggle = false;
      console.log('success!');
      clearInterval(counter);
      bopItSuccess = false;
      bopItLevelReset();
    }
    count--;

    document.getElementById("timer").innerHTML=count /100;

  }

}

function twistItTimerFunction() {
  console.log('TWIST IT!')
  let count = 200;

  let counter = setInterval(timer, 10); //10 will  run it every 100th of a second

  twistItToggle = true;

  function timer() {

    if (count <= 0) // If time expires end the game
    {
      clearInterval(counter);
      console.log('Game over!');
      return;
    }

    else if (twistItSuccess === true) { // If TwistIt was successful keep playing
      console.log('success!');
      clearInterval(counter);
      twistItSuccess = false;
      twistItLevelReset();
    }
    count--;

    document.getElementById("timer").innerHTML=count /100;

  }

}

// function pullItDOM() {
//   console.log('pullitDOM!');
//   document.getElementById('input-container').style.visibility = 'visibile';
//   debugger;
//   pullItTimerFunction();
// }

function pullItTimerFunction() {
  console.log('PULL IT!');
  document.getElementById('input-container').style.display = 'block';

  let count = 400;

  let counter = setInterval(timer, 10); //10 will  run it every 100th of a second

  pullItToggle = true;

  function timer() {

    if (count <= 0) // If time expires end the game
    {
      clearInterval(counter);
      console.log('Game over!');
      return;
    }

    else if (pullItSuccess === true) { // If PullIt was successful keep playing
      console.log('success!');
      clearInterval(counter);
      pullItSuccess = false;
      document.getElementById('input-container').style.display = 'none'
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

  // Replaces the image with "activated" version to indicate succesful completion of the task
  document.getElementsByClassName('bopit')[0].src='assets/BopIt-image-pulled.png';
  setTimeout(
    function () {console.log('next level!');
    document.getElementsByClassName('bopit')[0].src='assets/BopIt-image.png'; gameLogic()}, //reset the game loop
    calculateLevelResetTime());
}

//Picks a number between 1 and 3 to determine which "game" to play
function gameLogic() {

  let command = Math.floor(Math.random() * 3) +
  1
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

  function rotateBopit() {
    if (danceCounter > 0 ){
      if (document.getElementsByClassName('bopit')[0].id === 'bopit-angle-centered') {
        console.log(1);
        console.log(danceCounter);
        document.getElementsByClassName('bopit')[0].setAttribute("id", 'bopit-angle-right');
        danceCounter--;
        document.getElementsByTagName('title')
      }
      else if (document.getElementsByClassName('bopit')[0].id === 'bopit-angle-right') {
        console.log(2);
        console.log(danceCounter);
        document.getElementsByClassName('bopit')[0].setAttribute("id", 'bopit-angle-left');
        danceCounter--;
      }
      else if (document.getElementsByClassName('bopit')[0].id === 'bopit-angle-left') {
        console.log(3);
        console.log(danceCounter);
        document.getElementsByClassName('bopit')[0].setAttribute("id", 'bopit-image-up');
        danceCounter--;
      }
      else if (document.getElementsByClassName('bopit')[0].id === 'bopit-image-up') {
        console.log(4);
        console.log(danceCounter);
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
      gameLogic();
    };

  }
}
