$(function(){
  $('h1').fadeOut(3000).css({
    color:"blue"
  });
  $('.scroll_exe').click(function(){
    $('html,body').animate({scrollTop:0})
  })
})
bubbly();