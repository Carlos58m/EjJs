onst movies = [
    { title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura'] },
    { title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción'] },
    { title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller'] },
    { title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación'] },
]
let categorias = []
for (let i = 0; i < movies.length; i++) {
    for (let j = 0; j < movies[i].categories.length; j++) {
        if (!categorias.includes(movies[i].categories[j])) {
            categorias.push(movies[i].categories[j])
        }
    }
}
console.log(categorias)

