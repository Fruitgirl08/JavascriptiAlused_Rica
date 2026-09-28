```js
// Klassikaline funktsioon
function minuNimi() {
  console.log("Minu nimi on Rica");
}

minuNimi();

// Noolefunktsioon
const minuNimi2 = () => {
  console.log("Minu nimi on Rica");
};

minuNimi2();
```
```js
function kuupaevEesti(kuupaev) {
  const kuud = [
    "jaanuar",
    "veebruar",
    "märts",
    "aprill",
    "mai",
    "juuni",
    "juuli",
    "august",
    "september",
    "oktoober",
    "november",
    "detsember"
  ];

  const osad = kuupaev.split(".");
  const paev = osad[0];
  const kuu = parseInt(osad[1]);

  console.log(paev + ". " + kuud[kuu - 1]);
}

kuupaevEesti("19.07.23");
```

Tulemus:

```text
19. juuli
```
```js
function arvutaArvud() {
  let arvud = [];
  let sisend;

  while (true) {
    sisend = prompt("Sisesta täisarv (tühi sisend lõpetab):");

    if (sisend === "") {
      break;
    }

    arvud.push(parseInt(sisend));
  }

  let summa = 0;

  for (let i = 0; i < arvud.length; i++) {
    summa += arvud[i];
  }

  let keskmine = summa / arvud.length;

  return {
    koguarv: arvud.length,
    keskmine: keskmine
  };
}

const tulemus = arvutaArvud();

console.log("Arve kokku: " + tulemus.koguarv);
console.log("Keskmine: " + tulemus.keskmine);
```
```js
const salajaneSonum = (sonum) => {
  const vokaalid = "aeiouõäöüAEIOUÕÄÖÜ";
  let tulemus = "";

  for (let i = 0; i < sonum.length; i++) {
    if (vokaalid.includes(sonum[i])) {
      tulemus += "*";
    } else {
      tulemus += sonum[i];
    }
  }

  return tulemus;
};

console.log(salajaneSonum("Tere, minu nimi on Rica!"));
```

Näiteks tulemus:

```text
T*r*, m*n* n*m* *n R*c*!
```
```js
const leiaUnikaalsedNimed = (nimed) => {
  const unikaalsed = [];

  for (let i = 0; i < nimed.length; i++) {
    if (!unikaalsed.includes(nimed[i])) {
      unikaalsed.push(nimed[i]);
    }
  }

  return unikaalsed;
};

const nimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];

console.log(leiaUnikaalsedNimed(nimed));
```

Tulemus:

```text
["Kati", "Mati", "Mari", "Jüri"]
```
