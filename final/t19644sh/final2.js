function quiz() {
  var x = document.getElementsByName('answer')
  for (var i = 0; i < x.length; i = i + 1) {
    if (x[i].checked) {
      if (
        i == 0 ||
        i == 3 ||
        i == 6 ||
        i == 10 ||
        i == 14 ||
        i == 16 ||
        i == 20
      ) {
        alert('正解です！')
      } else {
        alert('不正解です！')
      }
    }
  }
}
