//b_07_accotdion2.js

(function($){
  //기능을 정리
  /*1. .nav-title 마우스올릴때 뒤에오는 .sub_list 나타나게
   */
  //  변수
  var accor2 = $('.accor2');
  var accorLi = accor2.find('li');
  var accrTirie = accorLi.find('.nav_tilte');
  var accorSub = accor2.find('.sub_list');
  var timed = 500;
  //이벤트

/* .accor2영역에 마우스 올릴경우 통으로 나타나게
  accor2.on('mouseenter',function(e){
    accorSub.stop(timed).slideDown();
  }); */

  accrTirie.on('mouseenter',function(){
    $(this).next( accorSub ).stop().slideDown();
    $(this).parent().siblings('li').find(accorSub).stop().slideUp();
  });

  accrTirie.children('button').on('focus',function(){
    var i = $(this).parents('li').index();
    accorLi.eq(i).find(accorSub).stop().slideDown();
    accorLi.eq(i).siblings().find(accorSub).stop().slideUp();
  });

  //.accor2영역에 마우스 벗어날 경우 sub_list 사라지게
  accor2.on('mouseleave',function(e){
    accorSub.stop().delay(timed).slideUp();
  });

})(jQuery);