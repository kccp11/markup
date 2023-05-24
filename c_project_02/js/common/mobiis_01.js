
(function($){
//header_box에있는 dt를 누르면 dd가 나오게 한다
var intList = [{
  title : '가속기사업',
  content : '가속기 제어시스켐 분야 국내 유일 토탈솔루션 보유',
  img : '../img/introductionBox/introductionBox1.png',
  lilnk : '#'},
  {
    title : '핵융합 사업업',
    content : '핵융합발전로(ITER) 제어시스템 분야 국내 유일 기업',
    img : '../img/introductionBox/introductionBox2.png',
    lilnk : '#',
  },
  {
    title : '머신러닝',
    content : '머신러닝(Machine learning) 관련 신사업 창출 선도 기업',
    img : '../img/introductionBox/introductionBox3.png',
    lilnk : '#',
  },
  {
    title : '스마트공장지원사업',
    content : 'QRP솔루션을 기반으로 한 스마트공장구축사업',
    img : '../img/introductionBox/introductionBox4.png',
    lilnk : '#',
  },
]

var technologyBoxList = [
  {
    link : '#',
    img : '../img/technologyBox/main_tac_img01.png',
    con : '국내 유일한 EPICS Total Solution 기술 보유' 
  },
  {
    link : '#',
    img : '../img/technologyBox/main_tac_img02.png',
    con : '극한 정밀 위치 제어 및 극세시간 제어 컨트롤 알고리즘' 
  },
  {
    link : '#',
    img : '../img/technologyBox/main_tac_img03.png',
    con : 'Radio-Frequency(RF) 제어 및아날로그 디바이스 설계 기술' 
  },
  {
    link : '#',
    img : '../img/technologyBox/main_tac_img04.png',
    con : '유무선 네트워크 설계 기술' 
  },
  {
    link : '#',
    img : '../img/technologyBox/main_tac_img05.png',
    con : 'Big-Data 분석 및 해석 실시간 초고속 데이터 프로세싱' 
  },
  {
    link : '#',
    img : '../img/technologyBox/main_tac_img06.png',
    con : '머신러닝(기계학습)에 필요한 다양한 알고리즘 개발 기술' 
  },
]

//외부 html문서 불러오기
var headerBox = $('#header_box');
var slideBox = $('#slideBox');
var introductionBox = $('#introductionBox');
var technologyBox = $('#technologyBox');
var promotionBox = $('#promotionBox');
var RecruitBox = $('#RecruitBox');
var footBox = $('#footBox');
var imopirtUrl = '../page/imopirtHtml/';
var imopirtHtml = ["header_box.html","slideBox.html","introductionBox.html","technologyBox.html","promotionBox.html","RecruitBox.html"];

headerBox.load(imopirtUrl + imopirtHtml[0]);
slideBox.load(imopirtUrl + imopirtHtml[1]);
introductionBox.load(imopirtUrl + imopirtHtml[2]);
technologyBox.load(imopirtUrl + imopirtHtml[3]);
promotionBox.load(imopirtUrl + imopirtHtml[4]);
RecruitBox.load(imopirtUrl + imopirtHtml[5]);
footBox.load('../page/common/footBox.html');


//변수
var wrap = $('#wrap')
var headerBox = wrap.find('#header_box')
var headTab = headerBox.children('.head_tab')
var headDl = headTab.children('dl')
var headDt = headDl.children('dt')
var headDd = headDl.children('dd')
var timed = 300;
//이벤트 클릭시 나오는 이벤트
/* headDt.on('click',function(e){
 e.preventDefault();
  var _this =$(this);
  var i = _this.parent().index();
  var dlI = headDl.eq(i);

  console.log(dlI);

  if(dlI.hasClass('on')){
    headDl.removeClass('.on');
    dlI.find('dd').slideup();
  }else{
    dlI.addClass('on');
    dlI.siblings().removeClass('on')
    _this.nextAll(headDd).slideDown();
    dlI.siblings().find('dd').slideUp();
  }
  }) */

//이벤트 마우스 올릴시 나오는 이벤트
headDt.on('mouseenter',function(){
  $(this).next( headDd ).stop().slideDown();
  $(this).parent().siblings('dl').find(headDd).stop().slideUp();
})

headDt.children('button').on('focus',function(){
  var i = $(this).parents('dl').index();
  headDl.eq(i).find(headDd).stop().slideDown();
  headDl.eq(i).siblings().find(headDd).stop().slideUp();
})

headTab.on('mouseleave',function(e){
  headDd.stop().delay(timed).slideUp();
});
//slideBox_area에 있는 이미지가 시간이 지나면 자동으로 다음 페이지로 이동
//이동후 시간이 지나면 slideBoxinBox가 나타남

//변수
var slideBox = $('#slideBox')
var sliArea = slideBox.children('.slideBox_area')
var sliArea1 = sliArea.children('.slideBox_area_01')
var sliArea2 = sliArea.children('.slideBox_area_02')
var timed = 1000;

//함수
var slideE
//일정시간 마다 동작
setInterval(function(){
  sliArea1
},timed);

//introductionBox====================================

var introductionBox = $('#introductionBox');
var intArea2 = introductionBox.children('.introductionBox_area_02');
var intUl = intArea2.children('ul');
var intUlLi = ('<li><div><dl><dt></dt><dd class="intcon"></dd><dd class="intlink"><a href="">READ MORE</a></dd></dl></div></li>');

var i = 0
var techLEn = intList.length
console.log(techLEn);
for(;i<techLEn;i+=1){
  intUl.append(intUlLi);
}

var intli = intUl.children('li');

var intListFn = function(n){
  var intListEq = intList[n];
  var intLiEq = intli.eq(n);

  var intImg = intLiEq.children('div');
  var intdt = intImg.find('dt');
  var intDd = intImg.find('.intcon');
  var intA = intImg.find('.intlink').children('a');

  intImg.css({backgroundImage:'url("' + intListEq.img + '")'});
  intdt.text(intListEq.title);
  intDd.text(intListEq.content);
  intA.attr({href:intListEq.lilnk})

}

for(i=0;i<techLEn;i+=1){
  intListFn(i);
}


//technologyBox

var technologyBox = $('#technologyBox');
var tecArea2 = technologyBox.children('.technologyBox_area_02');
var techonUl = tecArea2.children('ul');

var techonUlLi = ('<li><div class="techonlnk"><a href=""><div class="techImg"></div></a><div class="techcon"></div></div></li>');

var i = 0
var techLEn = technologyBoxList.length

console.log(techLEn);

for(;i<techLEn;i+=1){
  techonUl.append(techonUlLi);
}

var techonLi = techonUl.children('li')

var techListFn = function(n){
  var techListEq = technologyBoxList[n]
  var techLiEq = techonLi.eq(n)

  var techonA = techLiEq.find('.techonlnk').find('a')
  var techonI = techonA.find('.techImg')
  var techonCon = techLiEq.find('.techcon')

  techonA.attr({href:techListEq.link})
  techonI.css({backgroundImage:'url("' + techListEq.img + '")'});
  techonCon.text(techListEq.con)

}

for (i = 0; i < techLEn; i += 1) {
  techListFn(i);
}

//promotionBox
//promotionBox_area_02안에있는 youtybe아이콘을 클릭시 모달윈도우하 활성화 되면서
//유튜브 영상을 볼수있게하고 닫기 버튼을 누르면 사라지게 만듬
var promotionBox = $('#promotionBox')
var proArea02 = promotionBox.children('.promotionBox_area_02')
var proArea02Btn =proArea02.find('button')

var modalWindow = promotionBox.children('.modal_window');
var modBtn = modalWindow.children('.modal_data').find('button')
var youtubeFrame = modalWindow.find('iframe');

proArea02Btn.on('click',function(e){
  e.preventDefault();
  modalWindow.addClass('on');
  youtubeFrame.attr('src', 'https://www.youtube.com/embed/BLCc40bKIH4?autoplay=1');
})

modBtn.on('click',function(e){
  e.preventDefault();
  modalWindow.removeClass('on');
  youtubeFrame.attr('src', '');
})
//RecruitBox

//아이콘 클릭시 화면이 최상단으로 이동

var footBoxI = footBox.find(i)

footBoxI.on('click',function(e){
  e.preventDefault();
  $('html').animate({scrollTop:0+'px'})
});

})(jQuery);