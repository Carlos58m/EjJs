const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];


const ulElement = document.createElement("ul");


apps.forEach((app) => {
    const liElement = document.createElement("li");
    liElement.textContent = app;
    ulElement.appendChild(liElement);
});


document.body.appendChild(ulElement);