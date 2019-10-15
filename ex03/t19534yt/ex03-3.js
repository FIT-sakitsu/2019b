function ifVersion() {
  var appetite = prompt(
    '今日の夕飯の気分を洋食/和食/中華/その他で答えてください'
  )
  if (appetite == '洋食') {
    alert('あなたにオススメなレストランはサイゼリア')
  } else if (appetite == '和食') {
    alert('あなたにオススメなレストランは浜かつ')
  } else if (appetite == '中華') {
    alert('あなたにオススメなレストランはバーミヤン')
  } else if (appetite == 'その他') {
    alert('あなたにオススメなレストランはスシロー')
  }
}

function switchVersion() {
  var appetite = prompt(
    '今日の夕飯の気分を洋食/和食/中華/その他で答えてください'
  )

  switch (appetite) {
    case '洋食':
      alert('あなたにオススメなレストランはサイゼリア')
      break

    case '和食':
      alert('あなたにオススメなレストランは浜かつ')
      break

    case '中華':
      alert('あなたにオススメなレストランはバーミヤン')
      break

    case 'その他':
      alert('あなたにオススメなレストランはスシロー')
      break

    default:
  }
}
