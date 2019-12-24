var score

$(function() {
  $('input').click(function() {
    start()
  })
})

function start() {
  score = 0
  $('#score').html(score)
  drawMap()
  setTimeout(end, 10000)
}

function end() {
  // スコアをalertする
  alert('あなたのスコアは' + score + 'です')
}

function drawMap() {
  // 全升目を○で塗り潰す
  $('td')
    .html('○')
    .off()
  // 1個所だけランダムで◎にする
  var randomCell = Math.floor(Math.random() * $('td').length)
  $('td')
    .eq(randomCell)
    .html('◎')
    .click(addScore)
    .click(drawMap)
}

function addScore() {
  score = score + 1
  $('#score').html(score)
}

// ◎をクリックしたときだけスコアが増える
// ◎をクリックしたらマップを再描画する
