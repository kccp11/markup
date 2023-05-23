//b_07_array.js

var arr = [];
console.log (arr);

//무언가.메소드() ->메소드기능수행
//무언가.프로퍼티  ->프로퍼티(확인/정의/체크/삽입)
//push():배열의 뒤에 내용삽입
arr.push('a'); 
console.log (arr);
arr.push('b'); 
console.log (arr);
arr.push('coffee'); 
console.log (arr);
arr.push('juice'); 
console.log (arr);
arr.push('watch'); 
arr.push('watch phone'); 
console.log (arr);

//pop() : 배열의 뒤에내용 삭제
arr.pop();
console.log(arr);
arr.pop();
console.log(arr);
arr.pop();
arr.pop();
arr.pop();
arr.pop();
console.log(arr);
//unshift() : 배열의 앞에 내용삽입
arr.unshift('other')
console.log(arr);
arr.unshift('water')
console.log(arr);
arr.unshift('ssd')
console.log(arr);

//shift() : 배열의 앞에 내용삭제
arr.shift();
console.log(arr);
arr.shift();
console.log(arr);
arr.shift();
console.log(arr);
console.clear();
//=======================

var ar1 = ['a','b','c','d','e','f','g','h','i'];

//splice(순서) : 순서번쨰부터 삭제
//splice(순서,갯수) :순서번쨰부터(포함),갯수만큼 삭제
//splice(순서,갯수,추가(갯수만큼)) :순서번쨰부터(포함),갯수만큼 삭제하고 추가로 삽입

//ar1.splice(2);
/* ar1.splice(2,3); */
ar1.splice(2,3,'ㄱ','ㄴ','ㄷ','ㄹ');
console.log(ar1);
//=====================
//기존배열.slice(시작,끝) :시작순서와 끝순서 사이의 값을 별도로 복제하여 가져오는것
var ar2 = ar1.slice(2,6);
console.log(ar2);

//배열의 순서가 정해져있다
//recerse() 배열의 순서를 뒤집는것
console.log(ar2);
ar2.reverse();
console.log(ar2);
//sort 정렬
console.log(ar2);
ar2.sort();
console.log(ar2);

var fruits = ['geape','apple','berry','kiwi','banana','orange'];
console.log(fruits);
fruits.sort(function(b,c){
  return (b < c) ? -1 : 1; 
});
console.log(fruits);
ar2.sort();

console.clear()
//===================
//변수.split() : 변수의 내용을 기준(띄어쓰기,.,....)에 의해 배열로 설정
var ls = '서울시 강남구 역삼동 000 16';
var lsArr=ls.split(' ');

console.log(ls);
console.log(lsArr);

var smt = '삼성, 애플, 구글, 엘지';

console.log(smt)
var smtArr = smt.split(', ');
console.log(smtArr[3])
//================================================================
//변수 . join() :배열요소의 내용을 하나의 문자열로 변환

var pNum = ['+82','010','000','1234'];
console.log(pNum);
var moblie = pNum.join();
console.log(moblie);

console.log(pNum.length);