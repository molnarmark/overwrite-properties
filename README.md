# Overwrite Properties

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> A tiny module that lets you overwrite an object's properties with a specified value.

Save yourself some time and avoid the headache of recursion.


### Getting Started
```
npm install --save overwrite-properties
```

### Usage
Also shown in `tester.js`.
```javascript
const overwriteProperties = require('overwrite-properties');

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
```

### License
- MIT