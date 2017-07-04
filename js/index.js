amplitude.getInstance().logEvent('Main Page');

var sessionId = amplitude.getInstance()._sessionId;


// User logs in
$('#loginform').click(function(){
  amplitude.getInstance().logEvent('Login');
  if ($('.register').css('display') != 'none'){
    $('.register').hide();
  }
  $('.login').fadeToggle('slow');

    document.getElementById('login').onclick = function(){
    amplitude.getInstance().logEvent('Login');
    amplitude.getInstance().setUserId(document.getElementById('login_email').value);
  }

});

// User registers
$('#registerform').click(function(){
  if ($('.login').css('display') != 'none'){
    $('.login').hide();
  }
  $('.register').fadeToggle('slow');

  document.getElementById('register').onclick = function(){
    amplitude.getInstance().logEvent('Register');
    amplitude.getInstance().setUserId(document.getElementById('register_email').value);
    amplitude.getInstance().setGroup('Company', document.getElementById('company').value);
    amplitude.getInstance().ssetUserProperties({'Company': document.getElementById('company').value});
  }
});

// User clicks on "B2B"
$('#loginform').click(function(){
  amplitude.getInstance().logEvent('Login');
  if ($('.register').css('display') != 'none'){
    $('.register').hide();
  }
  $('.login').fadeToggle('slow');

    document.getElementById('login').onclick = function(){
    amplitude.getInstance().logEvent('Login');
    amplitude.getInstance().setUserId(document.getElementById('login_email').value);
  }

});