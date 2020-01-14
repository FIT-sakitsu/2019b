function entry() {
  var name = document.getElementById('name').value;
  $.cookie('name', name);
  window.location.href = "./story.html"
}

var hitD = 0;
function dresser() {
  hitD = hitD + 1;
  if(hitD == 20) {
    alert("ドレッサーが壊れて中から毒ヘビが出てきた！");
  }
}

var hitT = 0;
function tansu() {
  hitT = hitT + 1;
  if(hitT == 20) {
    alert("タンスが壊れて中から毒蜘蛛が出てきた！");
  }
}

var hitC = 0;
function closet() {
  hitC = hitC + 1;
  if(hitC == 20) {
    alert("やった！鍵があった。次の部屋へ行こう。")
    window.location.href = "./room2.html"
  }
}

function left() {
  alert("やった！鍵があった。次の部屋へ行こう。");
  window.location.href = "./room3.html"
}

function center() {
  alert("うわっ。腐ったバナナに触っちゃった。");
}

function right() {
  alert("うわっ。すごく大きなゴキブリに触っちゃった。");
}

function ans3() {
  var ans = document.getElementById("price").value;
  if(ans == 5) {
    alert("天井から鍵が降ってきた。どうやら正解のようだ。");
    alert("次の部屋へ行こう。")
    window.location.href = "./epilogue.html"
  }
  else {
    alert("天井からタライが降ってきた。どうやら違うようだ。");
  }
}
