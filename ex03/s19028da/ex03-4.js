function klasse() {
  var tag = prompt('曜日は？')
  var stunden = prompt('時限は？')

  switch (tag) {
    case '月曜日':
      switch (stunden) {
        case '1':
          alert('イスラム世界入門')
          break
        case '2':
          alert('ドイツ語スキル')
          break
        case '３':
          alert('ドイツ語スキル')
          break
        case '４':
          alert('ドイツ語SA')
          break
        default:
          alert('何も履修してません')
      }
      break
    case '火曜日':
      switch (stunden) {
        case '1':
          alert('情報基礎２')
          break
        case '2':
          alert('情報基礎２')
          break
        case '３':
          alert('生命と知能の進化')
          break
        default:
          alert('何も履修してません')
      }
      break
    case '水曜日':
      switch (stunden) {
        case '2':
          alert('ドイツ語スキル')
          break
        case '３':
          alert('フランス語ベーシック')
          break
        case '4':
          alert('ドイツ語SA')
          break
        case '5':
          alert('線形代数')
          break
        default:
          alert('何も履修してません')
      }
      break
    case '木曜日':
      switch (stunden) {
        case '2':
          alert('プロジェクト英語')
          break
        case '３':
          alert('認知言語論')
          break
        default:
          alert('何も履修してません')
      }
      break
    case '金曜日':
      switch (stunden) {
        case '4':
          alert('フランス語ベーシック')
          break
        default:
          alert('何も履修してません')
      }
      break
  }
}
