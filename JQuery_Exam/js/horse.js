$(document).ready(()=>{

    //왼쪽버튼을 클릭했을 때 말을 왼쪽으로 이동

    let pos = 0; //말의 위치값

    //키보드를 눌렀을 때 말을 이동할 수 있는 기능 구현
    $('body').on('keyup', (event)=>{

        //이벤트객체 : 발생한 이벤트의 정보를 담고 있는 객체
        //key : 누른 키의 이름
        //keyCode : 누른 키의 아스키값
        //console.log(event.keyCode);
        if(event.keyCode == 37){ //왼쪽
            leftMove();
        }else if(event.keyCode == 39){  //오른쪽
            rightMove();
        }
    })

    //함수호출1
    // $('.left').on('click', ()=>{
    //     leftMove();
    // });
    //함수호출2(주로 사용)
    // 여기서 함수 이름에 ()붙이면 시작하기도 전에 일단 한번 실행되어버림!! 
    //      => 자바스크립트 엔진에서 함수호출 코드가 있으면 가장 먼저 실행
    $('.left').on('click', leftMove);

    $('.right').on('click', rightMove);


    //왼쪽, 오른쪽으로 이동하는 함수 구현(코드 정리)
    function leftMove(){
        if(pos < 1200){pos += 100}
        $('img').css('right', `${pos}px`)
                .css('transform', 'scaleX(1)');
        
    }

    function rightMove(){
        if(pos > 0){pos -= 100}
        $('img').css('right', `${pos}px`)
                .css('transform', 'scaleX(-1)');
        
    }



})