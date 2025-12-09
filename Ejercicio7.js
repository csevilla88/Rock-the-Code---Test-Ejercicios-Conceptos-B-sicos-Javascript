function getMaxNumber(numberOne , numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else if (numberTwo > numberOne) {
    return numberTwo;
  } else {
    return "Son iguales";     
  }
}

console.log(getMaxNumber(10, 5));
console.log(getMaxNumber(3, 7));
console.log(getMaxNumber(2, 2));
