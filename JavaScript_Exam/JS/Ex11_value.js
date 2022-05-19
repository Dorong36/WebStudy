/*
    1. input 요소 객체에 접근
    2. input 요소에 입력된 데이터 콘솔창에 출력
    3. 입력된 데이터를 웹 페이지에 출력
*/

const data = document.getElementById("data");
const dataView = document.getElementById("dataView");

//체크박스 타입의 요소들을 유사배열형태로 반환하여 변수에 저장
const coffeeList = document.getElementsByName("coffee");

console.log("체크박스요소 >>> ", coffeeList);

for(let i = 0; i < coffeeList.length; i++){
    console.log(coffeeList[i].value);
}

// 클릭했을 때 입력한 데이터 출력
function show(){
    // 사용자가 입력한 데이터를 가져오기 위한 속성
    // 입력요소(input)는 innerHTML 속성으로 값을 가져올 수 없음
    // value속성을 이용해서 값을 접근할 수 있음.
     console.log(data.value);

    /*
    input요소의 value를 새로운 데이터로 초기화할 때
    data.value = '접근 성공'
    */

    //입력한 데이터를 p요소에 초기화
    dataView.innerHTML = data.value;

}
