var str = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var password = document.getElementById('password')
var result = document.getElementById('result')

var start = new Date().getTime()
for (var i = 0; i < str.length; i++) {
  for (var j = 0; j < str.length; j++) {
    for (var k = 0; k < str.length; k++) {
      for (var l = 0; l < str.length; l++) {
        for (var m = 0; m < str.length; m++) {
          for (var n = 0; n < str.length; n++) {
            password.value = str[i] + str[j] + str[k] + str[l] + str[m] + str[n]
          }
        }
      }
    }
  }
}

var end = new Date().getTime()
result.value = end - start
