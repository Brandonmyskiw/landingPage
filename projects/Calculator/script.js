var x = document.getElementById("resultField");



function button1() {
    x.innerHTML = x.innerHTML + "1";
}

function button2() {
    x.innerHTML = x.innerHTML + "2";
}

function button3() {
    x.innerHTML = x.innerHTML + "3";
}

function button4() {
    x.innerHTML = x.innerHTML + "4";
}

function button5() {
    x.innerHTML = x.innerHTML + "5";
}

function button6() {
    x.innerHTML = x.innerHTML + "6";
}

function button7() {
    x.innerHTML = x.innerHTML + "7";
}

function button8() {
    x.innerHTML = x.innerHTML + "8";
}

function button9() {
    x.innerHTML = x.innerHTML + "9";
}

function button0() {
    x.innerHTML = x.innerHTML + "0";
}

function buttonPlus() {
    x.innerHTML = x.innerHTML + "+";

}

function buttonMinus() {
    x.innerHTML = x.innerHTML + "-";
}

function buttonDivide() {
    x.innerHTML = x.innerHTML + "/";
}

function buttonx() {
    x.innerHTML = x.innerHTML + "*";
}

function buttonPoint() {
    x.innerHTML = x.innerHTML + "."
}

function buttonClear() {
    x.innerHTML = "";
}

function buttonEqual() {
    var y = x.innerText;
    y = eval(y)
    x.innerText = y;
}
