```js
const rahad = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];

const mündid = [];

let i = 0;

while (i < rahad.length) {
  if (rahad[i] <= 2) {
    mündid.push(rahad[i]);
  }

  i++;
}

let summa = 0;

for (let i = 0; i < mündid.length; i++) {
  summa += mündid[i];
}

console.log("Mündid:", mündid);
console.log("Münte kokku:", mündid.length);
console.log("Müntide summa:", summa.toFixed(2) + " €");
```
