// Nimi: [Riica Aurelia Metsa]
// Ülesanne: 5
// Kuupäev: 14.09.2026



let temperatuur = 22;

if (temperatuur > 25) {
    console.log("Väga kuum ilm!");
} else if (temperatuur >= 15 && temperatuur <= 25) {
    console.log("Mõnus temperatuur");
} else {
    console.log("Jahe ilm");
}



let kasutajanimi = "admin";

console.log(
    kasutajanimi === "admin"
        ? "Tere, administraator!"
        : "Tere, külaline!"
);



let piletityyp = "täispilet";
let vanus = 20;

let piletiHind;



if (piletityyp === "täispilet") {

    if (vanus < 18) {
        piletiHind = 10;
    } else if (vanus <= 64) {
        piletiHind = 20;
    } else {
        piletiHind = 15;
    }

} else if (piletityyp === "sooduspilet") {

    if (vanus < 18) {
        piletiHind = 8;
    } else if (vanus <= 64) {
        piletiHind = 15;
    } else {
        piletiHind = 8;
    }

} else {
    console.log("Sellist piletitüüpi ei ole.");
}



console.log(`Piletitüüp: ${piletityyp}`);
console.log(`Vanus: ${vanus}`);
console.log(`Pileti hind: ${piletiHind} eurot`);
