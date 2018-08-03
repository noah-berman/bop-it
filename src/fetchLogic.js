document.addEventListener('DOMContentLoaded', function(event) {

  const endPoint = 'http://localhost:3000/api/v1/leaderboards'
  fetch(endPoint).then(res=>res.json()).then(json => json.forEach(leaderboard => {
    const markup = `<h3> ${leaderboard.user_name} : ${leaderboard.score} </h3>`;
    document.getElementById('input-container').innerHTML += markup
  create()
  }))

  function update() {
    let bodyJSON = {user_name: "Kurt", score: 95}
    fetch('http://localhost:3000/api/v1/leaderboards/1', {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(bodyJSON),
    }).then(res=>res.json()).then(data => console.log(data))
  }

  function create() {
    let bodyJSON = {user_name: "Noah", score: 95}
    fetch('http://localhost:3000/api/v1/leaderboards', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(bodyJSON),
    }).then(res=>res.json()).then(data => console.log(data))
  }

  const body = document.getElementsByTagName('BODY')[0];
  const canvas = document.getElementById('myCanvas')
  const ctx = canvas.getContext("2d")


  ctx.beginPath();
  ctx.rect(20, 40, 50, 50);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();

})
