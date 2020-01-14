function href() {
  window.location.href = final.html
}

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var text = 'Reversi'
var fontSize = '40'
ctx.beginPath()

ctx.font = "40px 'Verdana'"
var textWidth = ctx.measureText(text).width

ctx.fillText(text, (700 - textWidth) / 2, fontSize)
