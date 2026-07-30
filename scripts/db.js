const euroFormat = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'});

let basket = [];

const deliverCost = 4.90;

let subtotal = 0;

const menuData = [
  {
    id: 0,
    category: "Maki",
    name: "Avocado Maki",
    description: "Klassische Reisrolle mit frischer Avocado",
    price: 5.90,
    image: "./assets/img/menu/avocado-maki.png",
  },
  {
    id: 1,
    category: "Maki",
    name: "Lachs Maki",
    description: "Reisrolle mit frischem Lachs und Nori",
    price: 6.90,
    image: "./assets/img/menu/lachs-maki.png",
  },
  {
    id: 2,
    category: "Maki",
    name: "Gurken Maki",
    description: "Vegetarische Rolle mit knackiger Gurke",
    price: 4.90,
    image: "./assets/img/menu/gurken-maki.png",
  },
  {
    id: 3,
    category: "Nigiri",
    name: "Lachs Nigiri",
    description: "Handgeformter Reis mit frischer Lachsscheibe",
    price: 3.50,
    image: "./assets/img/menu/lachs-nigiri.png",
  },
  {
    id: 4,
    category: "Nigiri",
    name: "Thunfisch Nigiri",
    description: "Handgeformter Reis mit magerem Thunfisch",
    price: 3.90,
    image: "./assets/img/menu/thunfisch-nigiri.png",
  },
  {
    id: 5,
    category: "Nigiri",
    name: "Garnelen Nigiri",
    description: "Handgeformter Reis mit gekochter Garnele",
    price: 3.20,
    image: "./assets/img/menu/garnelen-nigiri.png",
  },
  {
    id: 6,
    category: "Dessert",
    name: "Mochi Erdbeere",
    description: "Weiches Reiskuchen-Dessert mit Erdbeerfüllung",
    price: 4.50,
    image: "./assets/img/menu/mochi-dessert.png",
  },
  {
    id: 7,
    category: "Dessert",
    name: "Mango Sticky Rice",
    description: "Klebreis mit süßer Kokosmilch und frischer Mango",
    price: 5.50,
    image: "./assets/img/menu/mango-dessert.png",
  },
  {
    id: 8,
    category: "Dessert",
    name: "Green Tea Eis",
    description: "Cremiges Matcha-Eis, leicht und erfrischend",
    price: 3.90,
    image: "./assets/img/menu/ice-dessert.png",
  },
  {
    id: 9,
    category: "Getraenke",
    name: "Grüner Tee",
    description: "Traditioneller japanischer Grüntee, warm serviert",
    price: 2.50,
    image: "./assets/img/menu/tea-drinks.png",
  },
  {
    id: 10,
    category: "Getraenke",
    name: "Ramune",
    description: "Japanische Limonade mit fruchtigem Geschmack",
    price: 3.20,
    image: "./assets/img/menu/ramune-drinks.png",
  },
  {
    id: 11,
    category: "Getraenke",
    name: "Mineralwasser",
    description: "Still oder mit Kohlensäure",
    price: 2.20,
    image: "./assets/img/menu/water-drinks.png",
  },
]