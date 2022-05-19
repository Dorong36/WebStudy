/*
    숫자추측게임 문제정의
    - 1~100까지의 랜덤수 생성(Math.random())사용
    - 사용자가 입력한 값을 변수에 저장 => 랜덤수와 비교
    - 랜덤수와 비교하여 큰 수, 작은 수, 동일에 따라서 피드백을 웹페이지에 출력
        1. 작은 수 입력시 -> "큰 수를 입력하세요😥"
        2. 큰 수 입력시 -> "작은 수를 입력하세요😥"
        3. 동일 -> "정답입니다~!~!👍"
        4. 기회 다 소진했을 때 -> "도전 실패...😭"
        * 내용을 출력할 때 span요소와 내용을 같이 만들어서 출력
         innerHTML
    - 사용자가 입력한 값 중 오답에 대한 데이터는 웹페이지에 출력
    - 추측버튼에 대한 비활성화( 버튼객체.disabled = true)
        1. 정답을 맞췄을 때
        2. 기회를 모두 소진했을 때
*/

// 랜덤 수 생성 방법
let ranNum = parseInt((Math.random()*100)+1);
console.log('랜덤수 >>> ', ranNum);
let chance = 0;

const answer = document.getElementById("answer");
// input 태그명으로 가져왔을 때는 유사배열 형태로 가져옴!!
// 배열처럼 인덱스로 꺼내오자!!
const btn = document.getElementsByTagName("input")[1];
const Bresult = document.getElementById("before_result");
const result = document.getElementById("result");

function check(){
    let num = parseInt(answer.value)
    if(num === ranNum){
        result.innerHTML = "<span class=success>정답~!~!~!~!😎</span>";
        btn.disabled = true;
    }else if(num < ranNum){
        result.innerHTML = "<span class=fail>큰 수를 입력하세요🔼</span>";
        Bresult.innerHTML += `${num} `;
    }else{
        result.innerHTML = "<span class=fail>작은 수를 입력하세요🔽</span>";
        Bresult.innerHTML += `${num} `;
    }
    answer.value = null;
    chance++;
    if(chance === 10){
        result.innerHTML = "<span class=fail>도전 실패...😭</span>";
        btn.disabled = true;
    }

}


