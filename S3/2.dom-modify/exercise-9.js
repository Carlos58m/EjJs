const divsToInsert = document.querySelectorAll(".fn-insert-here");

divsToInsert.forEach((div) => {

    const pElement = document.createElement("p");
    pElement.textContent = "Voy dentro!";


    div.appendChild(pElement);
});