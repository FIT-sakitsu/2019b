function period() {
  var d = prompt('曜日は？')
  var p = prompt('時限は？')

  if (d == '月') {
    if (p == '1') {
      alert('サブカルチャーと社会認識')
    } else {
      alert('何も履修していません')
    }
  } else if (d == '火') {
    if (p == '1' || p == '2') {
      alert('情報基礎２')
    } else if (p == '3') {
      alert('生命と知能の進化')
    } else {
      alert('何も履修していません')
    }
  } else if (d == '水') {
    if (p == '1') {
      alert('プロジェクト英語B')
    } else if (p == '3') {
      alert('統計基礎')
    } else {
      alert('何も履修していません')
    }
  } else if (d == '木') {
    if (p == '3') {
      alert('認知心理学')
    } else if (p == '4' || p == '5') {
      alert('研究会')
    } else {
      alert('何も履修していません')
    }
  } else if (d == '金') {
    if (p == '1') {
      alert('知覚・認知モデル論１')
    } else if (p == '2') {
      alert('プロジェクト英語B')
    } else {
      alert('何も履修していません')
    }
  } else {
    alert('何も履修していません')
  }
}
