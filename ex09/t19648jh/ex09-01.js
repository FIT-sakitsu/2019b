function jyugyou() {
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
    case 'fri':
      switch (period) {
        case '3':
          return '多言語社会コミュニケーション'
          break
      }
    case 'wed':
      switch (period) {
        case '3':
          return '日本語スキル'
          break
      }
    case 'thu':
      switch (period) {
        case '3':
        case '4':
          return 'デザイン言語実践'
      }
    default:
      return '履修している科目はありません'
  }
}
