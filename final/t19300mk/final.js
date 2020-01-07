$(function(){
  $('h1').fadeOut(3000);
  $(function() {
    $('#accordion dd').hide();
    $('#accordion dt a').click(function(){
         $('#accordion dd').slideUp();
         $(this).parent().next().slideDown();
         return false;
     });
});
  $('.scroll_exe').click(function(){
    $('html,body').animate({scrollTop:0})
  })
})
bubbly();
