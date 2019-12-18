var m = 0 // 1/4円に点(x,y）がはいった回数

var n = 100000 // くりかえす回数

for (var i = 0; i < n; i++) {
  var x = Math.random()
  var y = Math.random()
  // N回繰り返し
  // ランダムな点X,Yの座標を決める
  var dis = x * x + y * y
  if (dis < 1) {
    m++
    // (x,y) が1/4円の内側であれば
    // mの値を1増やす
  }
}

var area = ((1 * 1) / n) * m
var pi = area * 4
alert(pi)
