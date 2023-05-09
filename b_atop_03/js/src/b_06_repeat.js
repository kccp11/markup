//b_06_repeat.js

//for
//for(변수의 최초의값; 변수의 조건 ;변수의값 변경 ){수행하는 내용}



for(var i = 0; i < 5 ; i+=1){
  console.log (i);
}

for (var j = 2023; j > 2000; j-=1){
  console.log(j)
}
console.clear();
//=====================================================
//이중 for문
var k=2;
var l=1;
for (; k<=9; k+=1){
  for(l=1; l <=k; l+=1){
    console.log(k +'x' + l + '=' + k*l);
  }
}
console.clear();
//===================================================
//for-in : 정의를 위해 만든 객체를 위한 반복문
var drink = {
  'coffee': '에스프레소,카페라뗴,바닐라 마끼아또,카페모카',
  'juice' : '포도쥬스, 딸기쥬스, 사과주스',
  'ade'   : '딸기에이드, 석류에이드,포도에이드,레몬에이드'
}
var o;
//for(; o < 5; o+=1){console.log(fruits[0]);}
for(o in drink){
  console.log(o, ' : ' ,drink[o])

}

//=====================================================
//forEach

var fruits = ['apple', 'bacaca', 'grape', 'straw berry', '키위'];
//배열.forEach(function(매개변수,index){기능});
fruits.forEach(function(data,idx){
  //console.log(data,idx);
  console.log ( (idx + 1)+':' + data);
});

console.log('teuits갯수',fruits.length);
for(o-0; o<fruits.length; o+=1){
  console.log(fruits[0]);
}
console.clear();
//======================
//.ex-wrap      > getElementsByClassName('ex_wrap')[];
//.ex_wrap > ul > getElementsByTagName('ul');
//li요소를 삽입  > innerHTML 생성후 추가 요소는 삽입이 불가능x > append

//라면 만들기 : 라면박스 - 라면봉투생성(createElement) - 필요구성을 정리 -박스에 담기

var exWrap = document.getElementsByClassName('ex_wrap')[0]
//console.log(exWrap);
var exUl = exWrap.getElementsByTagName('ul')[0];
//console.log(exUl);
/* 
var makeLi= document.createElement('li');
makeLi.innerText = fruits[0];
exUl.append(makeLi); */

var makeLi;
var fruirsLength = fruits.length;
var liLen = 0;

 for(; liLen < fruirsLength; liLen+1){
  makeLi= document.createElement('li');
  makeLi.innerText = fruits[liLen];
  exUl.append(makeLi);
 }
