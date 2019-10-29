function iftest() {
  var str = prompt('今日の夕飯の気分を 洋食/和食/中華/その他 で答えてください')

  if (str == '洋食') {
    alert('ペピタ')
  } else if (str == '和食') {
    alert('サントスー')
  } else if (str == '中華') {
    alert('一蘭')
  } else {
    alert('食堂')
  }
}

switch (expression) {
  case '洋食':
    alert('ペピタ')

    break

  case '和食':
    alert('サントスー')
    break

  case '中華':
    alert('一蘭')

    break

  case 'その他':
    alert('食堂')

    break
  default:
}
