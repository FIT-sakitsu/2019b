// "map" divに地図を作成し、指定した場所とズームで表示する
var map = L.map('map')
map.setView([35.3, 139.4], 6)

// OpenStreetMapタイルレイヤーを追加する
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
}).addTo(map)

const exe = document.getElementById('exe')
exe.onclick = () => {
  var textbox = document.getElementById('textbox').value
  if (textbox === 'kanto') {
    map.setView([35.3, 139.4], 9)
  } else if (textbox === 'kansai') {
    map.setView([34.4138, 135.3112], 9)
  } else if (textbox === 'kyushu') {
    map.setView([33.3623, 130.2505], 9)
  } else if (textbox === 'tohoku') {
    map.setView([39.4207, 141.0915], 9)
  }

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  }).addTo(map)
}

var lists = ['kanto', 'kansai', 'kyushu', 'tohoku']
for (var i = 0; i < lists.length; i++) {
  console.log(lists[i])
}

var elem = document.getElementById('areas')
for (var i = 0; i < lists.length; i++) {
  elem.innerHTML += '<p>' + lists[i] + '</p>'
}
