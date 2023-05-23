//b_09_function.js

//함수
/*
function(){
    내용
  return 최종원하는 것
 }
 */
// 2.함수 선언식 호이스팅현상o
console.log(fn(100));

function fn(a){
  var result = 10 * a;
  return result;
}
/*
console.log(fn(3));
console.log(fn(4));
console.log(fn(5));
console.log(fn(6));
*/

// 1.함수 표현식: 호이스팅현상x

var fn2 = function(a){
  return a * 10;
};

console.log(fn2(3));
console.clear()
//========================
//전역변수
var a = 10;
var func = function(){
  a =20;
  return console.log(a = a+=10);
};

console.log(a)
func();
console.log(a)

console.clear()
//=======================
//지역변수

var func2 = function(){
  var b = 10;
  return console.log( b );
}

func2();
//console.log( b ); function안의 변수는 funcrion외부에 적용하지 않는다
//=========================================
var btn = document.querySelector('.btn');
var btn_content = document.querySelector('.btn_content');
var arr = ['coffee','juice','fruits','ade'];

var button = btn.querySelectorAll('button');
button.forEach(function(data,idx){
  data.addEventListener('click',function(){
    //console.log(idx);
    btn_content.innerText = arr[idx];
  });
});