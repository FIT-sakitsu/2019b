function schedule(day, period) {
  if (day == 'tue') {
    if (period == '1' || period == '2') {
      return '情報基礎２'
    } else {
      return '履修している科目はありません'
    }
  } else if (day == 'wed') {
    if (period == '1') {
      return 'プロジェクト英語B'
    }
  } else {
    return '履修している科目はありません'
  }
}

function schedule2() {
  var day = document.getElementById('day').value
  var period = document.getElementById('period').value
  var title = schedule(day, period)
  alert(title)
}

/*

function searchClass() {
  var day = document.getElementById('day')
  var period = document.getElementById('period')
  var title = classTitle(day, period)
  alert(title)
}


function classTitle(week, period) {
  return '授業名'
}
*/
