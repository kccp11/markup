//b_09_modal.js

(function($){
  //기능설명
  //사용자 속성 (attr('data-img'속성명))값을 가져오는 방법

/*   let testLi = $('.modal_list').find('li').eq(0);
  let checkAtttr = testLi.attr('data-igm');
  let checkAtttr2 = testLi.attr('data-narr');
  console.log(checkAtttr," : ",checkAtttr2) */
/*
  1.번튼을 클릭시 해당하는 요소의 부모에 있는 속성값(img,narr)을 파악(attr)
  2. .modal_conrent에 배경이미지를 담고, p요소에 글자를 변경(css, text)
  3. .modal_window 나타나게 만들자(show, fadeIn, slideDown)
  4. .modal_window 닫기버튼을 클릭시 사라지게 만들자(hide, fadeOut, slideUp) */

  //변수

  const modal        = $('.modal');
  const modalLI      = modal.find('li');
  const modalBtn     = modalLI.children('button');

  const modalWindow  = $('.modal_window');
  const modalClose   = modalWindow.find('.close_btn');
  const closeBtn     = modalClose.children('button');

  const modalContent = modalWindow.find('.modal_content')
  const modalP       = modalContent.children('p');

  const bigImgUrl    = '../../img/source/album/view/';
  const timed        = 300;

  //함수 
  
  var imgUrlFn = function(data){
    var url = 'url("'+ bigImgUrl + data + '")';
    //let url = 'url("../../img/source/album/view/' + data + '")';
    return url;
  }
  //console.log(imgUrl('box.png'))
  //이벤트

  // modalBtn 클릭시 ... 
  modalBtn.on('click', function(e){
    e.preventDefault();
    //이미지와 기능 가져오기
    let par = $(this).parent()
    let img = par.attr('data-igm');
    let narr = par.attr('data-narr');
    //console.log(img,' - ',narr);
    //console.log(imgUrlFn(img))

    //띄울 창의 내용에 담기
    modalContent.css({'backgroundImage': imgUrlFn(img)});
    modalP.text(narr);

    //modal_window 나타나게 만들기
    modalWindow.fadeIn(timed,() => closeBtn.focus() );
  }); // modalBtn.on('click')


  // modalBtn 클릭시 ... 
  closeBtn.on('click',function(e){
    e.preventDefault();
    modalWindow.fadeOut(timed);
  }); //closeBtn.on('click')

})(jQuery);




