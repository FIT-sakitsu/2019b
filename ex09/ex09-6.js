var array
var timer = null

function wordAdd() {
  var wordA = document.getElementById('word').value
  array = wordA.split('')
  timer = setInterval(printWord, 1000)
}

function printWord() {
  // 配列から1文字ずつ取り出してPタグの末尾に追加する
  console.log(array)
  var word = array.shift()
  document.getElementById('alpha').innerHTML += word

  // 全文字を出力し終わったらclearIntervalを叩く
  if (array.length == 0) {
    clearInterval(timer)
    timer = null
  }
}
