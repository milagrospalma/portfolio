// alert('Página en construcción ;)');
$(document).ready(function() {
  $('.button-collapse').sideNav();

  var $navOptions = $('nav li');
  
  $navOptions.on('click', function() {
    // TO DO: Debe seleccionarse solo un li
    $navOptions.addClass('active');
  });
});