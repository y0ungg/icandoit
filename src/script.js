let elInputUsername = document.querySelector('#username');
console.log(elInputUsername);

let elFailureMessage = document.querySelector('.failure-message');
let elSuccessMessage = document.querySelector('.success-message');

let inputPassword = document.querySelector('#password');
let repeatPassword = document.querySelector('#password-retype');
let pwMessage = document.querySelector('.mismatch-message');

/* 아이디의 길이가 4 이상이면 true를 반환한다 */
function isMoreThan4Length(value) {
  return value.length >= 4;
}

/* 이 벤 트 리 스 너 - 키보드를 입력하다가 뗐을 때 */
    //입력창에 글자를 키보드로 입력할 때 =>event : ~할 때
    // 함수 isMoreThan4Length가 참이면
    //실패메세지 add('hide'), 성공메세지 remove('hide')
elInputUsername.onkeyup = function() {
  if (isMoreThan4Length(elInputUsername.value)) {
    elSuccessMessage.classList.remove('hide');  //성공메세지 출력
    elFailureMessage.classList.add('hide'); //실패메세지 숨김
  }
  else {
    elSuccessMessage.classList.add('hide'); //성공메세지 숨김
    elFailureMessage.classList.remove('hide');  //실패메세지 출력
  }
}


/* 패 스 워 드 일 치 여 부 확 인 */
  //inputPassword와 repeatPassword가 일치하면 true반환, 다르면 false반환
function isMatch (password1, password2) {
  return password1 === password2;
}

//함수 isMatch가 true면 실패메세지가 나오고(add) false면 실패메세지가 가려진다(remove)
repeatPassword.onkeyup = function(v) {
  console.log(v.target)
  if (isMatch(inputPassword.value, repeatPassword.value)) {
    pwMessage.classList.add('hide');
  }
  else {
    pwMessage.classList.remove('hide');
  }
}
