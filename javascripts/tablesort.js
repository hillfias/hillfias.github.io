document$.subscribe(function() {
  var tables = document.querySelectorAll("article table:not([class])")
  tables.forEach(function(table) {
    new Tablesort(table)
  })
})

window.onload = function() {
  document.body.addEventListener('touchstart', function() {}, false);
}