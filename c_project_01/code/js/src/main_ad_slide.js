(function($){
//기능설명
//외부 데이터 불러 와서 확인 

//$.ajax({url:jsondataUrl,dataType:'json', context:document.body}).done(function(data){})

//$.getJSON('jsondataURL',function(data){})

var jsonData = $.getJSON('../data/osrm_main_slide_01.json');
jsonData.done(function(data){

  //변수
  var slideData = data;
  var sldeType = 'horizontal_slide';
  //console.log(slideData);
  var dataLen = slideData.length;
  var viewBox =$('#viewBox');
  var viewCover;
  var setNum = 0;
  var beforeN =setNum;

  //기능구현1
  var slideWrapperSet = '<div class="slide"><div class="slide_wrapper"></div></div>'
  viewBox.append(slideWrapperSet);
  var slideWrapperCode = viewBox.find('.slide_wrapper')
  slideWrapperCode.addClass(sldeType)

  var slideDivSet = '<div class="view_cover"><div class="view_con_wrapper"><div class="view_content"><h3></h3><p></p><div class="link"><a href=#><span class="blind">해당내용</span>바로가기<i class="fa-solid fa-arrow-right"></i></a></div></div><figure class="slide_img_part"><figcaption class="blind"></figcaption><p class="blind"></p></figure></div></div>';

  //함수
  var slideBtn =function(){
    var inedrtBtn ='<div class="slide_btn  blind_area"><button type="button" class="next"><span>다음내용보기</span><i class="fa-solid fa-arrow-right"></i></button><button type="button" class="prev"><span>이전내용보기</span><i class="fa-solid fa-arrow-left"></i></button></div>'
    slideWrapperCode.before(inedrtBtn);
  }//slideBtn
  
  var slideDivSetFn = function(n){
    slideWrapperCode.append(slideDivSet);
    //변수
    var slideN = slideData[n]
    var imgUrl = '../img/main_slide/'
    var slideDiv = slideWrapperCode.children('div').eq(n);

    var divTitle = slideDiv.find('h3');
    var divContentWrapper = slideDiv.find('.view_content');
    var divContent = divContentWrapper.find('p');
    var divLink = slideDiv.find('a');
    var divImg = slideDiv.find('.slide_img_part');
    var imgCaption = divImg.find('figcaption');
    var imgContent = divImg.find('p')
    

    //기능
    slideDiv.css({backgroundImage:'url('+imgUrl+slideN.background+')'})
    slideDiv.addClass(slideN.description);
    divTitle.text(slideN.title);
    divContent.text(slideN.contents);
    divLink.attr({href:slideN.link});
    divImg.css({backgroundImage:'url('+imgUrl+slideN.image+')'});
    imgCaption.text(slideN.description);
    imgContent.text(slideN.summary);
};//slideDivSetFn
//광고의 내용이 표시되는 기능
var actionFn = function(i){
  viewCover = $('.view_cover');
  
  //viewCover.eq(i).siblings().removeClass('action');

  //기능수정
/* 
  선택된 순번(setNum,i )의 요소를 나타나게 하고,
  이후 action처리된 요소를 사라지게(fadeOut) 만든다음
  나타난 요소에 acrion을 부여 z-index
   */
  if(i === beforeN){
    viewCover.eq(i).addClass('action');
  }else{
    viewCover.eq(i).show();
    viewCover.eq(beforeN).fadeOut(function(){
      viewCover.eq(beforeN).removeClass('action');
      viewCover.eq(i).addClass('action');
      beforeN =setNum;
    });
  }
};//actionFn
  var i = 0;
  for(;i < dataLen; i+=1){
    slideDivSetFn(i);

  }
  actionFn(setNum);
  slideBtn();

  //===========================================================
  //인디케이터 생성
  //console.log(viewCover);
  //설명
  //광고갯수를 파악하여 인디케이터를 생성
  //해당하는 순서에맞는 인디케이터에 action을 설정하여 인지할 수 있도록 하자

  //변수 선언 담을 코드작성
  var indiWrapper =  '<div class="slide_check_part">\
                      <ul class="slide_indicator blind_area"></ul>\
                      <p><em class="now_view"></em> / <span class="total_view"></span></p>\
                      </div>'
  var indiCode = '<li><a href="#" data-href="#"><span></span></a></li>'
  
  //기능설정1 + 변수
  slideWrapperCode.before(indiWrapper);
  var slideCheckPart = viewBox.find('.slide_check_part')
  var indiWrapperSelector = viewBox.find('.slide_indicator')
  var viewLenCkNow = slideCheckPart.find('.now_view')
  var viewLenCkToral = slideCheckPart.find('.total_view')
  var indiSelector;

  //함수
  var indicatorSetFn =function(n){
    indiWrapperSelector.append(indiCode);

    indiSelector = indiWrapperSelector.find('li')
    var indiLiLink = indiSelector.eq(n).find('a')
    var indiLiSpan = indiLiLink.children('span')

    indiLiLink.attr({'data-href':'.' + slideData[n].description});
    indiLiSpan.text(slideData[n].summary);
}//indicatorSetFn

  var indicatorcheckFn = function(n){
    viewLenCkNow.text(n+1);
    viewLenCkToral.text(dataLen);
  }//indicatorcheckFn

  //indictor 생성
  var j = 0 ;
  for(; j < dataLen; j+=1){
    indicatorSetFn(j);
    
  }
  indicatorcheckFn(setNum);
  indiSelector.eq(setNum).addClass('action')



  //실제광고영역 동작처리
  //설명
/* 
  다음/이전 버튼울 누르면 광고가 움직이게 해라
  인디케이터를 누르면 광고가 움직이게 해라
  마우스를 광고위에 올리면 일시정지하고 벗어나면 일정시간마다 내용변경해라
   */


  //변수
  var nextBtn = viewBox.find('.next');
  var prefBtn = viewBox.find('.prev');
  console.log(indiSelector);

  //함수
  //인디케이서 표시

  var indiSetFn = function(n){
    indiSelector.eq(n).siblings().removeClass('action');
    indiSelector.eq(n).addClass('action');
  }

  //슬라이드광고, indiselector, 체크번호 모드 동시에 처리해야하는 기능으로 한번에 수행하도록 한다
  var acrionNumSetFn = function(n){
    if(n>=dataLen){
      n = 0;
      setNum=n;
    }else if(n<0){
      n=dataLen-1;
      setNum = n;
    }
    actionFn(n);
    indicatorcheckFn(n);
    indiSetFn(n);
  }//acrionNumSetFn
  //이벤트

  nextBtn.on('click',function(e){
    e.preventDefault();
    setNum+=1;
    acrionNumSetFn(setNum);
  });

  prefBtn.on('click',function(e){
    e.preventDefault();
    acrionNumSetFn(setNum-=1);
  });

  indiSelector.find('a').on('click',function(e){
    e.preventDefault();
    var setNum  =$(this).parent().index();
    acrionNumSetFn(setNum);

  });

});
})(jQuery);