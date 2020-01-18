var word = prompt('みかんは好き/普通/嫌い？')

switch (word) {
  case '好き':
    alert('食べ過ぎると体が黄色くなりますよ')
    break

  case '普通':
    alert('和歌山の美味しいみかんを食べてみてください')
    break

  case '嫌い':
    alert('猫もみかん嫌いらしいですよ')
    break

  default:
    alert('理解できません')
}
var answer = 0
var counter = 1
while (1) {
  answer += counter
  counter++
  if (counter == 11) {
    break
  }
}
alert('１から10までの合計は' + answer)

var data = [
  { pref: '和歌山県', amount: 144200 },
  { pref: '愛媛県', amount: 120300 },
  { pref: '熊本県', amount: 85700 },
  { pref: '群馬県', amount: 52800 },
  { pref: '静岡県', amount: 51100 },
  { pref: '長崎県', amount: 31500 },
  { pref: '佐賀県', amount: 23500 },
]

draw()

function draw() {
  var html = '<table>'

  for (var i = 0; i < data.length; i++) {
    html = html + '<tr>'
    html = html + '<td>' + data[i].pref + '</td>'
    html = html + '<td>' + data[i].amount + '</td>'
    html = html + '</tr>'
  }
  html = html + '</table>'

  var show = document.getElementById('space')

  show.innerHTML = html
}

function ascendingSort() {
  data.sort(function(a, b) {
    return a.amount - b.amount
  })
  draw()
}

function descendingSort() {
  data.sort(function(a, b) {
    return b.amount - a.amount
  })
  draw()
}

function reset() {
  $('li').css('color', 'black')
}
function wakayama() {
  $('.wakayama').css('color', 'red')
}
function ehime() {
  $('.ehime').css('color', 'red')
}
function pref1() {
  $('#pref1').css('color', 'red')
}
function pref2() {
  $('#pref2').css('color', 'red')
}
function pref3() {
  $('#pref3').css('color', 'red')
}
function pref4() {
  $('#pref4').css('color', 'red')
}
function pref5() {
  $('#pref5').css('color', 'red')
}
function pref6() {
  $('#pref6').css('color', 'red')
}

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
  map.setView([34.076637, 135.137515], 15)

  // LeafletにOpenStreetMapタイルレイヤーを追加する
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>' +
      'contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  }).addTo(map)

  // mapクリック時のコールバックを設定
  map.on('click', clickCallback)

  // 指定した緯度経度にマーカーを追加
  L.marker([34.076637, 135.137515]).addTo(map)

  // 円形を描画
  L.circle([34.076637, 135.137515], { radius: 100 }).addTo(map)
  L.circle([34.076637, 135.137515], { radius: 100 }).addTo(map)

  // 線を描画
  var latlngs = [[34.076637, 135.137515], [34.078647, 135.137515]]
  L.polyline(latlngs, { color: 'red' }).addTo(map)
})
