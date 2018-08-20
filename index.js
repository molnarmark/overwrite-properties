module.exports = function overwriteProperties(obj, value) {
  const overwrittenObject = {};

  Object.keys(obj).map(key => {
    const property = obj[key];
    if (typeof property === 'object') {
      overwrittenObject[key] = overwriteProperties(property, value);
    } else {
      overwrittenObject[key] = value;
    }
  });

  return overwrittenObject;
}