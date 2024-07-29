const newParagraph = document.createElement('p');
newParagraph.textContent = 'Voy en medio!';

const secondDiv = document.getElementsByTagName('div')[1];

secondDiv.parentNode.insertBefore(newParagraph, secondDiv);