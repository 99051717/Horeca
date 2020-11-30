const prijs_fris = 2;
const prijs_bier = 3;
const prijs_wijn = 4;
const prijs_8 = 8;
const prijs_16 = 15;
var wijn_aantal = 0;
var bier_aantal = 0;
var fris_aantal = 0;
var aantal_bitter8 = 0;
var aantal_bitter16 = 0;
var biertotaalprijs;
var wijntotaalprijs;
var fristotaalprijs;
var bitterbal16totaalprijs;
var bitterbal8totaalprijs;
var totaal;


function keuzebestelling() {
    var keuze = prompt("wat wilt u bestellen drinken of eten ?");
    if (keuze == "eten"){
        bitterballen();
    }
    else if (keuze == "drinken"){
        bestellen();
    }
    else if (keuze == "stop"){
        bereken_totaal();
    }
}




function bitterballen() {
    var keuze = prompt("hoeveel bitterballen wil je bestellen 8 of 16 ?");

    if (keuze == "8") {
        aantal_bitter8++;
    }
    else if (keuze == "16") {
        aantal_bitter16++;
    }
    keuzebestelling();
}





function bestellen() {
    var keuze = prompt("wat wil je bestellen bier, fris of wijn ?");

    if (keuze != "stop") {
        if (keuze == "wijn") {
            wijn_aantal = wijn_aantal + parseInt(prompt("hoeveel wijn wilt u bestellen"));
            bestellen();
        }
        else if (keuze == "bier") {
            bier_aantal = bier_aantal + parseInt(prompt("hoeveel bier wilt u bestellen ?"));
            bestellen();
        }
        else if (keuze == "fris") {
            fris_aantal = fris_aantal + parseInt(prompt("hoeveel fris wilt u bestellen ?"));
            bestellen();
        } else {
            alert("Foutmelding");
            bestellen();
        }
    } else if (keuze == "stop") {
        keuzebestelling();
    }
}



function bereken_totaal() {
    biertotaalprijs = prijs_bier * bier_aantal;
    wijntotaalprijs = prijs_wijn * wijn_aantal;
    fristotaalprijs = prijs_fris * fris_aantal;
    bitterbal8totaalprijs = prijs_8 * aantal_bitter8;
    bitterbal16totaalprijs = prijs_16 * aantal_bitter16;
    totaal = biertotaalprijs + wijntotaalprijs + fristotaalprijs + bitterbal8totaalprijs + bitterbal16totaalprijs;
    print_bestelling();
}



function print_bestelling() {
    if (bier_aantal != 0) {
        document.write("Aantal bier: " + bier_aantal + " x " + prijs_bier + " = " + biertotaalprijs + "<br>");
    }
    if (wijn_aantal != 0) {
        document.write("Aantal wijn: " + wijn_aantal + " x " + prijs_wijn + " = " + wijntotaalprijs + "<br>");
    }
    if (fris_aantal != 0) {
        document.write("Aantal fris: " + fris_aantal + " x " + prijs_fris + " = " + fristotaalprijs + "<br>");
    }
    if (aantal_bitter8 != 0) {
        document.write("aantal bitterballen 8st: " + aantal_bitter8 + " x " + prijs_8 + " = " + bitterbal8totaalprijs + "<br>");
    }
    if (aantal_bitter16 != 0) {
        document.write("aantal bitterballen 16st: " + aantal_bitter16 + " x " + prijs_16 + " = " + bitterbal16totaalprijs + "<br>");
    }
    if (totaal != 0) {
        document.write("Totaalprijs: " + totaal);
    }

}

