function changeD() {
  var ele1 = document.getElementById("tableCl");
  var ele2 = document.getElementById("theadCl");

  if(ele1.className == "table table-striped table-bordered" || ele2.className == "thead-dark"){
    ele1.className = "table table-dark table-striped";
    ele2.className = "thead-light";
  }
  else {
    ele1.className = "table table-striped table-bordered";
    ele2.className = "thead-dark";
  }
}
