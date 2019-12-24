function search() {
  var weekday = document.getElementById('weekday').value
  var periods = document.getElementById('periods').value
  alert(classTitle(weekday, periods))
}

function classTitle(weekday, periods) {
  switch (weekday) {
    case 'mon':
      switch (periods) {
        case '3':
        case '4':
          return 'ノーテーションと表現'
      }
      break
    case 'tue':
      switch (periods) {
        case '1':
        case '2':
          return '情報基礎２'
        case '5':
          return 'ライティング技法ワークショップ'
      }
      break
  }

  return '履修している授業はありません。'
}
