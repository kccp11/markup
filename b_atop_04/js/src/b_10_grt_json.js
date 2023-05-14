//b_10_grt_json.js
//data폴더에 cooffee+_list.json파일 풀러오기
/*
var coffee_list =[
  {
    "image" : "이미지 데이터",
    "image_alt" : "이미지에대한 설명",
    "title" : "title_01",
    "content" : "내용을 간단하게 작성",
    "link" : "./data_deatail/coffee_01.html"},
  {
    "image" : "이미지 데이터",
    "image_alt" : "이미지에대한 설명",
    "title" : "title_02",
    "content" : "내용을 간단하게 작성",
    "link" : "./data_deatail/coffee_02.html"},
  {
    "image" : "이미지 데이터",
    "image_alt" : "이미지에대한 설명",
    "title" : "title_03",
    "content" : "내용을 간단하게 작성",
    "link" : "./data_deatail/coffee_03.html"},
  {
    "image" : "이미지 데이터",
    "image_alt" : "이미지에대한 설명",
    "title" : "title_04",
    "content" : "내용을 간단하게 작성",
    "link" : "./data_deatail/coffee_04.html"},
  {
    "image" : "이미지 데이터",
    "image_alt" : "이미지에대한 설명",
    "title" : "title_05",
    "content" : "내용을 간단하게 작성",
    "link" : "./data_deatail/coffee_05.html"},
  {
    "image" : "이미지 데이터",
    "image_alt" : "이미지에대한 설명",
    "title" : "title_06",
    "content" : "내용을 간단하게 작성",
    "link" : "./data_deatail/coffee_06.html"},
  {
    "image" : "이미지 데이터",
    "image_alt" : "이미지에대한 설명",
    "title" : "title_07",
    "content" : "내용을 간단하게 작성",
    "link" : "./data_deatail/coffee_07.html"},
  {
    "image" : "이미지 데이터",
    "image_alt" : "이미지에대한 설명",
    "title" : "title_08",
    "content" : "내용을 간단하게 작성",
    "link" : "./data_deatail/coffee_08.html"},
];
*/

//객체 데이터를 외부로 josn방식으로 내보내기 위한 조건
//1. 주석 사용할 수 없다.
//2. 속성명(프로퍼티), 값 모두 쌍따옴표로 감싸주어야 한다
//3. 변수명은 사용할 수 없다.


(function($){
//외부데이터를 불러와서 사용하기
// $.ajax() -> html을 기준으로 경로 검색
/*   $.ajax({
    //외부데이터를 불러오고 그 형식과 내용을 세팀
  }).done(function(data){
    //코드를 모두닫는다.
  }); */

  $.ajax({
    url:"../json/coffe_list.json",
    context:document.body
  }).done(function(data){
    var coffee_list =data;

 
    
    var liEl = '<li><div class="img_space"><span class="blind"></span></div><dl><dt></dt><dd class="data_con"></dd><dd class="link"><a href="#">자세히 보기 </a></dd></dl></li>';
    
    //변수
    
    var exWrap = $('.ex_wrap');
    var exUl = exWrap.children('ul');
    
    var i = 0
    var len = coffee_list.length;
    
    for (; i < len ; i+=1){
      exUl.append(liEl);
    };

    var exLi = exUl.children('li');

    //함수 세팅
    var cardInsertFn = function(n){
      var menuLIst = coffee_list[n];

      var liN = exLi.eq(n);
      var imgSpace = liN.children('.img_space');
      var imgText = imgSpace.find('span');
      var title = liN.find('dt');
      var con = liN.find('.data_con');
      var linkData = liN.find('.link').children('a')


      
      imgSpace.css({backgroundImage:menuLIst.image});
      imgText.text(menuLIst.image_alt);
      title.text(menuLIst.title);
      con.text(menuLIst.content);
      linkData.attr({href: menuLIst.link});
    }
    

    for (i=0; i <len ; i +=1){
      cardInsertFn(i);
    };
  });//.ajax
})(jQuery);

