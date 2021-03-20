
function ID(nev) {
    return document.getElementById(nev);
}






var tol =0;
var ig =0;
function beker() {

    tol = ID("tol").value;
    ig = ID("ig").value;;
    return [tol, ig];
}
var tomb = [];

function dolgozz() {

    //beker();
    feltolt();
    osszegzes();
    visszafele();


    var kiir = ID("kiir");

    kiir.innerHTML = "Jó reggelt <br>" + tomb;

    var kiir = ID("osszeg");
    kiir.innerHTML = "Összeg " + osszegzes();
    
    var kiir=ID("vissza");
    kiir.innerHTML="A tömb visszafele "+visszafele();

}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function feltolt() {

    tomb = [];
    var szamok=beker();
    var meret=szamok[1]-szamok[0];
    var min=parseInt(szamok[0]);
    var max=parseInt(szamok[1]);
    for (var i = 0; i < meret; i++) {
        tomb[i] = getRndInteger(min,max);
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
    return vissza;
}


window.addEventListener("load", init, false);