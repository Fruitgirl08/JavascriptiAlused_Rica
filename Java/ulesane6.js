// Nimi: [Rica Aurelia Metsa]
// Ülesanne: 6
// Kuupäev: 14.09.2026



let number = -5;

switch (true) {
    case number > 0:
        console.log(`Number ${number} on positiivne.`);
        break;

    case number < 0:
        console.log(`Number ${number} on negatiivne.`);
        break;

    case number === 0:
        console.log("Number on null.");
        break;

    default:
        console.log("Vigane sisend.");
}



let broneeringuteArv = 4;

switch (broneeringuteArv) {
    case 1:
    case 2:
        console.log("Valige laud kahele inimesele.");
        break;

    case 3:
    case 4:
        console.log("Valige laud neljale inimesele.");
        break;

    case 5:
    case 6:
        console.log("Valige laud kuuele inimesele.");
        break;

    default:
        if (broneeringuteArv > 6) {
            console.log("Valige suur laud.");
        } else {
            console.log("Vigane broneeringute arv.");
        }
        break;
}