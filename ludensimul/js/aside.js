$(function() {
    $('button').click(function() {
      $('aside').toggleClass('open');
      if ($('aside').hasClass('open')) {
        $('aside').stop().animate({ right: 0 }, 500, 'easeInQuad');
        $('button').find('img').attr({ 'src': './img/aside/btn_close.png', 'alt': 'close' });
      } else {
        $('aside').stop().animate({ right: '-220px' }, 500, 'easeOutQuad');
        $('button').find('img').attr({ 'src': './img/aside/btn_open.png', 'alt': 'open' });
      }
    });
  });
  