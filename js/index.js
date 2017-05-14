$('input[type="submit"]').mousedown(function(){
  $(this).css('background', '#22BBB3');
});

$('input[type="submit"]').mouseup(function(){
  $(this).css('background', '#00a7cf');
});

$('#loginform').click(function(){
  if ($('.register').css('display') != 'none'){
    $('.register').hide();
  }

  $('.login').fadeToggle('slow');
});

$('#registerform').click(function(){
  if ($('.login').css('display') != 'none'){
    $('.login').hide();
  }
  $('.register').fadeToggle('slow');
});
