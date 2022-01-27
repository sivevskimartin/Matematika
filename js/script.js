function circleArea() {
    var r = document.getElementById('r').value;
    var PI = 3.141;
    document.getElementById('plostina').value = r*r*PI + " " + "cm";
    document.getElementById('perimetar').value = 2*r*PI + " " + "cm";
    if(r<=0) {
        alert("БРОЈОТ ШТО ГО ВНЕСОВТЕ НЕМОЖЕ ДА БИДЕ РАДИУС");
    }
}

function squareArea() {
    var a = document.getElementById('a').value;
    document.getElementById('plostinaNaKvadrat').value = a*a + " " + "cm";
    document.getElementById('perimetarNaKvadrat').value = 4*a + " " + "cm";
    if(a<=0) {
        alert("БРОЈОТ ШТО ГО ВНЕСОВТЕ НЕМОЖЕ ДА БИДЕ СТРАНА НА КВАДРАТ");
    }
}


function rectangleArea() {
    var a = document.getElementById('aR').value;
    var b = document.getElementById('bR').value;
    document.getElementById('plostinaNaPravoagolnik').value = a*b + " " + "cm";
    document.getElementById('perimetarNaPravoagolnik').value = (2*a)+(2*b) + " " + "cm";
    if(a<=0) {
        alert("БРОЈОТ ШТО ГО ВНЕСОВТЕ ЗА СТРАНА А НЕМОЖЕ ДА БИДЕ СТРАНА НА ПРАВОАГОЛНИК");
    }
    if (b<=0){
        alert("БРОЈОТ ШТО ГО ВНЕСОВТЕ ЗА СТРАНА Б НЕМОЖЕ ДА БИДЕ СТРАНА НА ПРАВОАГОЛНИК");
    }
}
