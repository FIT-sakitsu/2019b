function ex0501() {
  var names = []

  for (var i = 1; i <= 6; i++) {
    var name = prompt('名前を入力してください')
    names.push(name)
  }

  alert(names[0] + names[1] + names[2])
  alert(names[3] + names[4] + names[5])
}
