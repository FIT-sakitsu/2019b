var map
var i = 1

function clickCallback(event) {
  // alert(event.latlng)
  // map.setView(event.latlng, 15)

  var marker = L.marker(event.latlng, {
    title: i.toString(),
    opacity: 1,
    //透明度
    riseOnHover: true,
    //重ね順最前面
  })

  //{option:,}でオプションを追加
  marker.addTo(map)
  //markerを追加
  // marker.push(marker)
  //markerを増やす
  i++
}

function removeMarkers() {
  while (markers.length > 0) {
    var marker = markers.shift()
    map.removeLayer(marker)
  }
}
//marker消去

$(function() {
  map = L.map('map')

  map.setView([35.388276, 139.42734], 15)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>' +
      'contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  }).addTo(map)
  map.on('click', clickCallback)
})
