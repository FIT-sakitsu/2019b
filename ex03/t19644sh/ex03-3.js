function Ifversion() {
  var appitite = prompt(
    '今日の夕飯の気分を 洋食/和食/中華/その他 で答えてください'
  )

  if (appitite == '洋食') {
    alert('とらひげ')
  } else if (appitite == '和食') {
    alert('ぎょしん')
  } else if (appitite == '中華') {
    alert('武蔵家')
  } else if (appitite == 'その他') {
    alert('ドマーレ')
  }
}

function Switchversion() {
  var appitite = prompt(
    '今日の夕飯の気分を　洋食/和食/中華/その他 で答えてください'
  )

  switch (appitite) {
    case '洋食':
      alert('とらひげ')
      break
    case '和食':
      alert('ぎょしん')
      break
    case '中華':
      alert('武蔵家')
      break
    default:
      alert('ドマーレ')
  }
}
