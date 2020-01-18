function initLife() {
  var life = [1,1,1];
  $.cookie('life', life);
}

function life_point() {
  life = $.cookie('life').split(',');
  life.shift();
  if(life.length == 0){
    alert("ライフが０になってしまった");
    window.location.href = "./gameover.html";
  }
  else {
    alert("残りライフは" + life.length + "です");
  }
  $.cookie('life', life);
}

function entry() {
  var name = document.getElementById('name').value;
  $.cookie('name', name);
  initLife()
  window.location.href = "./story.html"

}

var hitD = 0;
function dresser() {
  hitD = hitD + 1;
  if(hitD == 20) {
    alert("ドレッサーが壊れて中から毒ヘビが出てきた！");
    life_point();
  }
}

var hitT = 0;
function tansu() {
  hitT = hitT + 1;
  if(hitT == 20) {
    alert("タンスが壊れて中から毒蜘蛛が出てきた！");
    life_point()
  }
}

var hitC = 0;
function closet() {
  hitC = hitC + 1;
  if(hitC == 20) {
    alert("やった！鍵があった。")
    alert("次の部屋へ行こう。");
    window.location.href = "./room2.html"
  }
}

function left() {
  alert("やった！鍵があった。");
  alert("次の部屋へ行こう。");
  window.location.href = "./room3.html"
}

function center() {
  alert("うわっ。腐ったバナナに触っちゃった。");
  alert("バナナが気持ち悪すぎてライフが０になってしまった")
  window.location.href = "./gameover.html";
}

function right() {
  alert("うわっ。すごく大きなゴキブリに触っちゃった。");
  alert("ゴキブリが気持ち悪すぎてライフが０になってしまった")
  window.location.href = "./gameover.html";
}

function ans3() {
  var ans3 = document.getElementsByName("room3");
  for(var i = 0; i < ans3.length; ++i){
    if(ans3[i].checked) {
      var tf = ans3[i].value;
    }
  }
  if(tf == 'true') {
    alert("左側の壁が開いて鍵が出てきた！");
    alert("次の部屋へ行こう。");
    window.location.href = "./room4.html";
  }
  else {
    alert("天井からバナナが降ってきた…。");
    life_point()
  }
}

function ans4() {
  var ans = document.getElementById("price").value;
  if(ans == 5) {
    alert("天井から鍵が降ってきた。どうやら正解のようだ。");
    alert("次の部屋へ行こう。")
    window.location.href = "./epilogue.html"
  }
  else {
    alert("天井からタライが降ってきた。どうやら違うようだ。");
    life_point()
  }
}
