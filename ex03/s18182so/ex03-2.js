function uranai() {
  var num = Math.random();
  alert("乱数の値は" + num + "でした。");
  if (num < 0.1) {
    // 2の倍数
    alert("凶");
  } else if (0.1 <= num && num < 0.33) {
    // 3の倍数
    alert("小吉");
  } else if (0.33 <= num && num < 0.66) {
    // 3の倍数
    alert("中吉");
  } else if (0.66 < num) {
    // 3の倍数
    alert("大吉");
  }
}
