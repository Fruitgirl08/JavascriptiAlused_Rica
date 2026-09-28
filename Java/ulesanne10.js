```js
// ==========================================
// 1. TOOTE OBJEKT
// ==========================================

const toode = {
  nimetus: "Piim",
  hind: 3.60,
  kogus: 2,

  // Toote kogusumma
  koguSumma: function() {
    return this.hind * this.kogus;
  },

  // Muudab toote kogust
  muudaKogust: function(uusKogus) {
    this.kogus = uusKogus;
  },

  // Kuvab kogu objekti sisu
  kuva: function() {
    console.log(
      `${this.nimetus} - ${this.hind} EUR - Kogus: ${this.kogus}`
    );
  }
};

// Objekti omadused konsoolis
console.log("Toote nimetus:", toode.nimetus);
console.log("Toote hind:", toode.hind);
console.log("Toote kogus:", toode.kogus);

// Toote kogusumma
console.log("Toote kogusumma:", toode.koguSumma(), "EUR");

// Muudame kogust
toode.muudaKogust(5);

console.log("Pärast koguse muutmist:");
toode.kuva();


// ==========================================
// 2. OSTUKORV
// ==========================================

const ostukorv = {
  tooted: [
    { nimi: "Piim", hind: 3.60, kogus: 2 },
    { nimi: "Leib", hind: 2.00, kogus: 1 },
    { nimi: "Munad", hind: 1.50, kogus: 6 },
    { nimi: "Juust", hind: 4.20, kogus: 1 },
    { nimi: "Tomatid", hind: 2.30, kogus: 3 }
  ],

  // Kuvab kogu ostukorvi sisu
  kuvaTooted: function() {
    for (let i = 0; i < this.tooted.length; i++) {
      const toode = this.tooted[i];

      console.log(
        `${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`
      );
    }
  },

  // Lisab uue toote ostukorvi
  lisaToode: function(nimi, hind, kogus) {
    this.tooted.push({
      nimi: nimi,
      hind: hind,
      kogus: kogus
    });
  },

  // Arvutab kogu ostukorvi summa
  koguSumma: function() {
    let summa = 0;

    for (let i = 0; i < this.tooted.length; i++) {
      summa += this.tooted[i].hind * this.tooted[i].kogus;
    }

    return summa;
  }
};


// Kuvame kõik ostukorvi tooted
console.log("OSTUKORV:");
ostukorv.kuvaTooted();


// Lisame uue toote
ostukorv.lisaToode("Kohv", 5.80, 2);


// Kuvame ostukorvi uuesti
console.log("Pärast Kohvi lisamist:");
ostukorv.kuvaTooted();


// Kuvame kogu ostukorvi summa
console.log(
  "Ostukorvi kogu summa:",
  ostukorv.koguSumma().toFixed(2),
  "EUR"
);
```
