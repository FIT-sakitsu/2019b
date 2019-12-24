var map

function clickCallback(event) {
  alert(event.latlng)
}

$(function() {
  map = L.map('map')
  map.setView([35.388276, 139.427348], 15)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  }).addTo(map)
  map.on('click', clickCallback)
})
