
var sections = $('section'), 
nav = $('nav'), 
nav_height = nav.outerHeight(),
winHeight = $(window).innerHeight()/4,
home = $('section#home');


if(location.hash=""){
  $('html, body').animate({scrollTop: 0}, 500);
}

//On Scroll Set up
$(window).on('scroll', function () {
var cur_pos = $(this).scrollTop();

sections.each(function() {
var top = $(this).offset().top - nav_height - winHeight,
    bottom = top + $(this).outerHeight();

if (cur_pos >= top && cur_pos <= bottom) {
  nav.find('a').removeClass('active');
  sections.removeClass('active');

  $(this).addClass('active');
  nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
  URLMapping();
}
else if($(window).scrollTop() + $(window).height() == $(document).height()) {
  //alert('Bottom')
  var lasrtSec = $('section.last');
  nav.find('a').removeClass('active');
  sections.removeClass('active');
  $(lasrtSec).addClass('active');
  nav.find('a[href="#'+$(lasrtSec).attr('id')+'"]').addClass('active');
  URLMapping();
}
});
});

nav.find('a').on('click', function () {
var $el = $(this), 
  id = $el.attr('href');

$('html, body').animate({
scrollTop: $(id).offset().top - nav_height
}, 500);

return false;
});

/* Handling Sublinks to Section */
$('a.sublinks').on('click', function () {
var $el = $(this), 
  id = $el.attr('href');

$('html, body').animate({
scrollTop: $(id).offset().top - nav_height
}, 500);

return false;
});


// URL Mapping with Scroll\
var URLMapping = function(){
var position = $('section.active').attr('id')
var theHash = "#"+position;
if(history.pushState) {
history.pushState(null, null, theHash);
}
else{
location.hash = theHash;
}
}
