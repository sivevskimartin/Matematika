function circleArea() {
    var r = document.getElementById('r').value;
    var PI = 3.141;
    document.getElementById('plostina').value = r*r*PI + " " + "cm";
    document.getElementById('perimetar').value = 2*r*PI + " " + "cm";
}
circleArea();

function squareArea() {
    var a = document.getElementById('a').value;
    document.getElementById('plostinaNaKvadrat').value = a*a + " " + "cm";
    document.getElementById('perimetarNaKvadrat').value = 4*a + " " + "cm";
}
squareArea();