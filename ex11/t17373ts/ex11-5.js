function beta(alpha) {
  var ele = document.getElementById('listOfKeio')
  var i
  for (i = 0; i < alpha.query.allpages.length; i++) {
    ele.innerHTML += i + ':' + alpha.query.allpages[i].title + '<br/>'
  }
}

function getDataFromWikipedia() {
  var e = document.getElementById('listOfKeio')
  var o = document.createElement('script')
  o.setAttribute(
    'src',
    'https://ja.wikipedia.org/w/api.php?action=query&list=allpages&apfrom=慶應&aplimit=50&format=json&callback=beta'
  )
  e.appendChild(o)
}
