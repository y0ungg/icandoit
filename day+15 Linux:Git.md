### day +15
#### ✅Linux / Git 기초

GUI (Graphical User Interface) <br>
:컴퓨터 프로세스가 시각적으로 화면에 표시된다 ex) vscode <br>

CLI (Command-Line Interface)<br>
:입력되는 글자와 출력되는 글자로 컴퓨터와 소통할 수 있다<br>
ex) 터미널<br>
<br>


> #### 터미널 명령어<br>
- `pwd` : print working directory 현재 폴더 위치 확인<br>
- `mkdir` : make directory 폴더 만들기<br>
- `list` : ls 특정 폴더에 포함된 파일이나 하위 폴더 리스트 출력<br>
`ls -a` : all 숨어있는 폴더나 파일을 포함한 모든 항목 출력<br>
`ls-l`: 폴더나 파일의 포맷을 전부 출력<br>
`d ~` = 폴더<br>
`- ~` = 파일<br>
`ls -al` = `ls -la`<br>
- `open` 현재 위치를 GUI로 실행<br>
`open .`= 바탕화면 폴더 출력<br>
- `cd`:폴더에 진입하기<br>
- `touch`: 파일 생성하기 (확장자 포함해서 입력)<br>
- `rm`: remove 폴더나 파일을 휴지통으로 이동하지 않고 삭제한다 <br>
- `mv` : move 폴더나 파일 이름 변경, 폴더나 파일의 위치 옮기기<br>
- `cp` : copy 폴더나 파일 복사하기<br>

<br>

- #### 절대경로와 상대경로<br>
절대경로 : 루트 폴더 `/` 부터 시작하여 현재 위치까지 진입한 구문 <br>
상대 경로 : 현재 위치 `.` , 상위폴더 `..`<br>

<br>

- #### UAC (User Account Control, 사용자 계정 컨트롤)
관리자 : 루트폴더 `/`<br>
프로그램 설치, 변경, 삭제 권한이 있다.<br>
일반 사용자에게 관리자 권한은 완전히 주어지지 않음<br>

사용자 : `/Users/Username` 이하 <br>
프로그램 실행. `sudo` 명령어로 관리자 권한 일시적 획득 <br>

<br>

---
#### CLI 터미널의 텍스트 에디터 `nano`<br>
```
nano index.js (파일명)
```
파일이 nano로 실행된다<br>
<br>

#### 패키지매니저 homebrew
`wget`, `neofetch` 등 추가 설치<br>
패키지 : 여러 파일을 모아 하나의 파일로 저장하고 있는 압축 파일<br>
패키지 매니저 : 패키지의 설치, 변경, 삭제 등 관리를 편리하게 해주는 도구<br>
<br>

#### 💡Node.js 
: 자바스크립트의 런타임 중 하나 <br>
자바스크립트를 웹 브라우저가 아닌 곳에서도 실행할 수 있게 하여 자바스크립트를 통해 서버를 구축하는 등 활용폭이 확장됨<br>
```
// nvm : Node.js Version Manager node.js의 다양한 버전을 관리하는 프로그램
nvm use <버전넘버>      // 여러 버전을 옮겨 다니며 작업 가능
```

```
// npm : Node Package Manager 모듈 스토어
npm install
npm run
...
```

```
// package.json : npm 모듈을 활용하기 위해 해당 모듈에 대한 정보를 담은 파일. 프로젝트 전반에 관한 정보가 들어있다
모듈 전체를 넘기지 않고, 모듈에 관한 정보만 전달하여 편리해짐
협업에 반드시 필요!

1️⃣ devDependencies : 프로그램 실행과 관계 없이 오로지 개발 환경에 필요한 의존성 모듈. dependency
npm install ~~ --save-dev       // devDependencies에 추가됨

2️⃣ dependencies : 프로그램 실행과 관련 있는 dependency
npm install ~~ 
npm install --save ~~        // 옵션

3️⃣ scripts : npm script  CLI에서 사용 가능한 명령
npm run test
npm run start           // package.json 파일에 작성할 때 실행 모듈을 반드시 작성! ex) "node index.js"  
...
```

<br>
<br>


---
#### Git
: 분산형 버전 관리 시스템 (Version Control System)<br>
소스코드 기록을 관리하고 추적한다<br>
특정 시점에 생성된 백업 복사본 = `snapshot`, `snapshot`을 만드는 것 = `commit`<br>
<br>

#### Github
: 클라우드 기반 서비스<br>
Git Repository를 관리<br>
내 컴퓨터에서 Git으로 관리하는 프로젝트를 올려둘 수 있는 사이트<br>
오픈 소스를 누구나 contribute 할 수 있다<br>



---
#### 짧은 일기😀 <br>
오늘은 CLI와 GUI에 대한 개념,<br>
CLI 터미널 다루는 법과 텍스트 에디터 nano,<br>
패키지 매니저 brew, npm,<br>
그리고 node.js와 nvm 등 인터페이스와 모듈, 실행 환경에 대해 공부했다.<br>
개발자들의 협업에서 꼭 필요하고 내가 지금 프론트엔드 초보자의 일기를 올리고 있는 분산 제어 시스템 git과 github까지!<br>
여러 환경을 설치하고 설정해놓으니 이제 정말 필요한 것은 다 갖춘 건가, 싶다.<br>
<br>
페어와 이리저리 헤매며 터미널에서 js 파일을 nano로 입력하고 range 라는 것도 잠깐 공부했다.<br>
익숙하지 않아서 아직 서툴지만 (갈 길이 멀었다) 재밌게 배우고 있다.<br>
<br>
나 포함 9명의 인원이 줌으로 만나서 스몰 토크도 나누고, 서로 의지하고 동기부여가 될 수 있는 시간도 보냈다.<br>
즐거운 시간..! <br>
오프라인에서 만나서 모각코도 하고 직접적인 친구도 사귀면 좋을 것 같다는 생각이 들었다. <br>
<br>

수업 끝나고 운동 다녀와서 개운한 마음으로 정리 중... <br>
하루가 빠르게 지나간다 <br>
어려우면서도 흥미를 잃지 않고 배우고 있어서 감사한 날들이다 <br>
내일은 드디어 32인치 모니터가 배송오는 날이다~!! <br>
무야호~~