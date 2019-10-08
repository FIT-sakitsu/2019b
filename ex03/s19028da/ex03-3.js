function fragen() {
  var essen = prompt(
    '今日の夕飯の気分を 洋食/和食/中華/その他 で答えてください'
  )
  if (essen == '洋食') {
    alert('ガスト')
  } else if (essen == '和食') {
    alert('大戸屋')
  } else if (essen == '中華') {
    alert('餃子の王将')
  } else if (essen == 'その他') {
    alert('マック')
  }
}

function question() {
  var essen = prompt(
    '今日の夕飯の気分を 洋食/和食/中華/その他 で答えてください'
  )

  switch (essen) {
    case '洋食':
      alert('ガスト')
      break
    case '和食':
      alert('大戸屋')
      break
    case '中華':
      alert('餃子の王将')
      break
    case 'その他':
      alert('マック')
      break
  }
}
