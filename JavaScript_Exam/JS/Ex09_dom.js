/*
    1. h1 요소의 객체를 접근
    2. h1 요소의 내용을 콘솔창에 출력
    3. h1 요소의 내용을 다른 내용으로 변경하여 출력
*/

const h1_obj = document.getElementById("title");

console.log(h1_obj);
// html객체.innerHTML
// 요소의 내용을 접근 or 변경할 때 사용하는 속성
// 시작태그와 끝태그 구조를 가진 요소에 대해서 활용가능!!
console.log(h1_obj.innerHTML); 

// innerHTML 속성으로 내용을 변경할 때에는 대입연산자를 이용해서 새로운 데이터를 초기화
h1_obj.innerHTML = "커피로,,<br> 버티는,,,<br> 오전,,";


/*
    1. 버튼요소의 객체를 접근
    2. 버튼요소의 내용을 '비활성화'로 변경
*/
const btn_obj = document.getElementById("btn");
function textChg(){
    if(btn_obj.innerHTML == "활성화"){
        btn_obj.innerHTML = "비활성화";
    }else{
        btn_obj.innerHTML = "활성화";
    }
    
}

