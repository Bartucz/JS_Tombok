
function ID(nev) {
    return document.getElementById(nev);
}






var tol ="";
var ig ="";
function beker() {

    tol = ID("tol").value;
    ig = ID("ig").value;
}
var tomb = [];

function dolgozz() {

    beker();
    feltolt();
    osszegzes();


    var kiir = ID("kiir");

    kiir.innerHTML = "Jó reggelt <br>" + tomb;

    var kiir = ID("osszeg");
    kiir.innerHTML = "Összeg " + osszegzes();

}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function feltolt() {

    tomb = [];
    for (var i = 0; i < tomb.length; i++) {
        tomb[i] = getRndInteger(tol, ig);
    }


}

function osszegzes() {
    var summ = 0;
    for (var i = 0; i < tomb.length; i++) {
        summ += tomb[i];
    }
    return summ;



}








function init() {

    var gomb = ID("gomb");
    gomb.addEventListener("click", dolgozz);



}


function visszafele(){
    var vissza=tomb.reverse();
    var kiir=ID("vissza");
    kiir.innerHTML+=vissza;
}


window.addEventListener("load", init, false);