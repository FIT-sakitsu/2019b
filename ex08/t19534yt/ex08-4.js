function charenge() {
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
    ''
  )

  ele = document.getElementById('password')

  t_start = new Date().getTime()

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str.length; j++) {
      for (var k = 0; k < str.length; k++) {
        ele.value = str[i] + str[j] + str[k]
      }
    }
  }

  t_end = new Date().getTime()
  alert('かかった時間は' + (t_end - t_start) + 'ミリ秒です')
}
