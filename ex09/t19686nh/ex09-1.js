function Class() {
  var week = document.getElementById('week').value
  var period = document.getElementById('period').value
  var title = classTitle(week, period)
  alert(title)
}

function classTitle(week, period) {
  switch (week) {
    case 'tue':
      switch (period) {
        case '1':
        case '2':
          return '情報基礎２'
      }
    case 'fri':
      switch (period) {
        case '5':
          return '研究会'
      }
    default:
      return '何も履修していません'
  }
}
