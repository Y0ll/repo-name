$(function(){

  new WOW().init();

  $(".hamburger").click(function(){
  $(this).toggleClass("is-active");
  if($(this).hasClass('is-active')){
    $('.mnu_top').slideDown(300)
  } else {
    $('.mnu_top').slideUp(300)
  }

  });
$('a.yakor').on('click',function (event){
  var $anchor=$(this);
  scrollTop: $($anchor.attr('href')).offset().top-70
},{
  duration: 2000,
  specialEasing:{
    width: "linear",
    height:"easeInOutCubic"
  }
});
event.preventDefault();
});