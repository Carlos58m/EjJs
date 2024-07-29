const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
    { name: "Salad", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true }
];

let usedFruits = new Set();
let fruitIndex = 0;

for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {

        while (usedFruits.has(fruits[fruitIndex])) {
            fruitIndex++;
            if (fruitIndex >= fruits.length) {
                fruitIndex = 0;
            }
        }


        foodSchedule[i] = { name: fruits[fruitIndex], isVegan: true };
        usedFruits.add(fruits[fruitIndex]);
        fruitIndex++;
    }
}

console.log(foodSchedule);


