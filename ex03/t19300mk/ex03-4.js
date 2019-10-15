function checkClass() {
  var weekday = prompt('曜日は？')
  var period = prompt('時限は？')

  switch (weekday) {
    case '月曜日':
      switch (period) {
        case '1':
          alert('問題発見・解決のためのリテラシー')
          break
        case '3':
          alert('中国語')
          break
        case '5':
          alert('スマートデバイスプログラミング')
          break
        default:
          alert('なにも履修していません')
      }
      break
    case '火曜日':
      switch (period) {
        case '1':
          alert('情報基礎2')
          break
        case '2':
          alert('情報基礎2')
          break
        case '4':
          alert('青山研')
          break
        case '5':
          alert('青山研')
          break
        default:
          alert('なにも履修していません')
      }
      break
    case '水曜日':
      switch (period) {
        case '3':
          alert('中国語')
          break
        default:
          alert('なにも履修していません')
      }
      break
    case '木曜日':
      switch (period) {
        case '2':
          alert('プロジェクト英語A')
          break
        case '3':
          alert('脳情報科学')
          break
        default:
          alert('なにも履修していません')
      }
      break
    case '金曜日':
      switch (period) {
        case '2':
          alert('微分・積分')
          break
        case '6':
          alert('デザインとプログラミング')
          break
        default:
          alert('なにも履修していません')
      }

      break
    default:
      alert('理解できません')
  }
}
