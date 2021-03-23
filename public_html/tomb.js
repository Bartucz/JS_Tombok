
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


    var kiir = ID("kiir");

    kiir.innerHTML = "Jó reggelt <br>" + tomb;
    
    var osszeg = ID("osszeg");
    osszeg.innerHTML = "Összeg " + osszegzes();
    
    var kiir=ID("vissza");
    kiir.innerHTML="A tömb visszafele "+visszafele();
    
    var kiir=ID("paros");
    kiir.innerHTML="A páros számok: "+paros();
    
    var kiir=ID("ottel");
    kiir.innerHTML="Öttel osztható: "+otteloszt()+" db";
    
    var kiir=ID("max");
    kiir.innerHTML="A legnagyobb szám: "+legnagyobb();
    
    var kiir=ID("kettoharom");
    kiir.innerHTML="Van-e kettővel és hárommal osztható szám: "+kettoharom();
    
    var kiir=ID("negyzetszam");
    kiir.innerHTML="Van-e négyzetszám: "+negyzetsz();
    
    var kiir=ID("negyzetossz");
    kiir.innerHTML="A négyzetszámok összege: "+negyzetosszeg();
    
    var kiir=ID("prim");
    kiir.innerHTML="Van-e prímszám: "+primszam();
    
    var kiir=ID("primdb");
    kiir.innerHTML="A prímszámok darabszáma: "+primszamdb();

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
    for (var i = 0; i <= tomb.length; i++) {
        revtomb[i]=tomb[tomb.length-(i+1)];
    }
    return /*vissza*/ revtomb;
}

function paros(){
    var parosok=[];
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i]%2===0) {
            parosok.push(tomb[i]);
        }
    }
    return parosok;
}

function otteloszt(){
    var osztok=0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i]%5===0) {
            osztok++;
        }
    }
    return osztok;
}

function legnagyobb(){
    var max=0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i]>tomb[max]) {
            max=i;
        }
    }
    return tomb[max];
}

function kettoharom(){
    var vane=false;
    var i=0;
    while(i<tomb.length && vane===false){
        if (tomb[i]%2===0 && tomb[i]%3===0) {
            vane=true;
        }
        i++;
    }
    return (vane?"van":"nincs");
}

function negyzetsz(){
    var vane=false;
    var i=0;
    while(i<tomb.length && vane===false){
        if (Math.sqrt(tomb[i])%1===0) {
            vane=true;
        }
        i++;
    }
    return (vane?"van":"nincs");
}

function negyzetosszeg(){
    var osszeg=0;
    for (var i = 0; i < tomb.length; i++) {
        if (Math.sqrt(tomb[i])%1===0) {
            osszeg+=tomb[i];
        }
    }
    return osszeg;
}

function primszam(){
    var vane=false;
    var i=0;
    var osztok=0;
    while(i<tomb.length && vane===false){
        for (var j = 1; j <= tomb[i]; j++) {
            if (tomb[i]%j===0) {
                osztok++;
            }
        }
        if (osztok===2) {
            vane=true;
        }
        osztok=0;
        i++;
    }
    return (vane?"van":"nincs");
}

function primszamdb(){
    var db=0;
    var osztok=0;
    for (var i = 0; i < tomb.length; i++) {
        for (var j = 1; j <= tomb[i]; j++) {
            if (tomb[i]%j===0) {
                osztok++;
            }
        }
        if (osztok===2) {
            db++;
        }
        osztok=0;
    }
    return db;
}
window.addEventListener("load", init, false);