function showLightIntencity(event) {
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')

  ctx.clearRect(0, 0, 2000, 200)
  ctx.fillRect(0, 0, event.value / 8, 100)
}

window.addEventListener('devicelight', showLightIntencity)
