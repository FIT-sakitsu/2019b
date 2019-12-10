function searchClass(week, period) {
  switch (week[0]) {
    case '月':
      var weekB = 1
      break
    case '火':
      var weekB = 2
      break
    case '水':
      var weekB = 3
      break
    case '木':
      var weekB = 4
      break
    case '金':
      var weekB = 5
      break
    default:
      var weekB = []
  }
  var title = document.getElementsByTagName('tr')[period].children[weekB]
    .innerHTML
  return title
}

function execute() {
  var week = document.getElementById('weekday').value
  var period = document.getElementById('period').value
  var title = searchClass(week, period)

  alert(title)
}
