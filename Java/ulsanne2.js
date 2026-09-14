// Nimi: [Rica Aurelia Metsa]
// Ülesanne: 2
// Kuupäev: 14.09.2026



let tunnid = 2;
let minutid = 38;
let sekundid = 59;

let kellaaeg = tunnid + ":" + minutid + ":" + sekundid + "PM";
console.log(kellaaeg);



let tsitaat = "The only way to do great work is to love what you do.";
let tsitaatAutoriga = `"${tsitaat}" - Steve Jobs`;

console.log(tsitaatAutoriga);



let eesnimi = "Jüri";
let perenimi = "Jurakas";

let initsiaalid = `${eesnimi[0]}.${perenimi[0]}.`;

console.log(`${eesnimi} ${perenimi} nimetähed on ${initsiaalid}`);


let nimi = "Jurakas, Jüri";

let komaAsukoht = nimi.indexOf(",");

let eraldatudPerenimi = nimi.slice(0, komaAsukoht);

let suurPerenimi = eraldatudPerenimi.toUpperCase();

console.log(suurPerenimi);
console.log(suurPerenimi.length);



let epost = "karrolk@netlog.com";

let uusEpost = epost.replace("netlog", "gmail");

console.log(uusEpost);



let andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";

let andmed = andmerida.split(",");

let email = andmed[3];
let ipAadress = andmed[5];

let kasutajanimi = email.split("@")[0];

console.log(ipAadress);
console.log(kasutajanimi);
