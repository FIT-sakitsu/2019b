var words = []

for (var i = 0; i < 5; i++) {
  var word = prompt('文字列を入力してください')
  words.push(word)
}
words.sort()

for (var j = 0; j < words.length; j++) {
  alert(words[j])
}
