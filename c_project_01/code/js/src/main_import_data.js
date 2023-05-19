//main_import_data.js

(function($){
  //기능설명
  /* 
  분리된 html문서를 하나로 합쳐서 사용할 수 있도록 처리
  */
  setTimeout(function(){
    var deviceCk = $.CheckType;
    console.log(deviceCk);

  //공통영역 불러오기===================================
  //변수
  var body = $('body')
  var headBox = $('#headBox');
  var footBox = $('#footBox');
  var baseUrl ='../paga/common/'
  var importPage = ['headBox.html','footBox.html']

  //기능수행
  headBox.load(baseUrl + importPage[0], function(){
    var headMEnu = '<script class="head_script" src="../js/src/commonFile/headBox_handhelds.js"></script>';
    (deviceCk === 'smartphone' || deviceCk === 'tablet') ? body.append(headMEnu) : body.remove($('.head_script'));
  });


  footBox.load(baseUrl + importPage[1]);

  //main영역 내용 불러오기
  //변수
  var slideBox = $('#slideBox')
  var newBox = $('#newBox')
  var subBox = $('#subBox')
  var bestBox = $('#bestBox')
  var galleryBox = $('#galleryBox')
  var spondorBox = $('#spondorBox')
  var maiUrl = '../paga/main/'
  var importMAin = ['slideBox.html','newBox.html','subBox.html','bestBox.html','galleryBox.html','spondorBox.html']
  var mainSelect = [slideBox,newBox,subBox,bestBox,galleryBox,spondorBox]
  //기능수행

  //slideBox.load(maiUrl + importMAin[0])
  //newBox.load(maiUrl + importMAin[1])
  //subBox.load(maiUrl + importMAin[2])
  //bestBox.load(maiUrl + importMAin[3])
  //galleryBox.load(maiUrl + importMAin[4])
  //spondorBox.load(maiUrl + importMAin[5])
  var i =0;
  /* for(; i<importMAin.length; i += 1){
    mainSelect[i].load(maiUrl + importMAin[i],function(){
      $(this).append('<script src="../js/src/main_ad_slide.js"></script>');
      console.log(i);
    });
  }
  */
  $.each(mainSelect,function(index,slector){
    slector.load(maiUrl+importMAin[index],function(){
      if(index === 0){
        body.append('<script src="../js/src/main_ad_slide.js" class=pc_slide></script>');
      }
    });
  });
},10);
})(jQuery);