// OBJETOS
let person = {
  name: 'Ironhacker',
  age: 35,
  favoriteMusic: 'Axé',
  country: 'Portugal',
  address: {
    street: 'Rua Da Hora',
    number: 123,
    city: 'Lisboa'
  }
}

let name = 'Daniel';

// let name = person.name;
// let age = person.age;
// let favoriteMusic = person.favoriteMusic;
let {
  name: fullName,
  age,
  favoriteMusic,
  country = 'Brasil',
  address: { street, number, city }
} = person;


// console.log(`Olá, ${fullName}.`);
// console.log(`Você tem ${age} anos.`);
// console.log(`Sua música favorita é ${favoriteMusic}`);
// console.log(`Você é de ${country}`);
// console.log(street, number, '-', city);

// ARRAYS
// const campi = ['Madrid', 'Barcelona', 'Miami', 'México'];
// const [first, second, third, element = 'São Paulo'] = campi;
// const [,,, element] = campi;


// console.log(element);
// console.log(second);
// console.log(third);
const campi = [
  ['Madrid', 'ES'],
  ['Barcelona', 'ES'],
  ['Berlin', 'DE'],
  ['Paris', 'FR'],
  ['Amsterdam', 'NL'],
  ['Lisbon', 'PT']
]

const [[campusSpain1], [campusSpain2, campusCountry], [campus5, theCountry]] = campi;
// console.log(campusSpain1, campusSpain2, campusCountry, campus5, theCountry);

// ... (SPREAD)
const reptiles = ['cobra', 'lagarto', 'jacaré'];
const mammals = ['cachorrinho', 'gatinho', 'coelhinho'];

// const animals = reptiles.concat(mammals);
const animals = [...reptiles, ...mammals];
console.log(animals);

const names1 = ['matheus', 'hercules', 'andré'];
const names2 = ['lucas', 'joão', 'natalia'];

const names1Copy = names1.slice(0);
names1Copy[0] = 'Matheus';
console.log(names1);
console.log(names1Copy);
const names2Copy = [...names2]
console.log(names2Copy);

const exemplo = [{ name: 'Otacilio', type: 'cat' }, { name: 'Lassie', type: 'cat' }];
// const exemploCopy = exemplo.slice();
const exemploCopy = JSON.parse(JSON.stringify(exemplo))

exemploCopy[1].type = 'dog';

console.log(exemplo)
console.log(exemploCopy);

// ...REST
function myFunction (arg1, arg2, ...rest) {
  console.log(arg1);
  console.log(arg2);
  console.log(rest);
}

myFunction('primeiro', 'segundo', 'terceiro', 'quarto', 'quinto');

function add() {
  console.log(arguments);
  // let sum = 0;
  // for (let i = 0; i < arguments.length; i += 1){
  //   sum += arguments[i]
  // }
  // return sum;
  return [...arguments].reduce((sum, acc) => sum + acc, 0);
}

console.log(add(4, 20, 31, 1, 0))
