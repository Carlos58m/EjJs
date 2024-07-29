function findArrayIndex(array, text) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }

    return -1;
}


const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

console.log(findArrayIndex(animals, 'Mosquito'));
console.log(findArrayIndex(animals, 'Ajolote'));
console.log(findArrayIndex(animals, 'Tortuga'));  
