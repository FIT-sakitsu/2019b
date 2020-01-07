var moji = []

for (i = 0; i < 5; i++) {
  var words = prompt('単語を入れてください。')
  moji.push(words)
}

moji.sort()

for (j = 0; j < 5; j++) {
  alert(moji[j])
}
