$(document).ready(function() {
  var jb = $('li').get(0)
  $('ul').after('<p>' + jb.innerHTML + '</p>')
})

var jNum = prompt('今年で彼女は幾つになるんでしょう', '自分の運を試してみよう')
if (jNum < 20) {
  document.write('<p>それはバブじゃん</p>')
} else if (jNum == 20) {
  document.write('<p>今年で二十歳になる！正解！</p>')
} else {
  document.write('<p>チャーう</p>')
}
