const newDiv = document.createElement('div');

for (let i = 1; i <= 6; i++) {
    const newParagraph = document.createElement('p');

    const paragraphText = document.createTextNode(`Párrafo ${i}`);

    newParagraph.appendChild(paragraphText);


    newDiv.appendChild(newParagraph);
}


newDiv.style.border = '1px solid black';
newDiv.style.padding = '10px';
newDiv.style.marginTop = '20px';

document.body.appendChild(newDiv);