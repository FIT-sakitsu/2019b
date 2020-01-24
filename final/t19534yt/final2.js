$(function() {
  sizing()

  $(window).resize(function() {
    sizing()
  })
})

function sizing() {
  $('#main').attr({ height: $('#wrapper').height() })

  $('#main').attr({ width: $('#wrapper').width() })
}

//光センサー
function light_print(event) {
  var elm = document.getElementById('lighttext')
  elm.value = event.value
}

window.addEventListener('devicelight', light_print)

//wikiから持ってきたリストを配列に入れる。
var words = []
var ok = 0
var bonus = 0
var no = 0

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

function start() {
  getFromWikipedia()
}

function getFromWikipedia() {
  var body = document.getElementsByTagName('body')[0]
  var o = document.createElement('script')
  o.setAttribute(
    'src',
    'https://wikipedia.org/w/api.php?action=query&srwhat=text&list=allpages&apfrom=A Rosales&aplimit=50&format=json&callback=showRandomWordFromWikipedia'
  )
  body.appendChild(o)
}

//とってきたものをランダム表示
function showRandomWordFromWikipedia(json) {
  var i
  for (i = 0; i < json.query.allpages.length; i++) {
    words.push(json.query.allpages[i].title)
  }
  document.getElementById('word').innerHTML =
    words[Math.ceil(Math.random() * words.length)]

  timer = setInterval(timerCallback, 100)
}

//答えの値をとって正誤判定
document.addEventListener('keydown', function(event) {
  if (event.code == 'Enter') {
    var question = document.getElementById('word').innerHTML
    var answer = document.getElementById('answer').value

    if (answer == question) {
      ok += 10
    } else {
      no += 1
    }

    document.getElementById('word').innerHTML =
      words[Math.ceil(Math.random() * words.length)]
    words.shift()
    if (words.length == 0) {
      alert('Nice Fight!!!!!')
      bonus += 50
    }
  }
})
//スコアを保存
function score() {
  var total = 0
  total = ok + bonus

  document.getElementById('total').innerHTML = 'score: ' + total
  document.getElementById('no').innerHTML = '不正回数: ' + no
}

//タイマー
var timeElapsed = 0 //経過したミリ秒数
var timer

function timerCallback() {
  timeElapsed += 100
  document.getElementById('timer').innerHTML = timeElapsed / 1000
  if (timeElapsed > 30000) {
    clearInterval(timer)
    alert('GAMEOVER')
  }
}

//中断　時計を消すだけ
function stoptimer() {
  clearInterval(timer)
}

//再開　時計を消すだけで、timeElapsedは消えてないため、これだけでOK
function restart() {
  timer = setInterval(timerCallback, 100)
}

//画面を読み込んだ瞬間にstart
start()
