var map = L.map('map').setView([35.388276, 139.427348], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
}).addTo(map)

function click_callback(e) {
  map.setView(e.latlng, 15)
}

map.on('click', click_callback)
