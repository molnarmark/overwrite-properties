const overwriteProperties = require('./index');

const testObject = {
  name: 'Mark',
  age: 21,
  job: 'Programmer',
  loves: 'Github'
};

console.log(overwriteProperties(testObject, 'goat'));
/*==>
{ name: 'goat', age: 'goat', job: 'goat', loves: 'goat' }
*/