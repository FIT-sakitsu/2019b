var names = []

for (var i = 0; i < 6; i++) {
  var inputName = prompt('名前を入力してください')
  names.push(inputName)
}

alert(names[0] + ',' + names[1] + ',' + names[2])
alert(names[3] + ',' + names[4] + ',' + names[5])
