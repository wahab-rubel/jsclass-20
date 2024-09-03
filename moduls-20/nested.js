const college = {
  name: 'vnc',
  className: ['10', '11', '12,13', '14', '15', '16', '17'],
  events: ['science fare', 'science fare', '21 faboryride'],

  unique:{
    color: 'primary',
    result: {
      gpa: 5,
      marti: 'top',
    }
  }
}
console.log(college.unique.color );
college.unique.result.marti = 'top', 'top';
console.log(college['unique'].result.marti);
console.log(college.className);
console.log(college.unique.result.marti);
delete college.className;
console.log(college);