var finalscore = 0
finalscore = localStorage.getItem('total')

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
ctx.font = '20pt 明朝'
ctx.fillText('score:　' + finalscore, 50, 50)
