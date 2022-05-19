// 타입선택자를 이용하여 img요소 객체 접근
const img = document.querySelector('img');

function imgChange(){

    // 속성변경
    img.setAttribute('src', './img/춘식2.gif');

    // 이미지 크기 변경
    img.style.width = '498px';
    img.style.height = '452px';
    img.style.border = '2px solid black';  //border에 세 가지 값 한번에 넣음
    img.style.boxShadow = '3px 3px 3px black';

}