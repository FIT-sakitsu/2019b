function showLightIntencity(event) {
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')

  ctx.clearRect(0, 0, 1000, 100)
  ctx.fillStyle = 'rgb(0, 0, 255)'
  ctx.fillRect(0, 0, event.value / 10, 100)
}

window.addEventListener('devicelight', showLightIntencity)
