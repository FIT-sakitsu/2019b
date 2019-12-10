var canvas = document.getElementById('canvas')

var ctx = canvas.getContext('2d')

function lightPrint(event) {
  //console.log(event)
  var elm = event.value
  ctx.clearRect(0, 200, 500, 500)
  ctx.fillStyle = 'red'
  ctx.fillRect(0, 200, elm, 100)
}

window.addEventListener('devicelight', lightPrint)
