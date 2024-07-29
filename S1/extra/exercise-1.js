

const users = [{ name: "Abel", years: 43 }, { name: "Maria", years: 18 }, { name: "Pedro", years: 14 }, { name: "Samantha", years: 32 }, { name: "Raquel", years: 16 }];
let menor = "Usuario menor de edad: ";
let mayor = "Usuario mayor de edad: ";
for (let i = 0; i < users.length; i++) {
    if (users[i].years < 18) {
        console.log(menor + users[i].name);
    } else {
        console.log(mayor + users[i].name);
    }
}

