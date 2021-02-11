/* eslint-disable import/prefer-default-export */
const fruits = [
  {
    ref: 'fruits_1',
    category: 0,
    name: 'citrons',
    price: 0.99,
    unit: 'piéce',
    image: 'https://alsace.nouvellesgastronomiques.com/photo/art/grande/45432100-36693657.jpg?v=1588065827',
  },
  {
    ref: 'fruits_2',
    category: 0,
    name: 'fraise',
    price: 1.2,
    unit: 'piéce',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Fraises_2_Luc_Viatour.jpg/1200px-Fraises_2_Luc_Viatour.jpg',
  },
];

const legumes = [
  {
    ref: 'legumes_1',
    category: 1,
    name: 'courgette',
    price: '0.63',
    unit: 'kg',
    image: 'https://www.biendecheznous.be/sites/default/files/ps_image/istock_courgettes.jpg',
  },
  {
    ref: 'legumes_2',
    category: 1,
    name: 'tomate',
    price: '0.82',
    unit: 'kg',
    image: 'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_-_copie_346_346_filled.jpg',
  },
];

const fresh = [
  {
    ref: 'fresh_1',
    category: 2,
    name: 'milk',
    price: '0.98',
    unit: 'pièce',
    image: 'https://static.passeportsante.net/i51052-lait.jpg',
  },
  {
    ref: 'fresh_2',
    category: 2,
    name: 'beurre',
    price: '0.25',
    unit: 'pièce',
    image: 'https://www.atelierdeschefs.com/media/ingredient-e107-le-beurre.jpg',
  },
];

const epicerie = [
  {
    ref: 'épicerie_1',
    category: 3,
    name: 'biscotte',
    price: '2.80',
    unit: 'pièce',
    image:
      'https://www.academiedugout.fr/images/16045/1200-auto/fotolia_34000721_subscription_xl.jpg?poix=50&poiy=50',
  },
  {
    ref: 'épicerie_2',
    category: 3,
    name: 'pâte',
    price: '1.50',
    unit: 'pièce',
    image: 'https://www.carrefour.fr/media/540x540/Photosite/PGC/EPICERIE/3038350333605_PHOTOSITE_20201218_065645_0.jpg?placeholder=1',
  },
];

const boissons = [
  {
    ref: 'boissons_1',
    category: 4,
    name: 'Vin Rouge',
    price: '4.2',
    unit: 'pièce',
    image:
      'https://www.lafitte.fr/media/catalog/product/cache/1/image/0627a6d1d597f0f5c44c277b03e4282d/z/b/zblaml1-blanc-moelleux-igp-landes-75cl.jpg',
  },
  {
    ref: 'boissons_2',
    category: 4,
    name: 'Vin Blanc',
    price: '5.6',
    unit: 'pièce',
    image: 'https://www.carrefour.fr/media/540x540/Photosite/PGC/BOISSONS/3438910875413_PHOTOSITE_20200814_171834_0.jpg?placeholder=1',
  },
];

export const list = [fruits, legumes, fresh, epicerie, boissons];
