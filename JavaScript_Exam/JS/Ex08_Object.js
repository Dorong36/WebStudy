/* 
    객체(Object)
    - java : 필드, 메서드
    - javaScript : 속성, 메소드
    - 구조 : {속성: 값1, 속성: 값2, ...}
    - 속성 : 문자열로 정의
    - 값 : number, string , boolean, object, function
    - 종류
        - 내장객체(String, Array, Date, Math)
        - 브라우저내장객체(BOM(Browser Object Model), DOM(Document Object Model))
        - 사용자정의객체
*/
let name = "MK"

let person = {
    "name" : "mike",
    "gender" : "male",
    "age" : 50,
    "greet" : function(){
        // console.log("Hello, " + this.name + "!!");
        // 탬플릿문자열(백틱) : 문자열 내 변수를 사용할 수 있는 문법
        // 사용법 : `${변수명}문자열`
        console.log(`Hello, ${this.name}!!`);
    }
}

// 객체 내 속성 접근 방법 : 객체명.속성명
//person객체의 속성 중 name을 출력
console.log(person.name);
person.greet();