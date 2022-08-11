// 2 X 2 Matrix
let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
let d = document.getElementById("d")
let answer = document.getElementById("answer");
let btn = document.getElementById("solve");

btn.onclick = function(){
    answer.innerHTML = eval(a.value * d.value) - (b.value * c.value)
}
   
// 3 X 3 Matrix
let a1 = document.getElementById("a1")
let a2 = document.getElementById("a2")
let a3 = document.getElementById("a3")
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c3 = document.getElementById("c3")
let answer1 = document.getElementById("answer1");
let btn2 = document.getElementById("solution");


btn2.onclick = function(){
    answer1.innerHTML = eval(((a1.value * b2.value * c3.value) + (a2.value * b3.value * c1.value) + (a3.value * b1.value * c2.value)) - ((a3.value * b2.value * c1.value) + (a2.value * b1.value * c3.value) + (a1.value * b3.value * c2.value)))
}


function two(){
    document.getElementById("container").style.visibility = "visible";
    document.getElementById("container").style.opacity = "1";
    document.getElementById("container2").style.visibility = "hidden";
    document.getElementById("container2").style.opacity = "0";
}

function three(){
    document.getElementById("container2").style.visibility = "visible";
    document.getElementById("container2").style.opacity = "1";
    document.getElementById("container").style.visibility = "hidden";
}