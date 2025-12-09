const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  for(let string of param) {
    if(param !== param.lastIndexOf(string)) {
        param.splice(param.lastIndexOf(string), 1);
    }
  } 
  return param;
}

console.log(removeDuplicates(duplicates));