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
  console.log(slideData);
  var dataLen = slideData.length;
  var viewBox =$('#viewBox');
  var viewCover;

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
  }
  
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
};
var actionFn = function(i){
  viewCover = $('.view_cover');
  viewCover.eq(i).addClass('action');
}
  var i = 0;
  for(;i < dataLen; i+=1){
    slideDivSetFn(i);

  }
  actionFn(0);
  slideBtn();

  //===========================================================
  //인디케이터 생성
  console.log(viewCover);
  //설명
  //광고갯수를 파악하여 인디케이터를 생성
  //해당하는 순서에맞는 인디케이터에 action을 설정하여 인지할 수 있도록 하자

  //변수 선언 담을 코드작성
  var indiWrapper = '<div class="slide_check_part"><ul class="slide_indicator blind_area"></ul><p><em></em><span></span></p></div>'
  var indiCode = '<li><a href="#" data-href="#"><span></span></a></li>'
  
  //기능설정1
  slideWrapperCode.before(indiWrapper);
  var indiWrapperSelector = viewBox.find('.slide_indicator')
  
  //함수
  var indicatorSetFn =function(n){
    indiWrapperSelector.append(indiCode);
    var indiSelector = indiWrapperSelector.find('li')
    indiSelector.eq(n).find('span').text(slideData[n].summary);
    indiSelector.eq(n).find('a').attr({'data-href':'.' + slideData[n].description});
  }

  //indictor 생성
  var j = 0 ;
  for(; j < dataLen; j+=1){
    indicatorSetFn(j);
    
  }

})

})(jQuery);