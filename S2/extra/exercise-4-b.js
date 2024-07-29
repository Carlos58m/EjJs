function findArrayIndex(array, text) {
    return array.indexOf(text);
}

function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

const proteinas = ["pollo", "pescado", "filetes", "legumbres"];
console.log(removeItem(proteinas, "pescado"));
console.log(removeItem(proteinas, "filetes"));
console.log(removeItem(proteinas, "legumbres"));


const andalucia = ["sevilla", "huelva", "cadiz", "granada"];
console.log(removeItem(andalucia, "sevilla"));
console.log(removeItem(andalucia, "huelva"));