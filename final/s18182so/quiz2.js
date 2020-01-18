//<!-- 配列変数＝[問題,選択肢１,選択肢２,選択肢３,正解番号]の順番で表示する -->
qa = new Array()

qa[0] = ['血管を全部つなげると何km？', '42km', '500km', '10万km', 3]
qa[1] = [
  '乳幼児と大人はどちらの方が骨の数が多い？？',
  '乳幼児',
  '同じ',
  '成人',
  1,
]
qa[2] = ['胃の不調を改善する色は？', '黄色', '白', '緑', 1]
qa[3] = ['10円のうまい棒たこ焼き味の原価は？', '３円', '６円', '９円', 3]
qa[4] = ['ゴリラの血液型は何種類？', '１種類', '４種類', '３兆種類', 1]
qa[5] = ['体内で一番温度が高い臓器は？', '心臓', '肝臓', 'カリウム', 2]
qa[6] = ['金属でないものは？', 'ヘリウム', 'バリウム', 'カリウム', 1]
qa[7] = [
  '電池の発明のきっかけとなった生き物は？',
  'カエル',
  'サル',
  'マウス',
  1,
]
qa[8] = ['二日酔いにきく果物は？', 'みかん', 'かき', 'りんご', 2]
qa[9] = ['一日に必要といわれている水分量は？', '1L', '2L', '2.5', 3]
//<!-- 初期設定 -->
//<!-- 変数”q_choice”を使う -->

q_choice = 3 //<!-- 選択肢の数 -->

configure()

//<!-- 初期設定 -->
function configure() {
  count = 0 //<!-- 問題番号 -->
  ansers = new Array() //<!--//解答記録 -->

  //<!--  //最初の問題 -->
  quiz()
}

//<!--//問題表示 -->
function quiz() {
  var s, n
  //<!--//問題 -->
  document.getElementById('question').innerHTML =
    count + 1 + '問目：' + qa[count][0]
  //<!--//選択肢 -->
  s = ''
  for (n = 1; n <= q_choice; n++) {
    s +=
      "【<a href='javascript:anser(" +
      n +
      ")'>" +
      n +
      '：' +
      qa[count][n] +
      '</a>】'
  }
  document.getElementById('choice').innerHTML = s
}
//<!--解答表示 -->
function anser(num) {
  var s
  s = count + 1 + '問目：'
  //<!--答え合わせ -->
  if (num == qa[count][q_choice + 1]) {
    //  <!--正解 -->
    ansers[count] = '○'
  } else {
    ansers[count] = '×'
  }
  s += ansers[count] + qa[count][num]
  document.getElementById('answer').innerHTML = s

  //<!--次の問題を表示 -->
  count++
  if (count < qa.length) {
    quiz()
  } else {
    //<!--終了 -->
    s = "<table border='2'><caption>成績発表</caption>"

    //<!--一行目 -->
    s += '<tr><th>問題</th>'
    for (n = 0; n < qa.length; n++) {
      s += '<th>' + (n + 1) + '</th>'
    }
    s += '</tr>'
    //<!--二行目 -->
    s += '<tr><th>成績</th>'
    for (n = 0; n < qa.length; n++) {
      s += '<td>' + ansers[n] + '</td>'
    }
    s += '</tr>'
    s += '</table>'
    document.getElementById('answer').innerHTML = s

    document.getElementById('question').innerHTML = ''
    document.getElementById('choice').innerHTML = ''
  }
}
