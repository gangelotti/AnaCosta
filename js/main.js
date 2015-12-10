$(document).ready(function() {

// MAIN MENU
// Opens and closes the Menu
if ($('.menuExpand').css('width') == '200px'){
  $('#mainMenu').on('click', openMenuSmall);
}

else {
  $('#mainMenu').on('click', openMenuLarge);
}

$('.menuExpand a').on('click', closeMenu);

// Functions
function openMenuSmall(){
  $('.menuExpand').toggle('slide', 'fast');
  $('#mainWrapper').animate({marginLeft: '200px'}, 'fast');
  $('.socialIcons').toggleClass('socialHide');
}

function openMenuLarge(){
  $('.menuExpand').toggle('slide', 'fast');
  $('#mainWrapper').animate({marginLeft: '200px'}, 'fast');
  $('.socialIcons').toggleClass('socialHide');
}

function closeMenu(){
  $('.menuExpand').toggle('slide', 'fast');
  $('#mainWrapper').css('marginLeft', '0');      
  $('.socialIcons').removeClass('socialHide');
}

// Scrolling animation
// This will select everything with the class smoothScroll
$('.smoothScroll').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 500); // The number here represents the speed of the scroll in milliseconds
      return false;
      console.log(target.length);
    }
  }
});



// FORM VALIDATION
// This checks that the name field is a string
var $pattern = /^[a-z\D\-_\s]+$/i;

$('#name').focusout(function(){
  if (!$(this).val().match($pattern)) {
    $('#intakeForm .field_name .valid').css('display', 'none');
    $('#intakeForm .field_name .error').css('display', 'block');
  }
  
  else {
    $('#intakeForm .field_name .valid').css('display', 'block');
    $('#intakeForm .field_name .error').css('display', 'none');
  }
});

// This checks that a user has made a selection in the drop down
$('#customDropDown').focusout(function(){
  if ($('#customDropDown option:selected').val() == "none"){
    $('#intakeForm .dropdown .error').css('display', 'block');
    $('#intakeForm .dropdown .valid').css('display', 'none');
  }
    
  else {
    $('#intakeForm .dropdown .error').css('display', 'none');
    $('#intakeForm .dropdown .valid').css('display', 'block');
  }
});

// This checks that the user fills out goals 1 and 2
$('#goal1').focusout(function(){
  if ($(this).val().length == 0 ) {
    $('#intakeForm .primaryGoal .valid').css('display', 'none');
    $('#intakeForm .primaryGoal .error').css('display', 'block');
  }
  
  else {
    $('#intakeForm .primaryGoal .valid').css('display', 'block');
    $('#intakeForm .primaryGoal .error').css('display', 'none');
  }
});

$('#goal2').focusout(function(){
  if ($(this).val().length == 0 ) {
    $('#intakeForm .secondaryGoal .valid').css('display', 'none');
    $('#intakeForm .secondaryGoal .error').css('display', 'block');
  }
  
  else {
    $('#intakeForm .secondaryGoal .valid').css('display', 'block');
    $('#intakeForm .secondaryGoal .error').css('display', 'none');
  }
});

// This checks that the user has entered an email address (@ and . symbols)
var $patternEmail = /^([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i;
  
$('#emailAddr').focusout(function(){
  if (!$(this).val().match($patternEmail)) {
    $('#intakeForm .email_field .valid').css('display', 'none');
    $('#intakeForm .email_field .error').css('display', 'block');
  }
  
  else{
    $('#intakeForm .email_field .valid').css('display', 'block');
    $('#intakeForm .email_field .error').css('display', 'none');
  }
});

// This shows a hidden div if the user selects the second radio button
$('#radio2').click(function(){
  $('.hiddenQuestion').css('display', 'block');
});

$('#radio1').click(function(){
  $('.hiddenQuestion').css('display', 'none');
});


// ADDITIONAL FUNCTIONS
// Makes an entire div a clickable
$('.box1').on('click', clickDivBoxes);
$('.box2').on('click', clickDivBoxes);
$('.box3').on('click', clickDivBoxes);
$('.box4').on('click', clickDivBoxes);
$('.box5').on('click', clickDivBoxes);
$('.box6').on('click', clickDivBoxes);

$('#testimonials').on('click', clickSections);
$('#news').on('click', clickSections);


//Functions 
function clickDivBoxes() {
  window.location = $(this).find('a').attr('href'); 
  return true;
}

function clickSections() {
  window.location = $(this).find('a').attr('href'); 
  return false;
}

// Makes social li's open in new window
$('.socialIcons li').on('click', clickIcons);
$('.socialFooter li').on('click', clickIcons);

//Functions 
function clickIcons(e) {
  e.preventDefault();
  window.open($(this).find('a').attr('href'), '');
}

});