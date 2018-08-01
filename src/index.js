document.addEventListener('DOMContentLoaded', function(event) {
  const bopit = document.getElementsByClassName('bopit')[0]
  const bopitBox = document.getElementById('box')
  const scrollbar = document.getElementById('scrollbar')

  function rotateBopit() {
    if (document.getElementsByClassName('bopit')[0].id === 'bopit-angle-centered') {
      console.log(document.getElementsByClassName('bopit')[0]);
      document.getElementsByClassName('bopit')[0].setAttribute("id", 'bopit-angle-right')
    }
    else if (document.getElementsByClassName('bopit')[0].id === 'bopit-angle-right') {
      console.log(document.getElementsByClassName('bopit')[0]);
      document.getElementsByClassName('bopit')[0].setAttribute("id", 'bopit-angle-left')
    }
    else if (document.getElementsByClassName('bopit')[0].id === 'bopit-angle-left') {
      console.log(document.getElementsByClassName('bopit')[0]);
      document.getElementsByClassName('bopit')[0].setAttribute("id", 'bopit-image-up')
    }
    else if (document.getElementsByClassName('bopit')[0].id === 'bopit-image-up') {
      console.log(document.getElementsByClassName('bopit')[0]);
      document.getElementsByClassName('bopit')[0].setAttribute("id", 'bopit-image-down')
    }
    else if (document.getElementsByClassName('bopit')[0].id === 'bopit-image-down') {
      console.log(document.getElementsByClassName('bopit')[0]);
      document.getElementsByClassName('bopit')[0].setAttribute("id", 'bopit-angle-centered')
    }
  }

  // setInterval(rotateBopit, 500)

  function boxlog() {console.log('Bop it!')}
  function twistlog() {console.log('Twist it!')}

  bopitBox.addEventListener('click', boxlog);

  scrollbar.addEventListener('scroll', twistlog);
})
