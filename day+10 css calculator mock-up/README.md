### day+10
계산기 mock-up 완성! <br>

<img src="https://github.com/y0ungg/icandoit/blob/main/day+10%20css%20calculator%20mock-up/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202022-05-04%20%EC%98%A4%ED%9B%84%202.30.58.png?raw=true" width= 1000px>


`.button__row`  와 `.button__row__bottom` 그리고 오른쪽에 위치한 `container_right` 부분이 딱 떨어지게 맞았으면 했는데<br>
`flex-grow` 속성으로 만든 `.button__row__bottom` 부분과 `container_right` 이 한 덩어리,<br>
`.button__row` 또 한 덩어리 이렇게 두 덩어리로 나뉘어서 살짝 균열이 있어 보였다. <br>

해결하기 위해서 여러 box에 대해 `width`, `height`, `flex-grow` 값을 바꿔보다가 결국 원인을 찾았다 <br>
문제는 부모 요소인 `container_left` 안에 `{display = flex;}` 선언을 하지 않아서 `.button__row`안에 `flex-grow` 값이 적용되지 않았던 것이었다..! <br>
<br>
`container_left` 안에 `flex-grow`값을 주었고 그것은 적용이 된 상태라 따로 `{display = flex}` 선언을 하지 않아도 알아서 되는 줄 알았는데 그게 아니었다 <br>
<br>
역시 직접 해봐야 안다..! <br>
<br>

몇 가지 문제를 해결하자 레이아웃은 다행히 금방 만들었고 <br>
`text` 속성들과 `box-shadow`, `border`, `background` 속성을 활용해서 입체적이고 귀여운 계산기를 만들어보았다 <br>
 <br>
먼저 계산기의 배경 부분이 되는 `body`의 `background`에 그라데이션이 들어가게 했고 <br> 
계산기의 숫자가 나오는 `calculator__display--bare` 는 `box-shadow`로 오목하게 만들어서 입체감이 있게 했다 <br>
`button`에는 레트로 느낌의 무료 글꼴을 다운받아서 `text-shadow`를 넣었고 `box-shadow`는 볼록한 느낌으로 넣어주었다 <br>
`background`에 그라데이션을 넣고 `border-bottom`과 `border-right`까지 각각 다른 색, 다른 두께로 넣었더니 디테일 상승..! <br>
<br>
어제만 해도 너무너무 어려웠는데 페어님과 의지해서 문제를 해결하다 보니 결국 끝까지 만들 수 있게 됐다 <br>
하다보니 재미도 있고 욕심이 생겨서 열심히 만들었다 <br>
실제로 구현되는 계산기도 얼른 만들어 보고 싶다 ! ^___^
