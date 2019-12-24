// グローバル変数領域にデータを保存しておく
var map
var tempRoute = []
var route = []
var polyline
var markers = []

// ルートを出力
function exportRoute() {
  // 配列をJSONフォーマットに変換して出力
  alert('ルートを保存する為には出力された文字列を保存して下さい')
  alert(JSON.stringify(route))
}

// ルートを読みこみ
function importRoute() {
  // ユーザーに入力をうながす
  var input = prompt('エクスポートした文字列を入力')

  // ユーザーが入力したJSONを配列をに展開してrouteに再展開
  route = JSON.parse(input)

  // ルートを再現
  playRoute()
}

// ルートをクリア
function clearRoute() {
  route = []
  drawRoute(route)
}

// ルートをアニメーション再生
function playRoute() {
  drawRouteWithAnimation()
}

// 地図クリックが行われたらルートに座標を追加して再描画
function clickCallback(event) {
  route.push(event.latlng)
  drawRoute(route)
}

// 指定されたルートを描画
function drawRoute(r) {
  // polylineを再描画
  if (polyline != null) {
    map.removeLayer(polyline)
  }
  polyline = L.polyline(r, { color: 'red' }).addTo(map)

  // マーカーを再描画
  while (markers.length > 0) {
    var marker = markers.shift()
    map.removeLayer(marker)
  }
  for (var i = 0; i < r.length; i++) {
    var marker = L.marker(r[i]).addTo(map)
    var popup = L.popup().setContent('lat:' + r[i].lat + ' lng:' + r[i].lng)
    marker.bindPopup(popup).openPopup()
    markers.push(marker)
    map.setView(r[i], 15)
  }
}

// ルートをアニメーション形式で描画
function drawRouteWithAnimation() {
  // 全体を描画しきれていない限り描画を続ける
  if (tempRoute.length < route.length) {
    tempRoute = route.slice(0, tempRoute.length + 1)
    drawRoute(tempRoute)
    setTimeout(drawRouteWithAnimation, 500)
  } else {
    // 描画を完了したらtempRouteを空にしておく
    tempRoute = []
  }
}

// 初期描画処理
$(function() {
  // idがmapの要素をターゲットに指定してLeafletを初期化
  map = L.map('map')

  // 地図の中央に表示する緯度経度とズームを指定
  map.setView([35.388276, 139.427348], 15)

  // LeafletにOpenStreetMapタイルレイヤーを追加する
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>' +
      'contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  }).addTo(map)

  // mapクリック時のコールバックを設定
  map.on('click', clickCallback)
})
