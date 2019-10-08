function alpha() {
  var userInput = prompt(
    '今日の夕飯の気分を 洋食/和食/中華/その他 で答えてください'
  )
  if (userInput == '洋食') {
    alert('店舗A')
  } else if (userInput == '和食') {
    alert('店舗B')
  } else if (userInput == '中華') {
    alert('店舗C')
  } else if (userInput == 'その他') {
    alert('店舗D')
  } else {
    alert('洋食/和食/中華/その他 で答えてください')
  }
}
function beta() {
  var userInput = prompt(
    '今日の夕飯の気分を 洋食/和食/中華/その他 で答えてください'
  )
  switch (userInput) {
    case '洋食':
      alert('店舗A')
      break
    case '和食':
      alert('店舗B')
      break
    case '中華':
      alert('店舗C')
      break
    case 'その他':
      alert('店舗D')
      break
    default:
      alert('洋食/和食/中華/その他 で答えてください')
  }
}
