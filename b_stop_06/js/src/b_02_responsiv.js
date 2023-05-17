//b_02_responsiv.js

(function($){
  //기능설명
/* 
  사용하고있는 브라우저 또는 디바이스 환경의 가로크기를 기준으로 움직임을 파악하겠다
  1.현재의 크기에서 브라우저의 크기가 변화햇는지 파악 -> $(window),on('resize')
  2.현재의 가로값 체크 변화된 내용에서 가로값이 변화 했는지 여부 파악 width()

  요소의 가로값을 파악                                        :선택자.width()
  요소의 가로값을선택자(padding을 포함한)을 파악               :선택자.innerWidth()
  요소의 가로값을선택자(padding+border을 포함한)을 파악        :선택자.outerWidth()
  요소의 가로값을선택자(padding+border+margin을 포함한)을 파악 :선택자.outerWidth()
 */

  //변수
  var win = $(window); //&(document)
  var beforeW =win.width();
  var deviceSize = 1024;
  var deviceType = ['pc','handhelds']
  var beforeDeiceType;
  var nowDeviceType;
  
  var exWrap = $('.ex_wrap')
  var baseUrl = '../page/rwdhtml/';
  var deviceHtml = ['pc.html','handhelds.html'];
  //함수
  var deviceChckFn = function(nowWidth){
  if(nowWidth >= deviceSize ){
    nowDeviceType = deviceType[0];
    exWrap.load(baseUrl + deviceHtml[0])
  }else{
    nowDeviceType = deviceType[1];
    exWrap.load(baseUrl + deviceHtml[1])
  }
  //console.log(nowDeviceType,nowWidth)
  return nowDeviceType;
};// deviceChckFn = function(nowWidth)
    beforeDeiceType = deviceChckFn(beforeW);

  //이벤트

  win.on('resize',function(){
    var afterW = win.width();
    deviceChckFn(afterW);

    if(beforeDeiceType !== nowDeviceType){
      location.reload();
      
      console.log('디바이스 환경 변화 되었습니다.')
      console.log(beforeDeiceType, ':',nowDeviceType)
      beforeDeiceType = nowDeviceType;
      beforeW =afterW
    }
  });
})(jQuery);