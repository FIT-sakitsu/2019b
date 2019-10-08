function question1() {
  var meal = prompt('今日の夕飯の気分を 洋食/和食/中華/その他 で答えてください')

  if (meal == '洋食') {
    alert('洋食店')
  } else if (meal == '和食') {
    alert('和食店')
  } else if (meal == '中華') {
    alert('中華料理店')
  } else if (meal == 'その他') {
    alert('ビュッフェ')
  }
}

function question2() {
  var meal = prompt('今日の夕飯の気分を 洋食/和食/中華/その他 で答えてください')

  switch (meal) {
    case '洋食':
      alert('洋食店')
      break
    case '和食':
      alert('和食店')
      break
    case '中華':
      alert('中華料理店')
      break
    case 'その他':
      alert('ビュッフェ')
      break
  }
}
