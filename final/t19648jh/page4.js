var map

function clickCallback(event) {
  alert(event.latlng)
}

$(function() {
  map = L.map('map')

  map.setView([37.592472, 127.007446], 10)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>' +
      'contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  }).addTo(map)

  map.on('click', clickCallback)

  L.marker([37.592472, 127.007446]).addTo(map)

  L.circle([42.423457, 130.517578], { radius: 200 }).addTo(map)
  L.circle([33.72434, 126.914063], { radius: 200 }).addTo(map)

  var latlngs = [[42.423457, 130.517578], [33.72434, 126.914063]]
  L.polyline(latlngs, { color: 'blue' }).addTo(map)
})
