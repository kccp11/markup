//b_07_slide_hofizontal_wripe


(function($){

  //기능설명

  //변수=========================================================
var slideSet = $('.slide_set');
var horizontal = slideSet.find('.horizontal_slide');
var horizontalDiv = horizontal.children('div');
var orifinDivLen = horizontalDiv.length;
//=====================================
var permission = true;
var i = 0;
var startX,endX;

  //함수=========================================================

  var nextSwipeFn = function(){

  if(permission){
    permission = false;
    i += 1;


    if(i >= orifinDivLen){
      horizontal.css({marginLeft: -100 + '%'});
      i = 0;

    }
    horizontal.stop().animate({marginLeft: -100 * i + '%'},function(){
      permission = true;
    });
  }//if(permission)
}//nextBtnFn

  var prevSwipeFn = function(){
    if(permission){
      permission = false;
      i -= 1;
      horizontal.stop().animate({marginLeft: -100 * i + '%'},function(){
        if(i<0){
          i = orifinDivLen -1;
          horizontal.css({marginLeft:-100 * i + '%'})
        }
      });
      permission = true;
    }//permission
  }//prevBtnFn

  //기능수행(수행 및 체크)=========================================================
  var cloneDiv = horizontalDiv.eq(-1).clone();
  horizontal.prepend(cloneDiv)

  var newHorizontalDiv = horizontal.children('div');
  var newDivLen = newHorizontalDiv.length;

  horizontal.css({width: (100 * newDivLen) + '%',left:-100 + '%'});
  newHorizontalDiv.css({width:(100 / newDivLen) + '%'});

  //이벤트=========================================================
  slideSet.on('touchstart',function(e){
    startX = parseInt(e.originalEvent.changedTouches[0].clientX);
  });

  slideSet.on('touchend',function(e){
    endX = parseInt(e.originalEvent.changedTouches[0].clientX);
    var resultX = startX - endX;
    if(resultX > 0){
      nextSwipeFn();
    }else if(resultX < -100){
      prevSwipeFn();
    };

  });

  /* slideSet.on('touchmove',function(e){
    
  }) */

  //screenx,screeny ->모니터 좌표
  //clientX,clientY -> 보이는 화면 (브라우저의 보이는 그자체)
  //pageX, pageY -> 스크롤값을 포함한 브라우저좌표

})(jQuery);