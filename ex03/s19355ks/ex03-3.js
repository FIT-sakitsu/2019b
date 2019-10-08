function ifVersion() {
  var appetite = prompt(
    '今日の夕飯の気分を洋食/和食/中華/その他で答えてください'
  )

  if (appetite == '洋食') {
    alert('ぺピタライオン')
  } else if (appetite == '和食') {
    alert('大戸屋')
  } else if (appetite == '中華') {
    alert('サイコウエン')
  } else if (appetite == 'その他') {
    alert('マクドナルド')
  }
}

function switchVersion() {
  var appetite = prompt(
    '今日の夕飯の気分を洋食/和食/中華/その他で答えてください'
  )

  switch (appetite) {
    case '洋食':
      alert('ニューオリンズ')
      break

    case '和食':
      alert('料亭')
      break

    case '中華':
      alert('横浜中華街のどこか')
      break

    case 'その他':
      alert('ボンバ')
      break
    default:
      alert('理解できません')
  }
}
