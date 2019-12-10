function showLightIntencity(event) {
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')

  ctx.clearRect(0, 0, 1500, 50)
  ctx.fillStyle = 'rgb(255, 51, 51)'
  ctx.fillRect(0, 0, event.value / 10, 50)
}

window.addEventListener('devicelight', showLightIntencity)
