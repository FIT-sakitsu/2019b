function checkClass() {
  var weekday = prompt('曜日は？')
  var period = prompt('時限は？')

  switch (weekday) {
    case '月曜日':
      switch (period) {
        case '３':
          alert('デザイン観察基礎')
          break

        case '４':
          alert('デザイン観察基礎')
          break
        default:
      }

    case '火曜日':
      switch (period) {
        case '１':
          alert('情報基礎２')
          break

        case '２':
          alert('情報基礎２')
          break

        case '３':
          alert('')
          break

        case '５':
          alert('ライティング技法ワークショップ')
          break
        default:
      }

    case '水曜日':
      switch (period) {
        case '２':
          alert('プロジェクト英語A')
          break

        case '４':
          alert('体育')
          break
        default:
      }

    case '木曜日':
      switch (period) {
        case '２':
          alert('体育')
          break

        case '３':
          alert('デザイン言語実践')
          break

        case '４':
          alert('デザイン言語実践')
          break

        case '５':
          alert('鳴川研')
          break

        case '６':
          alert('鳴川研')
          break

        default:
          alert('なにも履修していません')
      }

      break
    default:
  }
}
