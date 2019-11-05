function namae() {
  var array = []
  for (i = 0; i < 6; i++) {
    var name = prompt('名前を入力をしてください')
    array.push(name)
  }
  alert(array[0] + ',' + array[1] + ',' + array[2])
  alert(array[3] + ',' + array[4] + ',' + array[5])
}
