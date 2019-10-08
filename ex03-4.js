function iftest() {
  var weekday = prompt('曜日は？')
  var period = prompt('時限は？')

  if (weekday == '月曜日') {
    if (period == 3 || period == 4) {
      alert('ノーテーション')
    } else if (period == 5) {
      alert('中国語')
    }
  } else if (weekday == '火曜日') {
    if (period == 1 || period == 2) {
      alert('情報基礎２')
    } else if (period == 3 || period == 4) {
      alert('デザインスタジオ基礎')
    } else if (period == 5) {
      alert('ミクロ経済２')
    }
  } else if (weekday == '水曜日') {
    if (period == 1) {
      alert('英語')
    } else if (period == 2) {
      alert('データ・ドリブン')
    } else if (period == 4) {
      alert('中国語')
    }
  } else if (weekday == '木曜日') {
    if (period == 5 || period == 6) {
      alert('研究会A')
    } else {
      alert('なし')
    }
  }
}
