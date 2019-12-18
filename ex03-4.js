function show_alert() {
  var weekday = prompt('曜日は？')
  var period = prompt('時限は？')

  if (weekday == '月曜日') {
    if (period == '1') {
      alert('都市と環境')
    }

    if (period == '２') {
      alert('オーラルヒストリーゼミ')
    }

    if (period == '３') {
      alert('オーラルヒストリーゼミ')
    }

    if (period == '４') {
      alert('休み')
    }

    if (period == '５') {
      alert('休み')
    }
  } else if (weekday == '火曜日') {
    if (period == '１') {
      alert('情報基礎２')
    }

    if (period == '２') {
      alert('情報基礎２')
    }

    if (period == '３') {
      alert('休み')
    }

    if (period == '４') {
      alert('地域協働とフィールドワーク')
    }

    if (period == '４') {
      alert('地域協働とフィールドワーク')
    }

    if (period == '５') {
      alert('ライティング技法ワークショップ')
    }
  } else {
    alert('休み')
  }
}
