var str = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]
var password = document.getElementById('password')
var result = document.getElementById('result')

var start = new Date().getTime()
for (var i = 0; i < str.length; i++) {
  for (var j = 0; j < str.length; j++) {
    for (var k = 0; k < str.length; k++) {
      password.value = str[i] + str[j] + str[k]
    }
  }
}

var end = new Date().getTime()
result.value = end - start
