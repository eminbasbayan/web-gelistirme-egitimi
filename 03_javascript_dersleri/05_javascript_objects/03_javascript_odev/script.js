const kutuphane = {
  kategoriler: ["Roman", "Tarih", "Yazılım"],

  kitaplar: [
    ["1984", "Hayvan Çiftliği", "Karamazov Kardeşler"], // Roman
    ["Sapiens", "Tüfek Mikrop ve Çelik"], // Tarih
    ["Temel JavaScript", "Modern JavaScript", "Node.js Giriş"], // Yazılım
  ],

  stok: {
    1984: 4,
    "Hayvan Çiftliği": 2,
    "Karamazov Kardeşler": 1,
    Sapiens: 0,
    "Tüfek Mikrop ve Çelik": 3,
    "Temel JavaScript": 5,
    "Modern JavaScript": 4,
    "Node.js Giriş": 6,
  },
};

/* Görev 1 */
kutuphane.kitaplar[2].push("React ile Frontend");
kutuphane.stok["React ile Frontend"] = 3;
/* Görev 1 */

/* Görev 2 */
const silinen = kutuphane.kitaplar[0].pop();
delete kutuphane.stok[silinen];
/* Görev 2 */

/* Görev 3 */
const ilk = kutuphane.kitaplar[1].shift();
delete kutuphane.stok[ilk];

kutuphane.kitaplar[1].unshift("Nutuk");
kutuphane.stok["Nutuk"] = 5;
/* Görev 3 */

/* Görev 4 */
if (kutuphane.kitaplar[2].includes("Node.js Giriş")) {
  console.log("Kitap bulundu");
}
/* Görev 4 */

/* Görev 5 */
const index = kutuphane.kitaplar[2].indexOf("Node.js Giriş");
console.log("Sıra:", index);
/* Görev 5 */

/* Görev 6 */
const sonIki = kutuphane.kitaplar[2].slice(-2);
console.log(sonIki);
/* Görev 6 */

/* Görev 7 */
kutuphane.kitaplar[2].sort();
/* Görev 7 */

/* Görev 8 */
kutuphane.kitaplar[0].reverse();
/* Görev 8 */

/* Görev 9 */
kutuphane.kitaplar[1].splice(1, 0, "Türklerin Tarihi");
kutuphane.stok["Türklerin Tarihi"] = 2;
/* Görev 9 */

/* Görev 10 */
if (kutuphane.stok["Temel JavaScript"] > 0) {
  console.log("ödünç verilebilir");
} else {
  console.log("mevcut değil");
}
/* Görev 10 */

/* Görev 11 */
const kategoriIndex = 3;

switch (kategoriIndex) {
  case 0:
    console.log("Roman kitapları:", kutuphane.kitaplar[0]);
    break;
  case 1:
    console.log("Tarih kitapları:", kutuphane.kitaplar[1]);
    break;
  case 2:
    console.log("Yazılım kitapları:", kutuphane.kitaplar[2]);
    break;
  default:
    console.log("Geçersiz kategori numarası.");
}
/* Görev 11 */

console.log(kutuphane);
