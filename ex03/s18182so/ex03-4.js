function classs() {
  var weekday = prompt("曜日は？");
  var period = prompt("時限は？");

  switch (weekday) {
    case "月曜日":
      switch (period) {
        case "1":
          alert("数学リテラシー");
          break;
        case "2":
          alert("環境技術計画論");
          break;

        case "3":
          alert("研究会");
          break;

        case "4":
          alert("研究会");
          break;

        case "5":
          alert("日本研究概論");
          break;
        default:
      }

    case "火曜日":
      switch (period) {
        case "１":
          alert("情報基礎２");
          break;

        case "２":
          alert("情報基礎２");
          break;

        case "３":
          alert("まちづくりろん");
          break;
        case "２":
          alert("研究会");
          break;

        case "５":
          alert("看護");
          break;

        default:
          alert("なにも履修していません");
      }

      break;
    default:
  }
}
