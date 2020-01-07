function line() {
  var element = document.getElementById("sent");

  if(element.style.textDecoration == ""){
    element.style.textDecoration = "line-through";
  }
  else {
    element.style.textDecoration = "";
  }
}
