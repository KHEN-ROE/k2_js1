//자바스크립트 랜더링 제어

// document.addEventListener("DOMContentLoaded", function () { //내용이 없는 콜백함수
//     // document.getElementById("idh1").innerHTML ="K-Digital";//해당하는 id를 찾아서 글자를 바꿔라
//     //DOM 요소 생성
// });


//DOM 요소 생성 함수
// function domAdd() {
//     console.log('domAdd');
// }

const domAdd = () => { //const는 상수. 변수 내용이 바뀌지 않음 변수에 funcion도 집어넣을 수 있다
    console.log('domAdd');
    const btn1 = document.createElement("button");
    btn1.innerHTML = "버튼1";
    btn1.id= "bt1";
    btn1.className = "btc";

    document.getElementById("content").append(btn1);

    const btn2 = document.createElement("button");
    btn2.innerHTML = "버튼2";
    btn2.id= "bt2";
    btn2.className = "btc";

    document.getElementById("content").append(btn2);

    const btn3 = document.createElement("button");
    btn3.innerHTML = "버튼3";
    btn3.id= "bt3";
    btn3.className = "btc";

    document.getElementById("content").append(btn3);
}

//DOM 요소 접근
const domRead = () =>{
    const btc = document.querySelectorAll(".btc") ;
    console.log(btc);    

    //for 순회
    console.log("**for**");
    for(let i=0; i<btc.length; i++) { //let은 바뀐다. const는 안바뀜. 자바스크립트에선 이 두개 밖에 없다 int,double이런거 안씀
        console.log(btc[i]);
    }

    //for ... in 순회. break 못 걺-?
    console.log("**for in**");
    for(let k in btc) {
        console.log(btc[k]);
    }

    //for each 순회
    console.log("**for each**");
    btc.forEach((item, k) => console.log(item, k)) //item은 그냥 변수명

    //for ... of 순회. break, continue 가능
    console.log("**for of**");
    for(let [k,item] of btc.entries()) {//key는 배열의 index를 의미함
        console.log(k, item.innerHTML);
        if (k==1) break;
    }
}

//자바스크립트 랜더링 제어
document.addEventListener("DOMContentLoaded", () => {//function이 없는 함수는 화살표로 대체 가능
    //DOM 요소 생성
    domAdd();

    //DOM 요소 접근
    domRead();
}) ; 



