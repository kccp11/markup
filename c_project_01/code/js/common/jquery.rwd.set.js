//b_03_responsiv.set.js


(function($){
//기능설명
/* 
각 디바이스 환경을 확인하여 필요시 그에따른 기능을 수행 할 수있는 기본세팅
기준 디바이스 가이드를 불러오기 $.ajax() or $getJSON
기존 크기를 확인 및 디바이스크기 기준 디바이스를 설정
브라우저 크기가 변경되면 변결된 크기를 파악하여 기존 디바이스환경과 비교하여 다른 환경일결우 변경할 처리를 체크
 */
  var jsonData = '../data/device_type.json';
  $.getJSON(jsonData,function(data){
    //console.log(data);
    var deciceGuide = data;

    //변수
    var win = $(window);
    var winW = win.width();
    var checkType;

/*     if(winW >= deciceGuide[3].siZe){
      checkType = deciceGuide[3].type;
    }else if(winW >= deciceGuide[2].siZe){
      checkType = deciceGuide[2].type;
    }else if(winW >= deciceGuide[1].siZe){
      checkType = deciceGuide[1].type;
    }else {
      checkType = deciceGuide[0].type
    } */
    

    //함수
    var deviceCheckFn = function(){
      var guideLen = deciceGuide.length;
      var i=guideLen-1;
      for(; i >= 0; i-=1){
        if(winW >= deciceGuide[i].size){
          checkType = deciceGuide[i].type;
          break;
        }else{
          checkType = deciceGuide[i].type;
        }
      }
      return $.CheckType = checkType;
    }//deviceCheckFn
    var beforeDevice =deviceCheckFn();
    console.log(beforeDevice);
    
    //이벤트
    win.on('resize',function(){
      winW = win.width();
      var afrerDevice = deviceCheckFn();

      if(beforeDevice !== afrerDevice){
        console.log(afrerDevice);
        beforeDevice = afrerDevice;
      }
      
    });
  });//getJSON
})(jQuery);
