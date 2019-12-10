function search() {
  var week = document.getElementById('week').value
  var period = document.getElementById('period').value
  alert(classTitle(week, period))
}
function classTitle(week, period) {
  switch (week) {
    case 'tue':
      switch (period) {
        case '1':
        case '2':
          return '情基礎2'
      }
    case 'wed':
      switch (period) {
        case '3':
          return '中国語'
      }
    default:
      return '履修している科目はありません'
  }
}
