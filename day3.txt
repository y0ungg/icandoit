1. 오늘 배운 것
✅조건문
:어떠한 조건을 판별하는 기준을 만드는 것
반드시 비교연산자가 필요
비교의 결과는 늘 boolean
두가지 조건이 들어갈 때 논리연산자 사용

비교연산자 : >, <, <=, >=, ===, !==
(==, != 도 있으나 엄격하게 비교하지 않아서 예외가 많아진다)
boolean : true / false
논리연산자: AND연산자 &&, OR연산자 ||, NOT연산자 !
(1. !는 조건 앞에 붙인다. 2. 중첩 사용이 가능하다. !!은 not+not 즉 true, !!!은 not+not+not 즉 false가 된다. )
💡6가지 falsy값 (if 문에서 false로 반환되므로 if문이 실행되지 않는다)

if (false)
if (null)
if (undefined)
if ('')
if (0)
if (NaN)
✅ 문자열
:string
문자 하나 : charactor (=char)
+ 연산자를 쓸 수 있음 (str.concat(str1, str2...)의 형태로도 사용 가능)
다른 모든 타입과 +하면 문자열로 변환된다 (toString)

💡다양한 string method (immutable)

console.log(str.length);
console.log(str.indexOf('str'); // 없으면 -1 반환
console.log(str.lastIndexOf('str'))
console.log(str.charAt(num));
console.log(str.includes('str')); // boolean 반환
console.log(str.spilt(' ')) // csv 형식을 처리할 때 유용
ex))) let lines = str.split('\n'));
	  lines[0].split(' ');
console.log(str.substring(start, end)); // 음수는 0 취급
console.log(str.slice(start, end));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim());
등등

2. 어렵거나 헷갈린 것
function에서 if 문을 예쁘게(?) 쓰는 것. 간결하고 정확하게 쓰는 것.
제곱 연산자 3가지
Math 객체
문자열 함수... & 문자열 전체적으로

3. 추가적으로 공부한 것
function에서 if문을 꼭 안써도 되고 true일 때 실행될 return문만 body에 들어가도 실행된다는 것
제곱연산자
1. num * num 2. num ** 2 3. Math.pow(num, 2)
num1 %2 === num2
: num1을 2로 나눈 나머지가 num2인 것
string 문에서 ${string이 아닌 것}으로 혼용 가능 하다
Math.floor(number) : 내림
Math.min(num1, num2 ...): 가장 작은 정수 반환
Math.max(num1, num2 ...): 가장 큰 정수 반환
Math.abs(num): 절대값 반환

4. 추가 공부할 것
string method 중 match, replace, 정규표현식, 공백문자 표현
컴퓨터에 더 가까운 사고하기
의사코드 적극 활용하기!
함수가 깔때기 형식으로 작동된다는 것 기억하기
함수 안에 변수 선언해서 활용하자
문자열 복습을 많이 못해서 문자열 복습 더하기!!

function dropLetters(num, str) {
  if (num >= str.length) {
    return '';
  }
  return str.slice(num);
}
여기서 return '';이 무슨 역할을 하는지 모르겠다 ㅠ.ㅠ