const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let suma = 0;
    for (let element of param) {
        if (typeof element === 'number') {
            suma += element;
        } else if (typeof element === 'string') {
            suma += element.length;
        }
    }
    return suma / param.length; 
}

console.log(averageWord(mixedElements));