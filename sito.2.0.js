$(document).ready(function() {
    // Crea una funzione per lo scorrimento sui link di navigazione
    $('nav a').on('click', function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1000);
    });
  });
  