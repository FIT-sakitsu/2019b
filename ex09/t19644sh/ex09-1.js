function search() {
  var week = document.getElementById('week').value
  var period = document.getElementById('period').value
  alert(sum(week, period))
}

function sum(week, period) {
  switch (week) {
    case 'monday':
      switch (period) {
        case '1':
          return 'コラボレーション技法'
      }
    case 'tuesday':
      switch (period) {
        case '1':
        case '2':
          return '情報基礎2'
      }
    default:
      return '履修している科目はありません。'
  }
}
