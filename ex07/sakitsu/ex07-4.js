/** 計算用数値 */
// 今回は200px * 200pxのcanvasを用意しているので (c.f. <canvas id="canvas" width="200 height="200">)
// 中心座標(100, 100)、半径100pxの円の同心円上に星型を描くことを考える
var r = 100       // 同心円の半径は100
var centerX = 100 // 中心座標は x: 100
var centerY = 100 // 中心座標は y: 100
var offset = 18   // 一番上に見える星の頂点を中央に持ってくるための描画オフセット角度

/** 描画準備 */
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')

/** 描画設定 */
ctx.lineWidth = 1           // 線の太さは1px
ctx.strokeStyle = 'black'   // 線の色は黒
ctx.fillStyle = 'lightgrey' // 塗りつぶしの色は薄グレー

/** 描画処理 */
ctx.beginPath(); // 下書きの開始を宣言

for (var i = 0; i < 6; i++) { // 星型を描くために全6回の打点を行う
  // 正五角形の頂点を１つ飛ばしで線で結んでいくことで星型を描画できる
  // 要は任意の開始点を取り、同心円状の点を1回あたり (360/5)*2 = 144度ずつ移動しながら打点を繰り返せば良い

  // 三角関数を使ってから同心円上の(x, y)座標を決定
  var angle = i * (360 / 5) * 2 - offset
  var x = r * Math.cos(angle / 180 * Math.PI) + centerX
  var y = r * Math.sin(angle / 180 * Math.PI) + centerY

  if (i == 0) { // 初回だけはctx.moveTo()を使う
    ctx.moveTo(x, y)
  } else { // 2回目以降はctx.lineTo()を利用
    ctx.lineTo(x, y)
  }
}
ctx.closePath() // 下書きの完了を宣言
ctx.fill() //　下書きに囲まれた領域を塗りつぶす
ctx.stroke() // 下書きを線で辿る
