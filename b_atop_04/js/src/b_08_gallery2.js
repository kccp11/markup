/*b_08_gallery2.js*/

(function($){
//jQery

  //변수
  var gallery = $('.gallery_area2');
  var galConrent = gallery.find('.gallery_content');
  var galImg = galConrent.find('img');
  
  var galUl = gallery.find('.gallery_list');
  var galLi = galUl.find('li');
  var galBtn = galLi.find('button');

  //함수

  var imgFn = function(n){
    galImg.eq(n).addClass('on');
    galImg.eq(n).siblings().removeClass('on');
  };

  var btnFn = function(j){
    galLi.eq(j).addClass('on');
    galLi.eq(j).siblings().removeClass('on')
  };

  //이벤트
  galBtn.on('click',function(e){
  e.preventDefault();
  var i = $(this).parent().index();
  imgFn(i);
  btnFn(i);
  });
})(jQuery);