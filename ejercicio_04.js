// 1.1
let avengers = ['IronM', 'Thor', 'Hulk'] //3 lenght
//posicion--------0--------1--------2
console.log(avengers[0])

// 1.2
avengers[0] = 'IRONMAN'
console.log(avengers[0])

// 1.3
console.log(avengers.length)

// 1.4
let rickAndMortyCharacters = ['Rick', 'Jerry']
console.log(rickAndMortyCharacters)

rickAndMortyCharacters.push('Morty', 'Summer')
console.log(`ahora agregamos dos más ${rickAndMortyCharacters}`)

console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]) //enseña el último elemento que es Summer

// 1.5
rickAndMortyCharacters.pop() // quita a Summer
console.log(rickAndMortyCharacters) // Rick, Jerry, Morty
console.log(rickAndMortyCharacters[0]) // posición 0 sigue siendo Rick
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]) // enseña el último elemento que es Morty

// 1.6
rickAndMortyCharacters.splice(1, 1)
console.log(rickAndMortyCharacters) // solo borra a la posición 1 quedaría Rick y Morty
