function show_alert1() {
  var word = prompt('今日の夕食の気分を洋食/和食/中華/その他で答えてください')
  switch (word) {
    case '洋食':
      alert('おすすすめの洋食屋です')
      break
    case '和食':
      alert('おすすめの和食料理屋です')
      break
    case '中華':
      alert('おすすめの中華料理屋です')
      break
    case 'その他':
      alert('おすすめのその他の料理屋です')
      break
  }
}

function show_alert2() {
  var word = prompt('今日の夕食の気分を洋食/和食/中華/その他で答えてください')

  if (word == '洋食') {
    alert('おすすすめの洋食屋です')
  } else if (word == '和食') {
    alert('おすすめの和食料理屋です')
  } else if (word == '中華') {
    alert('おすすめの中華料理屋です')
  } else if (word == 'その他') {
    alert('おすすめのその他の料理屋です')
  }
}
