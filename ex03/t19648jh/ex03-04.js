function classdesu() {
  var day = prompt('曜日は？')
  var time = prompt('時限は？')

  switch (day) {
    case '月曜日':
      switch (time) {
        case '3':
        case '4':
          alert('デザイン観察基礎')
          break
        default:
          alert('何も履修していません')
      }
      break
    case '火曜日':
      switch (time) {
        case '1':
        case '2':
          alert('情報基礎２')
          break
        default:
          alert('何も履修していません')
      }
      break

    case '水曜日':
      switch (time) {
        case '3':
          alert('日本語スキル2B')
          break
        default:
          alert('何も履修していません')
      }
      break

    case '木曜日':
      switch (time) {
        case '2':
          alert('戦略的交渉論')
          break
        default:
          alert('何も履修していません')
      }
      break
    case '金曜日':
      switch (time) {
        case '2':
          alert('微分・積分')
          break
        default:
          alert('何も履修していません')
      }
      break
  }
}
