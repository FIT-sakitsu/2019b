var names = ['田中', '山下', '本田', '山本', '斎藤', '上田']

for (var i = 0; i < 6; i++) {
  var name = prompt('名前を入力してね')
  names.push(name)
}

alert(names[1] + names[2] + names[3])
alert(names[4] + names[5] + names[0])
