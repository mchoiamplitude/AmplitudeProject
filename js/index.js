amplitude.getInstance().regenerateDeviceId();
var sessionId = amplitude.getInstance()._sessionId;

// User logs in
$('#loginform').click(function(){
  if ($('.register').css('display') != 'none'){
    $('.register').hide();
  }
  $('.login').fadeToggle('slow');

  document.getElementById('login').onclick = function(){
    amplitude.getInstance().setUserId(document.getElementById('login_email').value);
    amplitude.getInstance().logEvent('Login');
    $('.login').hide();
  }
});

// User registers
$('#registerform').click(function(){
  if ($('.login').css('display') != 'none'){
    $('.login').hide();
  }
  $('.register').fadeToggle('slow');

  document.getElementById('register_submit').onclick = function(){
    amplitude.getInstance().setUserId(document.getElementById('register_email').value);
    amplitude.getInstance().setGroup('Company', document.getElementById('company').value);
    amplitude.getInstance().setUserProperties({'Company': document.getElementById('company').value});
    amplitude.getInstance().logEvent('Register');


    window.alert('Thanks for registering, ' + document.getElementById('register_first').value);

    $('.register').hide();
  }
});

