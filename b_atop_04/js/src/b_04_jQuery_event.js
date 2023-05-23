//b_04_jQuery_event.js
(function($){
  var exWrap = $('.ex_wrap');
  var exP = exWrap.find('p');
  var exInnerText = exP.children('span');
  var evt = exWrap.find('.evt');
  var evtLi = evt.children('li');

  exInnerText.text('이벤트처리 전');

  exP.css({'backgroundColor' : '#fff','border' : '1px solid #555'});
  evt.css({'marginTop' : '30px'})

//evtLi 첫번째에 클릭 이벤트 발생
  evtLi.eq(0).on('click',function(){
    exInnerText.text('li 첫번쨰 요소를 클릭하였습니다.')
  });

  evtLi.eq(1).on('click',function(e){
    e.preventDefault();
    exInnerText.text('li en번째 요소를 클릭하였습니다.')
  })
//=================================================
//dblclick: 더블클릭 
evtLi.eq(2).on('dblclick',function(){
  exInnerText.text('dblclick')
});
//===================================================
//mousedown, mouseup : 마우스를 누르거나 띄느 상태
evtLi.eq(3).on('mousedown',function(e){
  console.log(e);
});

evtLi.eq(3).on('mousedown',function(){
  exInnerText.text('마우스를 눌렀습니다.')
  evtLi.eq(3).css({'backgroundColor' : '#d7d'});
});
evtLi.eq(3).on('mouseup',function(){
  exInnerText.text('마우스를 띄었습니다.');
  evtLi.eq(3).css({'backgroundColor' : '#57a'})
})
//==========================================================
//mouseenter,mouseleave

  evtLi.eq(4).on('mouseenter',function(){
    exInnerText.text('마우스를 올렸습니다.');
    $(this).css({color:'#06a', 'backgroundColor' : '#ddd'});
  });

  evtLi.eq(4).on('mouseleave',function(){
    exInnerText.text('마우스를 벗어났습니다.');
    $(this).removeAttr('style');
  });
  //========================================================
  //focus 초첨을 맞출떄

  evtLi.eq(5).children('a').on('focus',function(){
    exInnerText.text('포커스 처리되었습니다.');
    $(this).css({'backgroundColor' : '#ccc'});
  });

  evtLi.eq(5).children('a').on('blur',function(){
    exInnerText.text('포커스가 빠져나갔습니다.');
    $(this).removeAttr('style');
  });
  //===========================================================
  //scroll 움직일경우
  var win = $(window);
  win.on('scroll',function(){
    var scrollCk = parseInt(win.scrollTop());
    console.log(scrollCk);

    if(scrollCk >= 500){
      $('body').css({'backgroundColor' : '#fda'});
    }else{
      $('body').removeAttr('style');
    }
  });

  evtLi.eq(6).on('click',function(e){
    e.preventDefault();
    $('html').animate({scrollTop:600+'px'})
  });
//===============================
//resize 브라우저의 사이즈가 변할경우
  win.on('resize',function(e){
    var winW = $(this).width();
    if(winW >= 1024){
      $('body').stop().animate({backgroundColor : '#add'},300);
    }else{
      $('body').stop().animate({backgroundColor : 'transparent'},300);
    }
  });

  //================================
  //이벤트
  //click, dblclick, mouseenter, mouseleave, foucs, blur, scroll, resize
  //window,dicument,$(this)이벤트의 주최가되는,

})(jQuery);