function ifVersion() {
  var appetite = prompt(
    '今日の夕飯の気分を洋食/和食/中華/その他で答えてください'
  )
  if (appetite == '洋食') {
    alert('「ポポロ」というお店がおすすめです')
  } else if (appetite == '和食') {
    alert('「ひより」というお店がおすすめです')
  } else if (appetite == '中華') {
    alert('「横浜中華街」に訪れることをおすすめします')
  } else if (appetite == 'その他') {
    alert('「ひな野」というお店でバイキングなどがおすすめです')
  }
}
function switchVersion() {
  var appetite = prompt(
    '今日の夕飯の気分を洋食/和食/中華/その他で答えてください'
  )
  switch (appetite) {
    case '洋食':
      alert('「ポポロ」というお店がおすすめです')
      break
    case '和食':
      alert('「ひより」というお店がおすすめです')
      break
    case '中華':
      alert('「横浜中華街」に訪れることをおすすめします')
      break
    case 'その他':
      alert('「ひな野」というお店でバイキングなどがおすすめです')
      break
    default:
      alert('理解できません')
  }
}
