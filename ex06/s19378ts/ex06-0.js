function changeCSS() {
   var table = document.getElementById('table')
   var currentClassName = table.className
   switch (currentClassName) {
     case 'table':
       currentClassName = 'table table-dark'
       break
     case 'table table-dark':
       currentClassName = 'table'
       break
   }
   table.className = currentClassName
 }
