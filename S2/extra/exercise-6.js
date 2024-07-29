function swap(array, index1, index2) {

    if (index1 >= 0 && index1 < array.length && index2 >= 0 && index2 < array.length) {

        let temp = array[index1];

        array[index1] = array[index2];

        array[index2] = temp;
    } else {
        console.log("Índices fuera de rango");
    }


    return array;
}


let players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

console.log(swap(players, 0, 2));

console.log(swap(players, 1, 3)); 
