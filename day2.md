#### 1. 오늘 배운 내용

 ✅ 변수
 : 데이터를 편하게 다루기 위해 이름을 붙인 것
 이름(label)이 붙은 값
 변수 이름에는 띄어쓰기 불가능, 두 번째 단어부터 대문자를 사용하는 '카멜 케이스'로 작성한다.

```jsx
	let pi; // 1️⃣선언(declaration)
	pi = 3.14; // 2️⃣할당(assignment)
    

	let pi = 3.14; // =>표현식(expression)
    
    let name; // 할당이 없는 변수
    >undefined 출력
 ```

✅타입
변수에는 다양한 타입이 있다.
```Number```, ```String```, ```Boolean```이 서로 섞인(compound) 타입도 있다. -> 자료형(배열/객체)

* 타입의 종류
	1. `number` : 숫자
	2. ```string``` : 문자열
	3. ```boolean``` : true / false
	4. ```undefined``` : 할당이 없는 변수
	5. ```function``` : 함수
	6. ```symbol``` : 심볼. 변경 불가능한 고유의 값, 원시값
	7. ```bigint``` : 2^53-1보다 큰 정수를 길이의 제약 없이 다룰 수 있게 해주는 숫자형, 정수 끝에 n을 붙이거나 Bigint()함수를 호출하여 만들 수 있다
	8. ```object``` : null 등 그 외 다른 모든 객체

>`typeof` : 특정 값의 타입 확인하는 연산자
```jsx
console.log(typeof 5);
>>number 반환
```

>다양한 타입 반환해보기
```jsx
let number = 1;
console.log(typeof number);
// > number
```
```jsx
>let bigint = 50n;
console.log(typeof bigint);
// > bigint
```
```jsx
let string = ‘1’;
console.log(typeof string);
// > string
```
```jsx
console.log(typeof (1>2));
// > boolean
```
```jsx
console.log(null);
// > object
```
```jsx
let x ;
console.log(typeof x);
// > undefined
```
```jsx
function name(){
};
console.log(typeof name);
// > function
```
```jsx
let symbol = Symbol();
console.log(typeof symbol);
// > symbol
```

✅함수
:작은 기능의 단위
반드시 돌아온다! (return)
입력 -> 함수 -> 출력, 함수 종료

1. 함수 선언식
```jsx
function name(parameter){
  return parameter + 1; //body
}
//1️⃣선언(declaration)
name(argument);
//2️⃣호출(call, invocation)
```
2. 함수 표현식
```jsx
const 변수선언 = function() {
  //익명 함수 할당
}
```
3. 화살표 함수 (function 사용 x)
body에 return문만 있는 경우 
=> return과 {중괄호} 생략가능 or 소괄호 사용 가능
``` jsx
const 변수선언 = (para1, para2) => para1 + para2 / 2;
변수선언(argu1, argu2);

const 변수선언 = (para1, para2) => (para1 + para2 / 2);
변수선언(argu1, argu2); 
````


#### 2. 챕터 외 공부하다 알아본 것
`Number()`: 넘버 타입으로 리턴하는 함수
`String()`: 문자열 타입으로 리턴하는 함수

변수 선언 키워드 3가지
`let`: 재선언 가능, 재할당 가능
`const`: 재선언 불가능, 재할당 불가능
`var`: 재선언 가능, 재할당 가능

하나의 let 키워드 안에서 쉼표로 구분하여 선언과 할당을 여러 번 할 수 있다
```jsx
let a = 5,
    b = 1;
```

function 에서 매개변수의 갯수보다 전달인자의 갯수가 많다면?
-> 매개변수 갯수만큼 출력
전달인자의 갯수가 매개변수의 갯수보다 많다면?
-> undefined 출력


### 3. 오늘 어려웠던 것
처음 페어 프로그래밍이 진행되어서 떨리고 긴장됐다. 
앞으로는 더 적극적으로 대화를 나누고 이리저리 부딪혀가며 여러 경우의 수에 대해 도전해보도록 해야겠다!!

페어 프로그래밍, 줌 라이브 세션에서 챕터 외의 개념에 대해 생각해볼만한 것들이 나와서 혼자 검색해보고 공부했다.
아직까지는 재미있다. 

공부 마치고 운동 1시간 다녀오기가 힘들다. 그래도 6개월 동안 앉아서 공부하려면 미리미리 운동해놔야지... 

벨로그에 글쓰기가 생각보다 손이 많이 가서 내일부터는 이렇게 못 쓸지도 모르겠다. 
1일 1글을 하기 위해서는 더 간단하게 작성하도록 해야겠다!
