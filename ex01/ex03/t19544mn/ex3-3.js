var msg = '今日の夕飯の気分を洋食/和食/中華/その他で答えてください'

function dinner_i() {
  var str_i = prompt(msg)

  if (str_i == '洋食') {
    alert('あなたは「オリーブの丘」に行くといいでしょう')
  } else if (str_i == '和食') {
    alert('あなたは「銀蔵」に行くといいでしょう')
  } else if (str_i == '中華') {
    alert('あなたは「バーミヤン」に行くといいでしょう')
  } else {
    alert('あなたは「四六時中」に行くといいでしょう')
  }
}

function dinner_s() {
  var str_s = prompt(msg)

  switch (str_s) {
    case '洋食':
      alert('あなたは「オリーブの丘」に行くといいでしょう')
      break
    case '和食':
      alert('あなたは「銀蔵」に行くといいでしょう')
      break
    case '中華':
      alert('あなたは「バーミヤン」に行くといいでしょう')
      break
    default:
      alert('あなたは「四六時中」に行くといいでしょう')
  }
}
