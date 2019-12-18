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
          return '情報基礎2'
      }
      break
  }
  return '履修している科目はありません'
}
