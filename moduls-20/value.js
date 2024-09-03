const parson = {
  name: 'sodor udding',
  age: 18,
  profession: 'development',
  salary: 250000,
  married: true,
  'fav place': ['male', 'female', 'male', 'female']
}
parson.salary = 300000;
parson['age'] = 31;
parson['fav place'] = 'development';
console.log(parson);

const propName = "profession";
parson[propName] = 'developer';
console.log(parson);


const computer = {
  brand: 'lenovo',
  price: 35000,
  processor: 'intel',
  hdd: '512gb',
  monotor: 'msi',
}


const values = Object.values(computer);
console.log(values);