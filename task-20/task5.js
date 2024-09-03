// Task-5 Hard 

let student ={
  name: 'md abdul wahab rubel',
  age: 31,
  city: 'chittagong',
  isStudent: true,
}

for(let key in student){
  if (student.hasOwnProperty(key)){
    let value = student[key];
    let type = typeof value;

    console.log(`key: ${key}`);
    console.log(`type: ${type}`);
  }
}