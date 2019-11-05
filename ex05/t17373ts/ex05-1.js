window.onload = function namelist() {
  var array1 = []
  var array2 = []
  var count = 1
  while (count <= 6) {
    var box = prompt('名前を入力してください')
    if (count <= 3) {
      array1.push(box)
      count = count + 1
    } else if (count >= 4 && count <= 6) {
      array2.push(box)
      count = count + 1
    }
  }
  alert(array1)
  alert(array2)
}
