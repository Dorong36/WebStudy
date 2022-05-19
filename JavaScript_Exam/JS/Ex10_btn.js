/*
    버튼을 눌렀을 때 숫자를 증감시키는 기능 구현
    접근할 대상요소 : p#num
    1. p요소 객체를 접근
    2. 증감시키는 함수 구현
        - 증감을 위해서는 p요소의 내용을 활용 (innerHTML 속성)
        - innerHTML 속성은 문자열값이기 때문에 정수변환 후 연산
        - 연산결과를 p요소에 반영(변동)
        - 감소기능의 경우 음수값이 나오지 않도록 조건정의
*/
const p_obj = document.getElementById("num");

function plus(){
    p_obj.innerHTML = parseInt(p_obj.innerHTML)+1;
}

function minus(){
    if(p_obj.innerHTML > 0){
        p_obj.innerHTML = parseInt(p_obj.innerHTML)-1;
    }
}