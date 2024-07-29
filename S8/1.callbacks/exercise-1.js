const numbersList = [];

function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function father(a, b, callback) {
    const result = callback(a, b);
    numbersList.push(result);
}


father(5, 3, sum);
father(10, 4, substract);
father(7, 2, sum);
father(15, 5, substract);


console.log(numbersList); 
