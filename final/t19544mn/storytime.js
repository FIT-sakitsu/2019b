function shotPoison() {
  alert("あれ、なんか煙が…あれこれもしかして毒g")
  alert("のんびりしていたら毒ガスにやられてしまった")
  window.location.href = "./gameover.html"
}

setTimeout(shotPoison, 6000);
