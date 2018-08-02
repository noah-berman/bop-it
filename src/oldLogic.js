document.addEventListener('DOMContentLoaded', function(event) {

  const body = document.getElementsByTagName('BODY')[0];
  const canvas = document.getElementById('myCanvas')
  const ctx = canvas.getContext("2d")


  ctx.beginPath();
  ctx.rect(20, 40, 50, 50);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();

// ----------------------------------------------------------------------------
  const inputContainer = document.getElementById("input-container")
  const inputField = document.getElementById('input-field')
  const inputFieldButton = document.getElementById('input-field-button')
  let theCount = document.getElementById('the-count')
  let theStringNumber = theCount.innerText
  let theIntNumber = parseInt(theStringNumber)


  // inputField.addEventListener('click', function(event) {
  //   event.preventDefault()
  //   setInterval(theTimer, 1000);
  //
  // })

    function theTimer() {
      if (theIntNumber > 0) {
        theIntNumber -= 1
        theStringNumber = theIntNumber
        console.log(theIntNumber);
        theCount.innerText = theIntNumber
      }
      if (theIntNumber == 0) {
        inputField.value = ""
      }
    }

  inputField.addEventListener('keyup', function(event) {
    event.preventDefault()
    let theWords = inputField.value.split("")
    let wordsArray = []
    let wordCount = wordsArray

    if (wordsArray) {
      wordsArray.push(theWords)
    }

      console.log(wordsArray);
      setInterval(theTimer, 1000);

    // CloneReplace()
  })



  // function CloneReplace() {
  //   let theInputForm = document.getElementById('user-form')
  //       theClone = theInputForm.cloneNode(true)
  //   theInputForm.parentNode.replaceChild(theClone, theInputForm)
  //   console.log("done");
  // }


})
