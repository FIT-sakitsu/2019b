function beta() {
  var str = []
  delta(str, 'a', 'z')
  delta(str, 'A', 'Z')
  delta(str, '0', '9')

  var ele = document.getElementById('bruteForce')

  var t_start = new Date().getTime()

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str.length; j++) {
      for (var k = 0; k < str.length; k++) {
        ele.value = str[i] + str[j] + str[k]
      }
    }
  }

  var t_end = new Date().getTime()

  alert('かかった時間は' + (t_end - t_start) + 'ミリ秒です')
}

function delta(str, from, to) {
  for (var i = from.charCodeAt(0); i <= to.charCodeAt(0); i++) {
    str.push(String.fromCharCode(i))
  }
}
