//b_08_etc.js

//변수의 차이
var n=10;
console.log(n);
n = 3;
console.log(n);
var n2 = n; //깊은복사(주소가 아닌 값자체를 copy)
console.log(n,n2);
n = 30;
console.log(n,n2);


//===============================
//참조 변수
var arr = [1,2,3];
console.log(arr);
var arr2 = arr;//얕은복사(주소값을 copy)
console.log(arr,arr2)

arr.push(4);
arr[0]= 5;
console.log(arr);
console.log(arr2);

arr.sort();
console.log(arr);
console.log(arr2);

//참조변수를 깊은복사 (주소가 아닌 값자체를 copy)

//var copyArr = [arr[0],arr[1],arr[2],arr[3]];
var copyArr=[];
var i=0;
for(;i < arr.length; i+=1){
  copyArr[i] = arr[i];
}

console.log(copyArr);
arr.reverse();
console.log(arr)
console.log('copyArr:',copyArr);

console.clear()
//============================================
var idx = 0;
var nArr = [idx];
nArr[1] = idx;
nArr[11] = ['a','b','c'];
console.log(nArr);
console.log(nArr[11]);

var nArrGroup = nArr[11];
console.log(nArrGroup[2]);
console.log(nArr[11][2]);

var ar_01 = ['a','c','f'];
var ar_02 = ['0','ar','ccf',[1,2,3]];
var ar3 = [10,7,6,3, ar_01, ar_02];

console.log(ar3[4][2]);
//console.log(ar3[4][1]);
console.log(ar3[5][3][0]);
console.log(ar_02[3][0]);
console.clear()
//=============================================
var obj = {
  'coffee': 'americano',
  'juice': ['grape', 'apple', 'orange',
  {
    'ade': 'lemon',
    'slush' : 'milk'
  }]
};


console.log(obj.coffee);
console.log(obj['coffee']);
console.log(obj.juice);
console.log(obj.juice[3]);
console.log(obj.juice[3].slush);
console.log(obj.juice[3]['slush']);

console.clear()
//
// 카드리스트
// 이미지:이미지명, 제목:제목내용,내용:설명,링크:링크주소
var cardList = [
{img: 'img.pnp',
title:'title confent',
content: ['content','content2'],
ankder : 'linkData',
option: ['best', 'new']},
{img: 'img.pnp',
title:'title confent',
content: ['content','content2'],
ankder : 'linkData',
option: ['best', 'new']}
];
console.log (cardList[0].option[1])