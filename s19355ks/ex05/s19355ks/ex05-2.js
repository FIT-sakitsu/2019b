var words = ['a', 'b', 'c', 'd', 'e']

for (var i = 0; i < 5; i++) {
  var word = prompt('文字列を入れてね')
  words.push(word)
}

words.sort()
for (var x = 0; x < words.length; x++) {
  alert(words[x])
}
