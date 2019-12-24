// ゲームスタート
var score = 0

$(function() {
  $('button').click(function() {
    start()
  })
})

// ゲーム開始
function start() {
  score = 0
  setTimeout(end, 10000)
  reDraw()
}

// ゲーム終了
function end() {
  alert(score)
}

// モグラを再描画
function reDraw() {
  $('td')
    .html('○') // tdタグの中身をすべて○に書き換え
    .off() // eventをすべて除去

  // 全tdタグのなかからランダムな1個を選択
  var randomCell = Math.floor(Math.random() * $('td').length)
  $('td')
    .eq(randomCell) // ランダムな要素だけを抽出
    .html('◎') // モグラマークに修正
    .click(addScore) // クリックしたら点数が増えるように
    .click(reDraw) // クリックしたらモグラを再描画
}

// 点数を追加
function addScore() {
  score++
  $('#score').html(score)
}
a
