function check() {
  var weekday = prompt('何曜日ですか？（○曜日）')
  var period = prompt('何時限ですか？（半角数字）')

  switch (weekday) {
    case '月曜日':
      switch (period) {
        case '1':
        case '2':
          alert('コラボレーション技法')
          break
        case '3':
        case '4':
          alert('トップスポーツ論')
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
        case '3':
          alert('ライティング技法')
          break
        case '4':
          alert('プロジェクト英語A')
          break
        default:
          alert('なにも履修していません')
      }
      break
    case '水曜日':
      alert('全休です！！！！！！')
      break
    case '木曜日':
      switch (period) {
        case '1':
          alert('スポーツのデータサイエンス')
          break
        case '2':
          alert('プロジェクト英語A')
          break
        case '3':
          alert('インターネット')
        default:
          alert('なにも履修していません')
      }
      break
    case '金曜日':
      alert('全休です！！！！！')

      break
    default:
      alert('書式を確認して、もう一度入力してください。')
  }
}
