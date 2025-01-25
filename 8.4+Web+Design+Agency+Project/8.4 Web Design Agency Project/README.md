# Web Design Agency Project
## 프로젝트 개요
웹 페이지 크기에 따라 레이아웃과 각요소들의 사이즈가 달라지는 반응형 웹 디자인 페이지이다. 

## 기술 스택
- HTML
- CSS

## 설치 및 사용법
1.  이 프로젝트를 로컬로 클론하거나 다운로드합니다.

   ```bash
   git clone https://github.com/yourusername/Web Design Agency Project.git
2. 실행 방법
  cd css-flag-project
  open index.html  # macOS
  start index.html # Windows

## 주요 기능
- 웹 페이지 너비가 680px이하이면 웹의 레이아웃이 변경된다. 
- 레이아웃이 변경 됨에 따라 각 요소들의 사이즈, 폰트 정렬 등이 달라진다. 

## 문제 해결 과정
웹 페이지가 줄어듦에 따라 이미지 크기도 바뀌어야 했는데 이 이미지 크기 의 비율을 유지하면서 줄이는 부분에 대해 어려움을 겪었다. 
너비를 퍼센테이지로 지정해 보기도 했고, vw 단위로도 지정해 보았지만 안되어서 막혀 구글링해서 찾아보니
"object-fit"속성이 존재했고 이 속성값을 cover로 지정해 주어 이미지의 비율을 유지하면서 이미지 크기가 줄어 들도록 할 수 있었다. 

==> 이미지 비율을 맞추기 위한 CSS속성 "object-fit"

