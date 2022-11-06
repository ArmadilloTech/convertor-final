
let value1 = document.getElementById('select1')

function val1(){
    if (value1.value === "temp"){ 
   document.getElementById("lbl1").textContent = "farenheit";
   document.getElementById("lbl2").textContent = "celsius"

   let celsius = document.getElementById('box1');
    let fahrenheit = document.getElementById('box2');
    fahrenheit.oninput = function () {
        let c = ((parseFloat(
            fahrenheit.value) - 32) * 5) / 9;
        celsius.value = parseFloat(c.toFixed(2));
}
celsius.oninput = function () {
    let f = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));
}
    }
    else if (value1.value === "distance") {
        document.getElementById("lbl1").textContent = "FOOT";
        document.getElementById("lbl2").textContent = "mile"

        let foot = document.getElementById('box1');
        let mile = document.getElementById('box2');
        foot.oninput = function () {
            let c = ((parseFloat(
                foot.value) *5280 ));
            mile.value = parseFloat(c.toFixed(2));


    }
    mile.oninput = function () {
        let f = (parseFloat(mile.value) / 5280) ;
        foot.value = parseFloat(f.toFixed(2));
    }

        
    }
    else if (value1.value === "length") {
        document.getElementById("lbl1").textContent = "CM";
        document.getElementById("lbl2").textContent = "INCH"
        let cm = document.getElementById('box1');
        let inch = document.getElementById('box2');
        cm.oninput = function () {
            let c = ((parseFloat(
                cm.value) / 2.54 ));
                inch.value = parseFloat(c.toFixed(2));


    }
    inch.oninput = function () {
        let f = (parseFloat(inch.value) * 2.54) ;
        cm.value = parseFloat(f.toFixed(2));
    }
    }
    else if (value1.value === "weight") {
        document.getElementById("lbl1").textContent = "KG";
        document.getElementById("lbl2").textContent = "LB"
        let kg = document.getElementById('box1');
        let lb = document.getElementById('box2');
        kg.oninput = function () {
            let c = ((parseFloat(
                kg.value) * 2.20462 ));
                lb.value = parseFloat(c.toFixed(4));


    }
    lb.oninput = function () {
        let f = (parseFloat(lb.value) / 2.20462) ;
        kg.value = parseFloat(f.toFixed(4));
    }
    }
    else if (value1.value === "time") {
        document.getElementById("lbl1").textContent = "SEC";
        document.getElementById("lbl2").textContent = "MIN";
        let min = document.getElementById('box1');
        let sec = document.getElementById('box2');
        min.oninput = function () {
            let c = ((parseFloat(
                min.value) / 60 ));
                sec.value = parseFloat(c.toFixed(2));


    }
    sec.oninput = function () {
        let f = (parseFloat(sec.value) * 60) ;
        min.value = parseFloat(f.toFixed(2));
    }
    }
}
// val1()
// console.log(value1.value)
// function singleSelectChangeText(){
    
// }

