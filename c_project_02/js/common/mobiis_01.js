(function($){
//header_box에있는 dt를 누르면 dd가 나오게 한다

//변수
var wrap = $('#wrap')
var headerBox = wrap.find('#header_box')
var headTab = headerBox.children('.head_tab')
var headDl = headTab.children('dl')
var headDt = headDl.children('dt')
var headDd = headDl.children('dd')
var timed = 300;
//이벤트클릭시 나오는 이벤트
/* headDt.on('click',function(e){
 e.preventDefault();
  var _this =$(this);
  var i = _this.parent().index();
  var dlI = headDl.eq(i);

  console.log(dlI);

  if(dlI.hasClass('on')){
    headDl.removeClass('.on');
    dlI.find('dd').slideup();
  }else{
    dlI.addClass('on');
    dlI.siblings().removeClass('on')
    _this.nextAll(headDd).slideDown();
    dlI.siblings().find('dd').slideUp();
  }
  }) */

//이벤트 마우스 올릴시 나오는 이벤트
headDt.on('mouseenter',function(){
  $(this).next( headDd ).stop().slideDown();
  $(this).parent().siblings('dl').find(headDd).stop().slideUp();
})

headDt.children('button').on('focus',function(){
  var i = $(this).parents('dl').index();
  headDl.eq(i).find(headDd).stop().slideDown();
  headDl.eq(i).siblings().find(headDd).stop().slideUp();
})

headTab.on('mouseleave',function(e){
  headDd.stop().delay(timed).slideUp();
});
//slideBox_area에 있는 이미지가 시간이 지나면 자동으로 다음 페이지로 이동



})(jQuery);