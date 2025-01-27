# Dicee Challenge
## 프로젝트 개요
페이지를 리다이렉트 할 때마다 주사위 이미지가 랜덤으로 생성되어 어느쪽이 이겼는지 보여주는 웹 페이지이다. 

## 기술 스택
- JavaScript
- HTML
- CSS

## 설치 및 사용법
1.  이 프로젝트를 로컬로 클론하거나 다운로드합니다.

    ```bash
    git clone https://github.com/JIMIN-1211/FrontEnd-Portfolio.git
    
2. 실행 방법

    cd FrontEnd-Portfolio/10.3+Mondrian+Project/10.3 Mondrian Project

    open index.html  # macOS
    start index.html # Windows

## 주요 기능
- 페이지를 새로고침 할 때마다 주사위가 랜덤으로 보여준다다. 
- 두 주사위 중 어느 쪽 이 이겼는지 보여준다. 

## 문제 해결 과정
html 요소 선택자를 어떤 걸 사용하는게 더 적합한지 고민했다. 
querySelector는 단일 요소를 선택하고, CSS선택자 방식으로 다양한 방식으로 요소를 선택 할 수 있다. 
getElementsTagName 의 경우 태그 이름을 기반으로 여러 요소들을 선택하고 배열처럼 각 요소에 접근하기 위해서는 인덱스를 사용해야 한다.\

==> 따라서 단일 요소 또는 CSS를 변경하고자 하는 경우에는 querySelector를 사용하는 것이 좋고, 
    반대로 여러 요소를 선택하고자 하는경우에는 getElementsBy-- 를 사용하는 것이 적합하다. 

