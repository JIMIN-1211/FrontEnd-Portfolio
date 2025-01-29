# Simon Game
## 프로젝트 개요
간단한 사이먼 게임을 즐길 수 있는 웹페이지이다. 

## 기술 스택
- HTML
- CSS
- JavaScript
- jQuery

## 설치 및 사용법
1.  이 프로젝트를 로컬로 클론하거나 다운로드합니다.

    ```bash
    git clone https://github.com/JIMIN-1211/FrontEnd-Portfolio.git
    
2. 실행 방법

    cd FrontEnd-Portfolio/Simon+Game+Challenge+Starting+Files/Simon Game Challenge Starting Files

    open index.html  # macOS
    start index.html # Windows

## 주요 기능
- 랜덤 색상의 버튼이 깜박이면 그 패턴을 암기하여 사용자가 해당 색상 패턴을 클릭하면 계속해서 레벨을 올려가며 즐길 수 있는 사이먼 게임 웹페이지이다. 
- 만약 틀리면 처음부터 다시 시작할 수 있다. 

## 문제 해결 과정
jQuery라이브러리를 이용하여 웹페이지를 구축하는데 javascript와 jQuery의 차이가 뭔지 헷갈렸었다. 
조사해 본 결과

jQuery는 javaScript의 복잡하고 긴 html조작 코드를 보다 간결하고 쉽게 해주는 라이브러리였다. 
예를들어 .classList.addClass() ==> .addClass(), .addEventListener() ==> .on()
이런 식으로 javascript 코드를 간결화 해준다. 

