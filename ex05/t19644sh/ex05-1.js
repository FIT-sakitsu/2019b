function names() {
  var names = []
  for (var i = 0; i < 6; i++) {
    var name = prompt('名前を入力')
    names.unshift(name)
  }
  alert(names[0] + '、' + names[1] + '、' + names[2])
  alert(names[3] + '、' + names[4] + '、' + names[5])
}
