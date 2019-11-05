function question() {
  var week = prompt('曜日は?')
  var theclass = prompt('時限は?')

  if (week == '月曜日') {
    if (theclass == '3限' || theclass == '4限') {
      alert('運動の生理と心理')
      return
    }
  }
  if (week == '火曜日') {
    if (theclass == '1限' || theclass == '2限') {
      alert('情報基礎2')
      return
    }
  }
  if (week == '火曜日') {
    if (theclass == '3限') {
      alert('生命と知能の進化')
      return
    }
  }
  if (week == '火曜日') {
    if (theclass == '4限') {
      alert('細胞レベルの生命科学による革新')
      return
    }
  }
  if (week == '水曜日') {
    if (theclass == '2限') {
      alert('プロジェクト英語A')
      return
    }
  }
  if (week == '水曜日') {
    if (theclass == '3限') {
      alert('統計基礎')
      return
    }
  }
  if (week == '木曜日') {
    if (theclass == '1限') {
      alert('プロジェクト英語A')
      return
    }
  }
  if (week == '木曜日') {
    if (theclass == '2限' || theclass == '3限') {
      alert('基礎分子生物学')
      return
    }
  }
  if (week == '木曜日') {
    if (theclass == '4限') {
      alert('脳情報科学')
      return
    }
  }
  if (week == '金曜日') {
    if (theclass == '5限') {
      alert('研究会B')
      return
    }
  }

  alert('何も履修していません')
}
