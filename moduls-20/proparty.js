const parson = {
  name: 'sodor udding',
  age: 18,
  profession: 'development',
  salary: 250000,
  married: true,
  'fav place': ['male', 'female', 'male', 'female']
}

// console.log(parson);

// dot notation
// dot symbol with object er portrait er value access kor
// console.log(parson.name);
const income = (parson.salary);
// console.log(income);

// bracket notation
// third bracket diya access kora

console.log(parson['age']);
const boyos = (parson['age']);
console.log(boyos);


// error

// console.log(parson. 'fav place');

console.log(parson['fav place']);

const keyName = 'profession';
console.log(parson[keyName]);