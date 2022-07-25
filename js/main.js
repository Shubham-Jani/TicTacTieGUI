var name1;
var name2;

var win = false;
function validateForm(){
    name1 = document.forms['n-form']['nameO'].value;
    name2 = document.forms['n-form']['nameX'].value;
    console.log(name1);
    console.log(name2);
    document.getElementById("turn-info").textContent = "Turn: " + name1;
    return false;
}
var turn="O";
var count=0;
function uniButton(jsData, htmlData){
    if(jsData === "X" || jsData==="O" || win || name1 == null || name2 == null){
        if(name1 == null || name2 == null){
            document.getElementById("turn-info").textContent = "Please Enter the names First";
        }
        console.log("nah");
    }else{
    htmlData.textContent = turn;
    count++;
    if(turn === "O"){
        turn = "X";
        document.getElementById("turn-info").textContent = "Turn: " + name2;
    }
    else{
        turn = "O";
        document.getElementById("turn-info").textContent = "Turn: " + name1;
    }
    }
    if(count===9 || checkWinner() ){
        if(count === 9 && !checkWinner()){
            document.getElementById("turn-info").textContent = "gameOver No one Won";
        }
        else if(checkWinner()){
            win = true;
            if(turn === "X"){
                document.getElementById("turn-info").textContent = name1 + " won";
            }else{
                document.getElementById("turn-info").textContent =  name2 + " won";
            }
        }
    }
}

function buttonClicked1(){
    let jsData = document.getElementById("1").textContent;
    let htmlData = document.getElementById("1")
    uniButton(jsData,htmlData);
}
function buttonClicked2(){
    let jsData = document.getElementById("2").textContent;
    let htmlData = document.getElementById("2")
    uniButton(jsData,htmlData);
}
function buttonClicked3(){
    let jsData = document.getElementById("3").textContent;
    let htmlData = document.getElementById("3")
    uniButton(jsData,htmlData);
}
function buttonClicked4(){
    let jsData = document.getElementById("4").textContent;
    let htmlData = document.getElementById("4")
    uniButton(jsData,htmlData);
}
function buttonClicked5(){
    let jsData = document.getElementById("5").textContent;
    let htmlData = document.getElementById("5")
    uniButton(jsData,htmlData);
}
function buttonClicked6(){
    let jsData = document.getElementById("6").textContent;
    let htmlData = document.getElementById("6")
    uniButton(jsData,htmlData);
}
function buttonClicked7(){
    let jsData = document.getElementById("7").textContent;
    let htmlData = document.getElementById("7")
    uniButton(jsData,htmlData);
}
function buttonClicked8(){
    let jsData = document.getElementById("8").textContent;
    let htmlData = document.getElementById("8")
    uniButton(jsData,htmlData);
}
function buttonClicked9(){
    let jsData = document.getElementById("9").textContent;
    let htmlData = document.getElementById("9")
    uniButton(jsData,htmlData);
}
function checkWinner(){
    var b1 =document.getElementById("1");
    var b2 = document.getElementById("2");
    var b3 = document.getElementById("3");
    var b4 = document.getElementById("4");
    var b5 = document.getElementById("5");
    var b6 = document.getElementById("6");
    var b7 = document.getElementById("7");
    var b8 = document.getElementById("8");
    var b9 = document.getElementById("9");
    var b1Data = b1.textContent;
    var b2Data = b2.textContent;
    var b3Data = b3.textContent;
    if((b1Data === b2Data && b2Data === "X"  && b2Data ===b3Data && b2Data === "X")
    ||b1Data === b2Data && b2Data === "O"&& b2Data ===b3Data && b2Data === "O" ){
        console.log(b1.textContent + b2.textContent+ b3.textContent );
        return true;
    }
    if((b4.textContent === b5.textContent && b5.textContent === "X" && b5.textContent === b6.textContent && b5.textContent === "X")
     || b4.textContent === b5.textContent && b5.textContent === "O" && b5.textContent === b6.textContent&& b5.textContent === "O"){
        return true;
    }
    if((b7.textContent === b8.textContent && b8.textContent === "X" && b8.textContent === b9.textContent && b8.textContent === "X")
     || (b7.textContent === b8.textContent && b8.textContent === "O" && b8.textContent === b9.textContent && b8.textContent ==="O")){
        return true;
    }
    if((b1.textContent === b4.textContent && b4.textContent ==="X" && b4.textContent === b7.textContent&& b4.textContent === "X")
    || b1.textContent === b4.textContent && b4.textContent === "O" && b4.textContent === b7.textContent  && b4.textContent === "O"){
        return true;
    }
    if((b5.textContent === b2.textContent && b2.textContent  ==="X" && b2.textContent === b6.textContent && b2.textContent  ==="X")
    || b5.textContent === b2.textContent && b2.textContent === "O" && b2.textContent === b6.textContent && b2.textContent === "O"){
        return true;
    }
    if((b3.textContent === b6.textContent && b6.textContent ==="X" && b6.textContent === b9.textContent && b6.textContent ==="X")
    || b3.textContent === b6.textContent && b6.textContent  === "O"  && b6.textContent === b9.textContent && b6.textContent  === "O"){
        return true;
    }
    if((b1.textContent === b5.textContent && b5.textContent  ==="X" && b5.textContent === b9.textContent && b5.textContent  ==="X" )
    || b1.textContent === b5.textContent === "O" && b5.textContent === b9.textContent === "O"){
        return true;
    }
    if((b7.textContent ===  b5.textContent && b5.textContent ==="X" && b5.textContent === b3.textContent && b5.textContent ==="X")
    || b7.textContent === b5.textContent && b5.textContent === "O" &&  b5.textContent === b3.textContent && b5.textContent === "O"){
        return true;
    }
    else{
        console.log("lol");
        return false;
    }

}