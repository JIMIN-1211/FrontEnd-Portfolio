# LAOS Flag 만들기
## 프로젝트 개요
이 프로젝트는 HTML과 CSS로만 구성된 간단한 웹 페이지입니다. 국기 디자인은 라오스의 국기를 기반으로 하며, CSS로 배경색, 원형 요소 및 텍스트를 스타일링하여 디자인합니다.
css selelctor, position 개념을 확립하고 이를 실습해 보기 위해 제작한 웹 페이지 입니다. 

## 기술 스택
- HTML
- CSS

## 설치 및 사용법
 1.  이 프로젝트를 로컬로 클론하거나 다운로드합니다.

    ```bash
    git clone https://github.com/JIMIN-1211/FrontEnd-Portfolio.git
    
 2. 실행 방법

    cd FrontEnd-Portfolio/7.3+Flag+Project/7.3 CSS Flag Project/README.md

    open index.html  # macOS
    start index.html # Windows
  
## 주요 기능
- 라오스 국기를 보여준다. 
 
## 문제 해결 과정
laos국기의 파란색 div 부분에 position을 absolute로 정의하고 top속성값을 150px을 주었을 때 흰색 원 div의 top속성값이 자동으로 150px이 주어진 상태여서
처음에는 position값을 바꾸어 봤지만 top값이 바꾸질 않자 top 값을 재정의 해주고, position값을 absolute 로 바꾸어 주니 국기 모양이 완성 되었다.

==> 즉 부모의 position값이 존재할 경우 자식이 부모의 top, right, bottom, left, z-index 속성값을 상속받으므로 다시 자식 속성값을 재정의 해줘야한다.

