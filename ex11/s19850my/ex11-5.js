function func(json) {
  var ele = document.getElementById('listOfKeio')

  var i
  for (i = 1; i < json.query.allpages.length; i++) {
    ele.innerHTML += i + ': ' + json.query.allpages[i].title + '<br />'
  }
}

function getFromWikipedia() {
  var e = document.getElementById('listOfKeio')
  var o = document.createElement('script')
  o.setAttribute(
    'src',
    'https://ja.wikipedia.org/w/api.php?action=query&list=allpages&apfrom=慶應&aplimit=51&format=json&callback=func'
  )
  e.appendChild(o)
}
