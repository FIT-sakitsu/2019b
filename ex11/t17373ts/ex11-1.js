// グローバル変数領域にmapを保持しておく
var map

// 地図クリック時のコールバック関数
function clickCallback(event) {
  alert(event.latlng)
}

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

  // 指定した緯度経度にマーカーを追加
  L.marker([35.388276, 139.427348]).addTo(map)

  // 円形を描画
  L.circle([35.388276, 139.427348], { radius: 100 }).addTo(map)
  L.circle([35.393276, 139.430348], { radius: 100 }).addTo(map)

  // 線を描画
  var latlngs = [[35.388276, 139.427348], [35.393276, 139.430348]]
  L.polyline(latlngs, { color: 'red' }).addTo(map)
})
