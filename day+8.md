### ✅CSS
:Cascading Style Sheets <br>
더 나은 UX를 제공하기 위해, UI 및 레이아웃을 적절히 구성하기 위해 사용한다<br>

> UI : User Interface <br>
사용자가 애플리케이션을 작동시키는 도구<br>
사용자가 애플리케이션을 사용하게 하는 데 매우 중요한 역할을 한다<br>
💡직관적이고 쉬운 UI 제작은 프론트엔드 개발자의 기본 소양<br>
💡좋은 UX는 직관적이고 쉬운 UI에서 나온다<br>

<br>

```
seletor { 
    //declaration block
    property: value; //declaration
}
```
<br>

- #### html에 css 스타일 적용하기 <br>
1️⃣인라인 스타일(Inline style) : 해당 element 안에서 `style`속성 적용 <br>
2️⃣  내부 스타일 시트(Internal style sheet) : `<style>` 요소 내에서 작성하여 적용 <br>
3️⃣  외부 스타일 시트(External style sheet) : css파일을 생성하여 html 파일과 연결하여 적용 <br>
`<link rel="stylesheet" href="name.css"/>` <br>
스타일 적용의 우선순위 : 1️⃣-> 2️⃣or3️⃣ 마지막에 적용된 스타일 시트-> 웹 브라우저 기본 스타일<br><br>
💡"관심사 분리", 외부 스타일 시트를 사용하는 것이 가장 유지 보수가 편리하고 안정적이다<br>
<br>
<br>

### ✅ CSS 속성 <br>
> `margin` : content 바깥 여백 영역  <br>
`border` : content 테두리 (경계) <br>
`padding` : content 안쪽 여백 영역 <br>
`color` : 글자색 지정 <br>
`background-color` : 배경색 지정 <br>
`background` : 배경색, 이미지, 크기, 반복 등 여러 스타일을 한 번에 지정할 수 있는 단축 속성 <br>
<br>
등..
<br>

- #### text 꾸미기  <br> 
> `font-family: "맑은고딕", "나눔고딕";` : 쉼표로 구분하여 fallback 글꼴 추가<br>
`font-size: 10px;` : 글자 크기<br>
`font-weight: 300;` : 글자 굵기<br>
`text-decoration: underline` : 밑줄(취소선, 이중선 등)<br>
`letter-spacing: 90%` : 자간 <br>
`line-height: 110%` : 행간 <br>
`text-align: left` : (left, right, center, justify) 정렬 <br>
`text-shadow: 수평px 수직px 흐림반경 그림자색` : 그림자 <br>

- #### 속성값 절대단위와 상대단위 <br>
1. `절대단위 (px, pt 등)` <br>
크기가 고정되어 있기 때문에 사용자 접근성이 불리하다.<br>
인쇄와 같이 화면의 사이즈가 정해진 경우에 유리하다. <br>
또는 반응형 웹에서 화면 사이즈 기준점을 만들 때 디바이스 크기 각각의 px을 css에서 다르게 적용한다.
<br><br>
2. `상대단위 (em, rem, %, ch, vw, vh 등)` <br>
`rem` : 브라우저 기본 글자크기 = `1rem` <br>
`em`: 해당 요소가 속해있는 요소의 글자 크기가 `1em` 기준이 된다<br>
해당 요소의 `font-size`가 없다면 부모 요소의 `font-size`가 상속된다 <br>
여러 상위 요소들을 거치면서 상속되면 유지보수가 복잡해지기 때문에 되도록 `rem` 사용할 것!<br><br>
`vw`: viewport width, 보이는 영역 너비의 100분의 1 <br>
`vh`: viewport height, 보이는 영역 높이의 100분의 1 <br>
딱 떨어지게 화면을 가득 채우며 스크롤 되게 할 때 `1vw`, `1vh` 사용 <br>
 <br> 
 <br> 

### ✅ BOX MODEL <br> 
: 하나의 콘텐츠로 묶이는 요소들은 하나의 박스를 이룬다<br>

- #### `display` 속성<br>

1️⃣ `block` : 줄바꿈이 되는 box (ex. `<div>`, `<p>`,`<h1>`)<br> 
기본 width=100% <br> 
2️⃣ `inline block` : 줄바꿈이 되지 않으나, block의 특징을 가지는 box (ex. `<span>`, `<button>`,`input`)<br> 
기본 width=글자가 차지하는 만큼<br> 
but, `width`와 `height` 지정 가능  <br> 
```
span {
    display: inline-block; //display 속성을 통해 지정할 수 있다
    }  
```

3️⃣ `inline` : 줄바꿈이 되지 않고, 크기 지정을 할 수 없는 box (ex. `<span>`, `<a>`, `<em>`) <br>
기본 width=글자가 차지하는 만큼<br>
<br>
<br>

- #### box 크기 속성 <br>
 콘텐츠 크기보다 박스 크기가 작은 경우 => 콘텐츠가 튀어나온다 <br>
 `{overflow: auto;}` 선언할 시 브라우저 환경에 따라 스크롤이 추가 됨 <br>
 `overflow` 속성의 value: `hidden` 등
<br>
<br>
1️⃣ border (테두리)<br>
: 심미적인 용도 + 개발 과정에서 의미적으로 사용됨<br>
레이아웃을 만들면서 그 크기를 시각적으로 확인한다<br>
`style`의 종류 : `solid`, `dotted`, `dashed` 등 <br>
```
 p {
    border: width(1px) style(solid) color(yellow);
}
```

<br>
2️⃣ margin (바깥여백)<br>

```
p {
    margin: top right bottom left   // px
    margin: top-bottom right-left
    margin: t-r-b-l     // -2rem: 음수 값 지정 가능. 과할시 다른 element와 겹치게 만들 수도 있다
}
```

<br>
3️⃣ padding (안쪽여백)<br>
margin 속성과 표기 방법 동일

```
p {
    padding: top right bottom left   // px
    padding: top-bottom right-left
    padding: t-r-b-l 
}
```
<br>


- #### box 크기 측정 기준
1️⃣`content-box` <br>
content width + padding(L+R) + border(L+R) = 실제 box 영역의 너비 <br>
-> width만 고려하면 처음 생각한 레이아웃을 벗어날 수 있음
<br>
<br>
2️⃣`border-box` (권장)<br>
여백과 테두리를 포함한 크기로 width를 계산 <br>
content width = 실제 너비

```
* {
    box-sizing: border-box;
    }
```
<br>


// 사실 여기까지는 큰 어려움이 없었다. <br>

이 밑으로 나오는 css의 다양한 selector는 헷갈리고 알쏭달쏭했다... <br>
사실 자바스크립트보다 흥미가 떨어지는 부분이라고 느끼고 있었는데, CSS를 다루는 것은 애플리케이션의 UI, UX를 접근성 좋게 만들기 위한 일이며 프론트엔드 개발자의 기본 소양이라는 말을 들으니 의지가 타올랐다! <br>
무엇보다 오늘 배운 내용은 오늘 제대로 알고 하루를 마무리 하자는 것은 내가 코드스테이츠에 임하는 첫 번째 다짐이다!! <br>
익숙하지 않은 부분을 암기해야 한다고 생각하니 막막했지만 직접 활용해 보니까 그렇게 어려운 난관은 또 아니었다. <br>

하루 종일 selector를 중점적으로 공부하고, 운동 다녀와서도 계속 복습하면서 익숙해지는 게 느껴졌다.<br>
어느새 12시 32분을 넘어간다..<br>
완벽하지 않아도 더이상 어렵게 느껴지지 않는다는 것으로 오늘도 결국 하나의 step을 마무리한 것 같다는 생각이 들었다 <br>

### ✅CSS selector

> 전체 셀렉터: `*{...}`<br>
태그 셀렉터: `h1{...}`<br>
id 셀렉터: `#only{...}`<br>
class 셀렉터: `.class{...}`<br>
attribute 셀렉터: `a[href]{...}`, `p[class]`, `p[id="정확히일치"]`, `[class~="ABC"]`, `[class^="접두사"]`, `[class$="접미사"]`, `[class*="1개이상포함"]`, `[class|="~이거나 ~로시작"]` <br>

>자식 셀렉터: `header > p {}` //header 요소의 자식 중 p 요소 <br>
형제 셀렉터: `header + p {}` // header 요소 바로 인접한 형제 p 요소 1개 <br>
`header ~ p {}`// header 요소 뒤에 나오는 모든 p 요소 형제들 <br>
후손 셀렉터: `div p {}` //div 요소의 자식 p 요소와 후손 p 요소 모두 선택

>그 외 `가상 셀렉터` , `UI 요소 상태 셀렉터`, `구조 가상 클래스 셀렉터`, `부정 셀렉터`, `정합성 확인 셀렉터` 등... <br>
너무 많아서 예시는 생략... !! <br>

<br>
<br>

https://flukeout.github.io/ <br>
위 사이트에서 css selector 실습 게임을 할 수 있다 <br>
많은 도움이 되었다!<br> <br><br>


#### ✔️가장 헷갈렸던 부분 <br>

`div :nth-of-type(2)` : div의 자식 중 2번째 div 선택 <br>
`div:nth-of-type(2)` : 2번째로 나오는 div 선택 <br>
<br>
`div:nth-child(2)` : 2번째 자식이 div인 경우 모두 선택 <br>
`div :nth-child(2)` : div의 2번째 자식 선택 <br>
<br>
`li:only-child`: li가 외동인 경우 모두 선택 <br>
<br>
`not(~)`: ~가 아닌 경우 모두 선택 <br>
<br>


--- 
오늘 배운 내용은 양적으로 방대해서 타이핑만 3시간 넘게 걸린 것 같다 <br>
공부하는 동안 공책에 적은 내용을 컴퓨터로 다시 작성해서 올리는 거라 시간적인 면에서 비효율적인 것 같다... <br>
앞으로 시간 분배를 어떻게 할지, 컴퓨터로 정리를 어떻게 해야 효율적으로 할 수 있을 지에 대해 생각해 봐야 할 것 같다 ㅠㅠ