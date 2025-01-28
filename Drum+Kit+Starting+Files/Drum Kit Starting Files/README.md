# Drum Kit
## 프로젝트 개요
입력 키 또는 버튼 클릭을 통해 드럼을 연주할 수 있는 웹페이지입니다. 

## 기술 스택
- HTML
- CSS
- JavaScript

## 설치 및 사용법
1.  이 프로젝트를 로컬로 클론하거나 다운로드합니다.

    ```bash
    git clone https://github.com/JIMIN-1211/FrontEnd-Portfolio.git
    
2. 실행 방법

    cd FrontEnd-Portfolio/Drum+Kit+Starting+Files/Drum Kit Starting Files

    open index.html  # macOS
    start index.html # Windows

## 주요 기능
- 버튼 클릭 시 해당 드럼의 소리가 나오면서 연주가 가능하다.
- 해당 버튼에 맞는 키를 입력 시 악기 소리가 나오면서 연주가 가능하다. 

## 문제 해결 과정
1. 선택한 요소에 클래스를 추가하거나 제거하려면 classList에 접근하여 add/remove해야한다. 
2. 일반 함수(function)과 화살표 함수의 this객체의 바인딩 범위(scope)가 다르다는 것을 배웠다. 
처음 이벤트 리스너 실행 함수를 화살표 함수로 정의한 뒤 this의 값이 undefined로 나오길래 디버깅 해보면서 구글링 한 결과

- function의 경우 this가 바인딩 되는 범위가 함수가 호출된  지점에서 바인딩 된다. 즉 클릭이벤트 리스너가 발생한 뒤에 this가 바인딩된다. 
- 하지만 화살표 함수의 경우 정의된 시점에서 this가 바인딩 되므로 클릭이벤트가 발생하기도 전에 이미 this객체가 window를 바인딩하게 된다. 

따라서 이와 같은 lexical scoping방식으로 this가 참조되어 undefined가 나오는 걸 막기 위해서는 함수를 일반함수(function)을 사용하거나, 
this ==> event.target으로 변경하여 코드를 작성할 필요가 있다. 




