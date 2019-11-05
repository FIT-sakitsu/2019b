var box = []
var num = 1
while (num <= 5) {
  box.push(prompt('文字列'))
  num++
}

box.sort()
var numA = 0
function dictionary() {
  while (numA <= 4) {
    alert(box[numA])
    numA++
  }
}
