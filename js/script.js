function circleArea() {
    var r = document.getElementById('r').value;
    var PI = 3.141;
    document.getElementById('plostina').value = r*r*PI;
    document.getElementById('perimetar').value = 2*r*PI;
}
circleArea();
