const newDiv = document.createElement('div');


const newParagraph = document.createElement('p');


const paragraphText = document.createTextNode('Hola Mundo!');


newParagraph.appendChild(paragraphText);


newDiv.appendChild(newParagraph);

document.body.appendChild(newDiv);