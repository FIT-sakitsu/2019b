

function question() {

var word = prompt("あなたは中学生？高校生？大学生？社会人？");
switch (word) {
  case "中学生":
    alert("まだまだ数学は難しくなります！");
    break;

  case "高校生":
    alert("高校数学は辛いよ。");
    break;

  case "大学生":
    alert("大学数学は高度すぎてなかなか手を出せないイメージありますよね。");
    break;

    case "社会人":
      alert("社会に出て高等数学を使う機会がどれくらいあるのか気になりませんか？");
      break;

  default:
    alert("あなたは何者ですか？");
}

}


function math() {

var word =prompt("計算できるかな？");

 sum = 0;
for( i=1 ; i<=100 ; i++ )
{
  sum = sum + i;
}
alert( '答えは5050！小学生でも暗算できるよね！');

}
