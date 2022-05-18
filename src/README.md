DOM을 배우고 바로 적용하는 시간을 가졌다.  
쫓아가기 어려우면서도 자꾸 하고 싶어진다.
부족하니까 열심히 해야지...

오늘은 다행히 운동 수업이 없어서 하루 종일 집에 앉아있을 수 있었다

![](https://velog.velcdn.com/images/y0ungg/post/a65c3887-ec13-48bf-bc6a-884a9539e7cd/image.png)

input박스에 키보드로 입력을 하면(event) 함수가 실행(event listener)되는데, 이 함수는 아이디가 네 글자 이상이면 참이고 그렇지 않으면 거짓이다.  
참이면, 성공메세지를 출력하고 사진에 나오고 있는 실패메세지가 `display:none;`이 된다.  
거짓이면, 실패메세지를 출력하고 성공메세지를 `display:none;`으로 변경한다.  

`display:none;`이 들어있는 `class='hide'`를 둘 다 지정하고  
hide라는 classList를 add / remove하는 것으로 작동되는 것이다.  

남은 페어활동 시간에는 각자 공부하지 않고 함께 공부하기로 했다.  
서로 레퍼런스를 정해와서 예쁘게 꾸미고 기능도 더해볼 예정이다.  

페어님이 잘 알려주셔서 낙오되지 않고 겨우 따라왔다.ㅠㅠ  
나머지 공부로 지식 채우는 중...  



### 레퍼런스

[보안코드 디자인](https://www.google.com/url?sa=i&url=https%3A%2F%2Ftotomachuja.com%2Fbbs%2Fboard.php%3Fbo_table%3Dnew%26wr_id%3D70&psig=AOvVaw3oADdCOJgx0atnoe0qgeux&ust=1652883998284000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLiwjvDe5vcCFQAAAAAdAAAAABAP)


[회원가입창 디자인](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Flogin-ui-ux-design-vector-website-user-interface-sign-sign-up-form-template-online-web-register_23913129.htm&psig=AOvVaw1w6aWLmf0latYGpiu8ZdwH&ust=1652884090127000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCICTj5rf5vcCFQAAAAAdAAAAABAD)

[카카오로그인](https://developers.kakao.com/docs/latest/ko/reference/design-guide) 

[네이버로그인](https://developers.naver.com/docs/login/bi/bi.md)

 css 투명도 조절

        background-color: rgba( 255, 255, 255, 0.5 );
        opacity: 0.5;	//전부 투명해진다
        
