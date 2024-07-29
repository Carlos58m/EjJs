const newParagraph = document.createElement('p');

const paragraphText = document.createTextNode('Soy dinámico!');

newParagraph.appendChild(paragraphText);


document.body.appendChild(newParagraph);