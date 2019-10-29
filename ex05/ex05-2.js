var names = []

for (var i = 0; i < 5; i++) {
  var name = prompt('名前を入力してください')
  names.push(name)
}

names.sort()

for (var i = 0; i < 5; i++) {
  alert(names[i])
}
