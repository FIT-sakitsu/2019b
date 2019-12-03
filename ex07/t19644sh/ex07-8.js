// 適宜書き換えてあります！

/** 描画準備 */
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

/** 描画設定 */
ctx.lineWidth = 0.5 // 線の太さは0.5px
ctx.strokeStyle = 'black' // 線の色は黒

/** 計算用数値 */
var r = 250 // 半径250の円を用いて計算
var width = r * 2 // 外接する正方形の１辺の長さは直径に等しい
var centerX = r // 円の中心座標は(100, 100)とする
var centerY = r // 円の中心座標は(100, 100)とする
var trials = 10000 // ボタンクリックあたりの試行回数

/** 計算結果 */
var pi = 0 // 推定された円周率
var n = 0 // 試行回数の総計
var m = 0 // 円に入った回数の総計

// 最新の計算結果を画面に反映
function drawResult() {
  document.getElementById('pi').innerText = pi
  document.getElementById('m').innerText = m
  document.getElementById('n').innerText = n
}

function reset() {
  // 計算結果と画面描画を初期化
  n = 0
  m = 0
  pi = 0
  drawResult()
  ctx.clearRect(0, 0, width, width)

  // 外接する正方形を再描画
  ctx.strokeRect(0, 0, width, width)

  // 内接円を描画
  ctx.beginPath()
  ctx.arc(
    centerX,
    centerY,
    r,
    (0 * Math.PI) / 180,
    (360 * Math.PI) / 180,
    false
  )
  ctx.closePath()
  ctx.stroke()
}

function start() {
  for (var i = 0; i < trials; i++) {
    n++ // 試行回数を１増やす

    // 正方形内部にランダムな座標(x, y)を設定して打点
    var x = Math.random() * width
    var y = Math.random() * width

    // 座標(x,y)を円の中心からの距離に置き換え、ピタゴラスの定理を用いて打点が円内かどうかを計算
    var xx = x - centerX
    var yy = y - centerY
    if (Math.sqrt(xx * xx + yy * yy) < r) {
      // 円内ならばmを１増やし、点は青に
      m++
      ctx.fillStyle = 'gold'
    } else {
      // 円外の場合はmを増やさず、点は赤に
      ctx.fillStyle = 'silver'
    }
    ctx.fillRect(x, y, 1, 1) // 点を描画

    // 面積width*widthの領域にn回打点を行い、円に点が入った回数がm回なので面積(area)は以下によって求められる
    // 円の面積の公式 area = r * r * piから円周率を逆算
    var area = ((width * width) / n) * m
    pi = area / (r * r)

    drawResult() // 最新の計算結果を画面に反映
  }
}

// 画面ロード時に初期化処理を一度実行しておく
reset()
