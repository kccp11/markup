//b_01_slide_structor.js
(function($){
//기능설명
/* 
인디케이터 버튼을 클릭시 해당하는 광고 내용이 나타나게 해라
인디케이터 버튼을 클릭하면 해당하는 순서값(index())
순서에 맞은 광고가 나타나게 - horizontal_slide의 가로 이동 (margin-left)
*/
//변수
var slide = $('.slide_set');
var indicator = slide.find('.indicator');
var lidiLi = indicator.find('li');
var indiLink = lidiLi.children('a');

var slide = slide.find('.slide');
var horizonSlide = slide.children('.horizontal_slide');

var i = 0;
var timed = 500;

//이벤트
indiLink.on('click',function(e){
  e.preventDefault();

  i = $(this).parent().index();
  var percent = -100 * i ;
  //horizonSlide.css({marginLeft:percent + '%' })
  horizonSlide.stop().animate({marginLeft:percent + '%' },timed/2);

  lidiLi.eq(i).addClass('action');
  lidiLi.eq(i).siblings().removeClass('action');

})


})(jQuery);