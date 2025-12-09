const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(array, name) {
  for (let i=0; i < array.length; i++) {
    if(array[i] === name) {
        return {exists: true, i };
    }
  }
  return false;
}

console.log(finderName(nameFinder, 'Clint'));
console.log(finderName(nameFinder, 'Cristian'));