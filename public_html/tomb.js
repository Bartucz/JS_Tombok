
function ID(nev) {
    return document.getElementById(nev);
}






var tol =0;
var ig =0;
function beker() {

    tol = Number(ID("tol").value);
    ig = Number(ID("ig").value);
}
var tomb = [];

function dolgozz() {

    beker();
    feltolt();
    osszegzes();
    visszafele();


    var kiir = ID("kiir");

    kiir.innerHTML = "Jó reggelt <br>" + tomb;
    
    var osszeg = ID("osszeg");
    osszeg.innerHTML = "Összeg " + osszegzes();
    
    var kiir=ID("vissza");
    kiir.innerHTML="A tömb visszafele "+visszafele();

}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function feltolt() {

    tomb = [];
    for (var i = 0; i < ig-tol; i++) {
        tomb[i] = getRndInteger(tol,ig);
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
    //var vissza=tomb.reverse();
    var revtomb=[];
    for (var i = 0; i < tomb.length; i++) {
        revtomb[i]=tomb[tomb.length-i];
    }
    return /*vissza*/ revtomb;
}


window.addEventListener("load", init, false);