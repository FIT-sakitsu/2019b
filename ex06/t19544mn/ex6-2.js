function changeC() {
  resetABC();

  var color = document.getElementById("cl").value;
  var ccc = document.getElementsByClassName("ccc");
  for(var i = 0; i < ccc.length; i++) {
    ccc[i].style.background = color;
  }
}

function changeAB() {
 resetABC();

  var color = document.getElementById("cl").value;
  var ab = document.getElementsByClassName("aaa bbb");
  for(var j = 0; j < ab.length; j++) {
    ab[j].style.background = color;
  }
}

function resetABC() {
  var reset = document.getElementsByTagName("p");
  for(var n = 0; n < reset.length; n++){
    reset[n].style.background = "";
  }
}
