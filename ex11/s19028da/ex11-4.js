var map = L.map('map').setView([35.388276, 139.427348], 15)
var nummer = 0

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
}).addTo(map)

function click_callback(e) {
  nummer++
  L.marker(e.latlng)
    .bindPopup(String(nummer))
    .addTo(map)
    .on('mouseover', popup)
}

function popup() {
  console.log(this)
  this.openPopup()
}

map.on('click', click_callback)
