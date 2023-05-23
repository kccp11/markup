//b_04_operator.js

// 산술연산자  (=,-,*,/,%,+=,-=,*=,++,--)
var n = 10;
/* console.log(n, typeof(n));

var plus = n+10;
console.log (plus);

var minus =n -10;
console.log (minus);

var multi = n*n;
console.log (multi);

var avg = n/3;
console.log (avg)
/// 나눠서 남은 수
var other = n%3;
console.log(other)
//%는 나누고 남는 나머지수
var parI = parseInt(avg);
console.log(parI);
// 나누었을때 소수점을 제외한 수

console.clear();
var textNum = 1004+'px';
var textPar = parseInt(textNum);
console.log(textPar, typeof(textPar));

console.log('n:',n);
n = n+10; //변수 n에 기존에 가지고 있던 n의값을 +10을 재대입
console.log('n:',n);
n= n+5;
console.log('n:',n);

n += 10;//자기 자신에게 10을 추가 하겠다
console.log('n:',n);

n -= 5;
console.log('n:',n);

n *=5;
console.log('n:',n);

n /=50;
console.log('n:',n); 

n %=2;
console.log('n:',n);  */
//====================================================
/* 
console.log ('n:', n);
n += 1;
console.log('n:',n);
n += 1;
console.log('n:',n);

++n; //무조건 1을
++n; //무조건 1을
++n; //무조건 1을
++n; //무조건 1을
++n; //무조건 1을
++n; //무조건 1을
++n; //무조건 1을 먼저 연산후 결과를 저장
console.log('n:',n);

n++;//무조건 1을 더한다 결과를 도출후 연산
console.log('n:',n);
n++;
n++;
n++;
console.log('n:',n);
console.log('n:',n++);
console.log('n:',n);
 */
//===========================================
/* console.log('n:', n);
n-=1;
console.log('n:',n);

--n;
--n;
--n;
--n;
--n;
console.log('n:',n);
n--;
n--;
n--;
n--;
console.log('n:',n);
console.log('n:',n--);
console.log('n:',n); */
//===========================

//비교연산자 > (왼쪽값 비교 오른쪽값) 결과 true/false
/* 
var m=30;
var rel = n <= m;
console.log('n:' + n, 'm:'+ m, 'result:' + rel);
//작거나 같거나
rel = n >= m;
console.log('n:' + n, 'm:'+ m, 'result:' + rel)
//크거나 같거나
var n2 ='4';
var nCK = n === n2;
console.log( n, n2, nCK);
//일치한다
var ck1 = true && true;
console.log( ck1)
//둘다 true면 true, 둘중 하나라고 false면 false

var ck2 = true || true;
console.log( ck2)
//둘중 하나라고 true면 true */
//============================
//삼항연산자 -> 조건? true일때 경과 : false일때 결과 ;

var k = 5
var kRel;
(k >= 10) ? kRel = '숫자가 10보다 큰숫자': kRel = '숫자가 10보다 작은 수';
console.log(kRel);

//버튼 -> id="btn"
//클릭? -> 이벤트 ->addEventListener('이벤트명');
//.cintent 내용을 변경 -> ?.innerText ="내용"

//#btn -> getElementById('아이디이름');
//.content = getElementsByName('class이름');

var btn = document.getElementById('btn');
var par = document.getElementsByClassName('content')[0];
var i = 0;

btn.addEventListener('click', function(){

  i+=1;
  par.innerText = "내용이 변경," + i + "번 클릭"
})
//================================

