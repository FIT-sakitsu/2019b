function search() {
  var week = document.getElementById('week').value
  var period = document.getElementById('period').value
  alert(classTitle(week, period))
}

function classTitle(week, period) {
  switch (week) {
    case 'mon':
      switch (period) {
        case '1':
          return '都市と環境'
        case '2':
          return '研究会'
          case 'mon':
            switch (period) {
              case '1':
              case '2':
                return '情報基礎'
      }
    default:
      return '履修している科目はありません'
  }
}
