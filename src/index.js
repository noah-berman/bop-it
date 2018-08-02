let bopItSuccess;
let twistItSuccess;
let pullItSuccess;

let bopItToggle = false;
let twistItToggle = false;
let pullItToggle = false;


document.addEventListener('DOMContentLoaded', function(event) {

  const bopit = document.getElementsByClassName('bopit')[0]
  const bopitBox = document.getElementById('box')
  const scrollBar = document.getElementById('scrollbar')

  const startButton = document.getElementById('start')
  startButton.addEventListener('click', gameLogic)




  // Event Listeners

  function bopLog() {
    if (bopItToggle === true) {
      bopItToggle = false;
      bopItSuccess = true;
    }
  }

  function twistLog() {
    if (twistItToggle === true) {
      console.log('Twist it!');
      twistItToggle = false;
      console.log(twistItToggle);
      twistItSuccess = true;
    }
  }

  function pullLog() {
    if (pullItToggle === true) {
      console.log('Pull it!');
      pullItToggle = false;
      console.log(pullItToggle);
      pullItSuccess = true;
    }
  }


  bopitBox.addEventListener('click', bopLog);

  scrollBar.addEventListener('scroll', twistLog);

  // textBox.addEventListener('', pullLog)

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
      gameLogic();
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

    else if (twistItSuccess === true) { // If BopIt was successful keep playing
      console.log('success!');
      clearInterval(counter);
      twistItSuccess = false;
      gameLogic();
    }
    count--;

    document.getElementById("timer").innerHTML=count /100;

  }

}

function pullItTimerFunction() {
  let count = 200;

  let counter = setInterval(timer, 10); //10 will  run it every 100th of a second

  pullItToggle = false;

  function timer() {

    if (count <= 0) // If time expires end the game
    {
      clearInterval(counter);
      console.log('Game over!');
      return;
    }

    else if (pullItSuccess === true) { // If BopIt was successful keep playing
      console.log('success!');
      clearInterval(counter);
      pullItSuccessVariable = false;
      gameLogic();
    }
    count--;

    document.getElementById("timer").innerHTML=count /100;

  }

}


function gameLogic() {

  introDance();

  setTimeout(function() {

    let command = Math.floor(Math.random() * 2) +
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
  }, 2000);
}

function introDance() {
  let danceCounter = 4;
  let danceInterval = setInterval(rotateBopit, 500);

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
    } else { clearInterval(danceInterval)}

  }
}
