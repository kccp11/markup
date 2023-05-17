//b_06_slide_hofizontal_btn_v3

(function($){

  //기능설명

  //변수=========================================================
var part = $('.part');
var slideSet = $('.slide_set');
var btnArea = slideSet.find('.slide_btn');
var nextBtn = btnArea.find('.next');
var prevBtn = btnArea.find('.prev');

var indiArea = slideSet.find('.indicaictor');
var indiUl = indiArea.children('ul');
var indiLi = indiUl.children('li');
var iniLink = indiLi.children('a');

var indiP = indiArea.find('p');
var nowI = indiP.find('.now');
var nowT = indiP.find('.toral');

var horizontal = slideSet.find('.horizontal_slide');
var horizontalDiv = horizontal.children('div');
var orifinDivLen = horizontalDiv.length;
//=====================================
var permission = true;
var i = 0;
var timed = 1000;
var play;

  //함수=========================================================

  var nextBtnFn = function(){

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

  var prevBtnFn = function(){
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

  var indicatorFn = function(){
    indiLi.eq(i).addClass('action');
    indiLi.eq(i).siblings().removeClass('action');
  };//indcatorFn

  var nowIFn = function(){
    nowT.text(orifinDivLen)
    nowI.text(i+1);
  }//nowIFn

//일정시간 마다 동작/ 강제로 조건에의해 해제
  var slideGoFn = function(){
    play = setInterval(function(){
      /*     nextBtnFn();
          indicatorFn();
          nowIFn(); */
      
          nextBtn.trigger('click');
          
        },timed*3);
  }
  
  var slideStopFn = function(){
    clearInterval(play);
  };

  //기능수행(수행 및 체크)=========================================================
  var cloneDiv = horizontalDiv.eq(-1).clone();
  horizontal.prepend(cloneDiv)

  var newHorizontalDiv = horizontal.children('div');
  var newDivLen = newHorizontalDiv.length;
  horizontal.css({width: (100 * newDivLen) + '%',left:-100 + '%'});
  newHorizontalDiv.css({width:(100 / newDivLen) + '%'});

  //일정시간 마다 동작/ 강제로 조건에의해 해제
  nowIFn();
  slideGoFn();


  //이벤트=========================================================

  nextBtn.on('click',function(e){
    e.preventDefault();
    nextBtnFn();
    indicatorFn();
    nowIFn();
  });//nextBtn.on

  prevBtn.on('click',function(e){
    e.preventDefault();
    prevBtnFn();
    indicatorFn();
    nowIFn();
  })

  iniLink.on('click',function(e){
    e.preventDefault();
    i = $(this).parent().index();
    horizontal.stop().animate({marginLeft: -100 * i + '%'});
    indicatorFn();
    nowIFn();
  });

  part.on('mouseenter',function(){
    slideStopFn();
  })

  part.on('mouseleave',function(){
    slideGoFn();
  })

})(jQuery);