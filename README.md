멀티캠퍼스 객체지향 javascript 기본 과정

# 1일차
## 개발환경 구축
### 프로그램 설치
* OS 맞는 버전 다운로드 후 설치
1. Nodejs 설치 [Download Pages](https://nodejs.org/en/download/)(마우스 오른쪽 버튼 > 새 탭에서 링크 열기)
2. Visual Studio Code 설치 [Download Pages](https://code.visualstudio.com/download)(마우스 오른쪽 버튼 > 새 탭에서 링크 열기)
3. Chrome 브라우저 설치 [Download Pages](https://www.google.com/chrome)(마우스 오른쪽 버튼 > 새 탭에서 링크 열기)

### Visual Studio Code 설정
1. VSCode 실행
2. Manage > Setting(좌측 하단의 톱니바퀴 모양 아이콘 클릭 후 Settings 메뉴 선택)
    * Auto Save: onFocusChange
    * Font Size: 각자 맞춰서 조절
    * Tab Size: 2
    * Detect Indentation: 체크 해제

### 소스코드 다운로드
* day1.zip
* [Download Pages](https://github.com/uzoolove/js202010/blob/main/sample/day1.zip)(마우스 오른쪽 버튼 > 새 탭에서 링크 열기) 이동 후 Download 버튼 클릭
* 다운로드 받은 파일을 C 드라이브 root에 압축 해제
  * C:\jslab\ch03
  * C:\jslab\css
  * C:\jslab\etc
  * C:\jslab\img
  * C:\jslab\js
  * C:\jslab\index.html

### VSCode에서 작업 폴더 오픈
1. VSCode 좌측 아이콘 중 Explorer 선택
2. Open Folder 선택
3. 작업 폴더(C:\jslab) 선택

## 웹버서 구동 및 테스트
1. VSCode의 View > Terminal 메뉴 선택
2. Terminal에서 webserver.js 파일이 있는 폴더로 이동
```
> cd etc\nodejs
```
3. node-static 확장모듈 설치(최초 한번만)
```
> npm i node-static
```
4. node 명령어로 웹서버 구동
```
> node webserver.js
```
5. 크롬 브라우저 주소창에 http://localhost:8000 입력
6. F12 눌러서 크롬 브라우저의 개발자 도구 표시
7. 각 예제 실행 결과를 개발자 도구의 Console 탭에서 확인

## PPT 다운로드
* [Download Pages](https://github.com/uzoolove/js202010/blob/main/PPT)(마우스 오른쪽 버튼 > 새 탭에서 링크 열기) 이동 후 각 PPT 파일 선택해서 Download 버튼 클릭

## 소스코드 공유(본인의 소스코드를 강사에게 공유하고 싶을때)
1. [Code Share](https://codeshare.io/) 접속(마우스 오른쪽 버튼 > 새 탭에서 링크 열기)
2. Share Code Now 클릭
3. 본인의 코드 복사
4. 브라우저의 주소창의 URL 복사 후 채팅창에 붙여넣기

## 실습 결과 확인
* [실습 페이지로 이동](https://uzoolove.github.io/js202010)

# 2일차
## 소스코드 다운로드
* day2.zip
* [Download Pages](https://github.com/uzoolove/js202010/blob/main/sample/day2.zip)(마우스 오른쪽 버튼 > 새 탭에서 링크 열기) 이동 후 Download 버튼 클릭
* 다운로드 받은 파일을 C 드라이브 jslab 폴더에 압축 해제(기존 파일 덮어쓰기)
  * C:\jslab\ch04
  * C:\jslab\etc
  * C:\jslab\index.html

# 3일차
## 소스코드 다운로드
* day3.zip
* [Download Pages](https://github.com/uzoolove/js202010/blob/main/sample/day3.zip)(마우스 오른쪽 버튼 > 새 탭에서 링크 열기) 이동 후 Download 버튼 클릭
* 다운로드 받은 파일을 C 드라이브 jslab 폴더에 압축 해제(기존 파일 덮어쓰기)
  * C:\jslab\etc
  * C:\jslab\index.html

# 4일차
## 소스코드 다운로드
* day4.zip
* [Download Pages](https://github.com/uzoolove/js202010/blob/main/sample/day4.zip)(마우스 오른쪽 버튼 > 새 탭에서 링크 열기) 이동 후 Download 버튼 클릭
* 다운로드 받은 파일을 C 드라이브 jslab 폴더에 압축 해제(기존 파일 덮어쓰기)
  * C:\jslab\ch05
  * C:\jslab\ch06
  * C:\jslab\etc
  * C:\jslab\index.html

# 관련 사이트
## Nodejs
* https://nodejs.org
## electron
* https://electronjs.org
## ECMAScript6 새로운 기능
* http://es6-features.org/
## ES6 호환성 테이블
* http://kangax.github.io/compat-table/es6/
