//초기화
var coin = 0;
document.getElementById("current").innerHTML = coin + "원";
document.getElementById("selection").innerHTML = "아이스크림을 선택해주세요";
color_change();

//버튼 리스너 등록
const btn1 = document.getElementById("btn1"); //1000원 버튼
btn1.addEventListener("click", click_btn1);

const btn2 = document.getElementById("btn2"); //500원 버튼
btn2.addEventListener("click", click_btn2);

const btn3 = document.getElementById("btn3"); //100원 버튼
btn3.addEventListener("click", click_btn3);

const btn4 = document.getElementById("icecream1"); //돼지바 버튼
btn4.addEventListener("click", click_icecream1);

const btn5 = document.getElementById("icecream2"); //월드콘 버튼
btn5.addEventListener("click", click_icecream2);

const btn6 = document.getElementById("icecream3"); //누크바 버튼
btn6.addEventListener("click", click_icecream3);

//1000원 버튼 클릭시 실행될 함수
function click_btn1(){
    coin += 1000;
    color_change();
    alert("1000원 넣음");
    document.getElementById("current").innerHTML = coin + "원";
}

//500원 버튼 클릭시 실행될 함수
function click_btn2(){
    coin += 500;
    color_change();
    alert("500원 넣음");
    document.getElementById("current").innerHTML = coin + "원";
}

//100원 버튼 클릭시 실행될 함수
function click_btn3(){
    coin += 100;
    color_change();
    alert("100원 넣음");
    document.getElementById("current").innerHTML = coin + "원";
}

//돼지바 클릭시 실행될 함수
function click_icecream1(){
    if (coin < 700){
        alert("돈이 부족합니다");
        return;
    }
    coin -= 700;
    document.getElementById("selection").innerHTML = "돼지바";
    color_change();
    document.getElementById("current").innerHTML = coin + "원";
}

//월드콘 클릭시 실행될 함수
function click_icecream2(){
    if (coin < 1000){
        alert("돈이 부족합니다");
        return;
    }
    coin -= 1000;
    document.getElementById("selection").innerHTML = "월드콘";
    color_change();
    document.getElementById("current").innerHTML = coin + "원";
}

//누크바 클릭시 실행될 함수
function click_icecream3(){
    if (coin < 500){
        alert("돈이 부족합니다");
        return;
    }
    coin -= 500;
    document.getElementById("selection").innerHTML = "누크바";
    color_change();
    document.getElementById("current").innerHTML = coin + "원";
}

//색 변경 함수
function color_change(){
    if (coin < 500){
        document.getElementById("icecream1").style.color = "red";
        document.getElementById("icecream2").style.color = "red";
        document.getElementById("icecream3").style.color = "red";
    }
    else if (coin < 700){
        document.getElementById("icecream1").style.color = "red";
        document.getElementById("icecream2").style.color = "red";
        document.getElementById("icecream3").style.color = "blue";
    }
    else if (coin < 1000){
        document.getElementById("icecream1").style.color = "blue";
        document.getElementById("icecream2").style.color = "red";
        document.getElementById("icecream3").style.color = "blue";
    }
    else{
        document.getElementById("icecream1").style.color = "blue";
        document.getElementById("icecream2").style.color = "blue";
        document.getElementById("icecream3").style.color = "blue";
    }
}