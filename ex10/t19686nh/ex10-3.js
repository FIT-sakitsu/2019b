var score = 0

$(function() {
  $('button').click(function() {
    start()
  })
})

function start() {
  score = 0
  setTimeout(end, 10000)
  reDraw()
}

function end() {
  alert(score)
}

function reDraw() {
  $('td')
    .html('○')
    .off()

  var randomCell = Math.floor(Math.random() * $('td').length)
  $('td')
    .eq(randomCell)
    .html('◎')
    .click(addScore)
    .click(reDraw)
}

function addScore() {
  score++
  $('#score').html(score)
}
