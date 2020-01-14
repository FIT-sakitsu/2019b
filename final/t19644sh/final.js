var lux = 0

function light_print(event) {
  var elm = document.getElementById('lighttext')
  lux = event.value
  document.getElementById('lux').value = lux
  document
    .getElementById('dome')
    .setAttribute('src', lux > 80 ? '1.jpg' : '2.jpg')
}
window.addEventListener('devicelight', light_print)

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: { lat: 34.3953588, lng: 132.4535418 },
  })
  map.addListener('click', function(e) {
    getClickLatLng(e.latLng, map)
  })
}

function getClickLatLng(lat_lng, map) {
  map.panTo(lat_lng)
}

function recommend() {
  var day = prompt('何曜日? ')
  if (day == '月曜日') {
    alert(
      'フィリピンバナナがおすすめ！日本で最も食されているバナナで、果肉はなめらかでさっぱりとした甘さが特徴です！'
    )
  } else if (day == '火曜日') {
    alert(
      '台湾バナナがおすすめ！果実が短めでやや太い台湾バナナは、緻密でねっとりとした舌触り。香りが強い、甘くて濃厚な味わいです！'
    )
  } else if (day == '水曜日') {
    alert(
      'モンキーバナナがおすすめ！大きさが7cm~9cmの小さくて可愛いバナナです。皮が薄くて柔らかい舌触り。子供のおやつにもおすすめです！'
    )
  } else if (day == '木曜日') {
    alert(
      'レッドバナナがおすすめ！”モラード”という品種のバナナで、果皮の色が赤茶色になるのが大きな特徴です。後味がさっぱりとしています！'
    )
  } else if (day == '金曜日') {
    alert(
      '島バナナがおすすめ！沖縄や奄美大島で栽培されているこのバナナは、台風の影響を受けやすく本州ではほとんど流通していません。濃厚な味わいと適度な酸味が特徴です！'
    )
  } else if (day == '土曜日') {
    alert(
      'ピサンマスバナナがおすすめ！モンキーバナナの特徴とフィリピンバナナの特徴を併せ持つバナナ。小ぶりで美味しい。おすすめ！'
    )
  } else if (day == '日曜日') {
    alert(
      'バナップルがおすすめ！フルーティーな甘みと酸味が楽しめます。シュガースポットが出ないのが特徴的。おすすめ！'
    )
  } else {
    alert('もう一度入力してください（○曜日）')
  }
}

function clickCallback(event) {
  map.setView(event.latlng)
}

$(function() {
  map = L.map('map')
  map.setView([34.498339, 136.777742], 16)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>' +
      'contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  }).addTo(map)

  map.on('click', clickCallback)

  L.marker([34.498339, 136.777742]).addTo(map)
})

function uranai() {
  var unsei = new Array(
    '完熟バナナ!!!!(大吉)',
    '黄色いバナナ!!(中吉)',
    '青バナナ。(吉)',
    '腐ったバナナ。。(凶)',
    'チョコバナナ！！！！！！(超大吉)'
  )
  var i = Math.round(Math.random() * 4)

  document.getElementById('what').innerHTML = unsei[i]
}

function quiz() {
  var x = document.getElementsByName('ryosuke')
  for (var i = 0; i < x.length; i = i + 1) {
    if (x[i].checked) {
      if (
        i == 0 ||
        i == 3 ||
        i == 6 ||
        i == 10 ||
        i == 14 ||
        i == 16 ||
        i == 20
      ) {
        alert('正解です！')
      } else {
        alert('不正解です！')
      }
    }
  }
}

$(document).ready(function showMessage() {
  alert('バナナ好きのアナタ！！バナナの楽園へようこそ！！')
})
