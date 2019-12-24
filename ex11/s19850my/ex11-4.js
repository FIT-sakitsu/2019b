var num = 1

// "map" divに地図を作成し、指定した場所とズームで表示する
var map = L.map('map').setView([35.388276, 139.427348], 15)

// OpenStreetMapタイルレイヤーを追加する
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
}).addTo(map)

// インベントハンドラ
function click_callback(e) {
  // map.setView(e.latlng)
  console.log(e)

  L.marker([e.latlng.lat, e.latlng.lng], { title: num.toString() }).addTo(map)
  num += 1
}

// clickのイベントリスナを設定する
map.on('click', click_callback)
