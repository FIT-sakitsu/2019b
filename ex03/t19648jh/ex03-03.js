function ifver() {
  var gohan = prompt(
    '今日の夕飯の気分を 洋食/和食/中華/その他 で答えてください！'
  )
  if (gohan == '洋食') {
    alert('improve')
  } else if (gohan == '和食') {
    alert('はま寿司')
  } else if (gohan == '中華') {
    alert('湘南菊華大飯店 ')
  } else if (gohan == 'その他') {
    alert('ざんまい(わかってるお店)')
  }
}

function switchver() {
  var gohan1 = prompt(
    '今日の夕飯の気分を 洋食/和食/中華/その他 で答えてください！'
  )
  switch (gohan1) {
    case '洋食':
      alert('improve')
      break
    case '和食':
      alert('はま寿司')
      break
    case '中華':
      alert('湘南菊華大飯店')
      break
    case 'その他':
      alert('ざんまい（行くべきよ！！！！）')
      break
  }
}
