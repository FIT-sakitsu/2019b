function moji() {
  var array = []
  for (i = 0; i < 5; i++) {
    var kai = prompt('好きな食べ物を教えてください')
    array.push(kai)
  }
  array.sort()

  for (var i = 0; i < array.length; i++) {
    alert(array[i])
  }
}
