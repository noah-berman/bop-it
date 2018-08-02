function gameLogic() {

  let command = Math.floor(Math.random() * 3) +
   1

  switch (command) {
    case 1:
      bopitGame();
      break;
    case 2:
      twistitGame();
      break;
    case 3:
      pullitGame();
      break;
  }
}

function bopitGame() {

  startTimer();
  bopitBox.addEventListener('click', function(event){
    let bopitBoxClone = bopitBox.cloneNode(true);

    endtimer();

    bopitBox.parentNode.replaceChild(bopitBoxClone, bopitBox)


  })
}
