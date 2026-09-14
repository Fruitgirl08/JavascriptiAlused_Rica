// Nimi: [Rica Aurelia Metsa]
// Ülesande number: [3]
// Kuupäev: 14.09.2026



let kaugus = 120; // kaugus kilomeetrites
let kiirus = 60;  // kiirus km/h

let sõiduAeg = kaugus / kiirus;

console.log("Sõidu aeg on " + sõiduAeg + " tundi");



let postitusteArv = 137;
let postitusiLehel = 10;

let lehekülgedeArv = Math.ceil(postitusteArv / postitusiLehel);
let viimaselLehel = postitusteArv % postitusiLehel;


if (viimaselLehel === 0) {
    viimaselLehel = postitusiLehel;
}

console.log("Lehekülgi on vaja: " + lehekülgedeArv);
console.log("Viimasel lehel on postitusi: " + viimaselLehel);



let võimsus = 400; // vattides (W)
let elektriHind = 9.69; // senti/kWh


let elektriHindEurodes = elektriHind / 100;


let voolutarbimine = võimsus / 1000;


let töökulu = voolutarbimine * elektriHindEurodes;

console.log("Serveri töökulu ühe tunni jooksul on " + töökulu.toFixed(4) + " eurot");
