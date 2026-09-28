const products = [
  "Õunad", "Piim", "Leib", "Juust", "Tomatid", "Kanafilee",
  "Muna", "Sibul", "Apelsinid", "Riis", "Jogurt", "Kartul",
  "Kalafilee", "Pasta", "Jogurtijook", "Porgandid", "Virsikud",
  "Pähklid", "Rosinad", "Kapsas", "Kreeka jogurt", "Veiseliha",
  "Banaanid", "Oliivid", "Mandlid", "Magus kartul", "Greibid"
];

// Kõik tooted koos järjekorranumbriga
for (let i = 0; i < products.length; i++) {
  console.log((i + 1) + ". " + products[i]);
}

console.log("10 esimest toodet, jättes vahele Muna, Sibul ja Riis:");

let loendur = 0;

for (let i = 0; i < products.length && loendur < 10; i++) {
  if (
    products[i] === "Muna" ||
    products[i] === "Sibul" ||
    products[i] === "Riis"
  ) {
    continue;
  }

  loendur++;
  console.log(loendur + ". " + products[i]);
}