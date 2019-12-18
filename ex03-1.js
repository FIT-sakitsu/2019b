function show_alert() {
  var word = prompt('今日の天気は何ですか？')
  switch (word) {
    case '晴れ':
      alert('素敵な１日を！')
      break
    default:
      alert('今日も頑張りましょう！')
  }
}
