function shotPoison() {
  alert("うわ！１０秒経って毒ガスが噴射されてしまった！ぐああああ")
  window.location.href = "./gameover.html"
}

setTimeout(shotPoison, 10000);
