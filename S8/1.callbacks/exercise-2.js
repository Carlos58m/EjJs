const userAnwsers = [];

function confirmExample(description) {
    return confirm(description);
}

function promptExample(description) {
    return prompt(description);
}

function father(description, callback) {
    const result = callback(description);
    userAnwsers.push(result);
}


father('¿Está seguro de que quiere continuar?', confirmExample);
father('Por favor, introduzca su nombre:', promptExample);
father('¿Desea guardar los cambios?', confirmExample);
father('¿Cuál es su color favorito?', promptExample);


