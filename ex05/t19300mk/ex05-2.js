var word5 = []
for (var i = 0; i < 5; i++) {
  var word = prompt('文字列を入力して下さい')
  word5.push(word)
}
word5.sort()
for (var m = 0; m < word5.length; m++) {
  alert(word5[m])
}
