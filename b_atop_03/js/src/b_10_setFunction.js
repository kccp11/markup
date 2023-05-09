//b_10_setFunction.js

var a = 10;
var b = 0;
console.log(a);
setTimeout(function(){
  a =+ 100;
  console.log(a);
},1000);
//setTimeout -> 1000:1초
/* 
setInterval(function(){
  console.log(b);
  b += 1;
},500);
 */

var go;
var startFn = function(){
  go = setInterval(function(){
        b+=1;
        console.log(b);
      },500);
};

var stopFn = function(){
  clearInterval(go);
};

var exWrap = document.querySelector('.ex_wrap');
var btn = exWrap.querySelectorAll('button');
console.log(btn);

/* btn.forEach(function(data, idx){
  data.addEventListener('click',function(){
    if(idx === 0){
      startFn();
      }else{
        stopFn();
      }
  })
});
 */

btn.forEach(function(data, idx){
  data.addEventListener('click',function(){
    (idx === 0) ? startFn() : stopFn();
  })
});

