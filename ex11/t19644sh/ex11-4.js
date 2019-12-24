var Map
var count = 0

function clickCallback(event) {
  map.setView(event.latlng)

  var marker = L.marker(event.latlng, { title: ++count, opacity: 0.5 })
  marker.addTo(map)

  var popup = L.popup().setContent('ここは' + count + 'です')
  marker.bindPopup(popup).openPopup()
}

$(function() {
  map = L.map('map')
  map.setView([35.388276, 139.427348], 16)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>' +
      'contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  }).addTo(map)

  map.on('click', clickCallback)
})
