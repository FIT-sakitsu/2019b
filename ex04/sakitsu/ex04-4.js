function montecarlo() {
  var n = Number(prompt("試行回数を入力してください")) // n=試行回数
  var m = 0 // m=1/4円に点が入った回数カウンタ

  for (var i = 0; i < n; i++){ // 指定回数(n回)処理を繰り返す
    // ランダムな座標(x, y)を設定
    var x = Math.random()
    var y = Math.random()

    if (Math.sqrt(x*x + y*y) < 1)  { // (x, y)が1/4円に含まれている場合は
      m++ // 回数カウンタを増やす
    }
  }

  // 全体の面積が1*1の図形にn回打点を行い、1/4円に点が入った回数がm回
  // 1/4円の面積は以下の式から推定できる
  var area = (1 * 1) * m / n

  // 1/4円の面積 = 半径 * 半径 * pi * 1/4
  // → area = 1 * 1 * pi * 1/4
  // → area = pi * 1/4
  // → area * 4 = pi
  var pi = area * 4
  alert(pi)
}
