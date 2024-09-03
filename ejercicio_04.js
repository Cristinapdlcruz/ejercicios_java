// 1.1
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers[0])

// 1.2
avengers[0] = 'IRONMAN'
console.log(avengers[0])

// 1.3
console.log(avengers.length)

// 1.4
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Summer')
console.log(rickAndMortyCharacters)
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

// 1.5
rickAndMortyCharacters.push('Lapiz Lopez')
console.log(rickAndMortyCharacters)
rickAndMortyCharacters.pop('Lapiz Lopez')
console.log(rickAndMortyCharacters)

console.log(rickAndMortyCharacters[0])
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

// 1.6
rickAndMortyCharacters.push('Lapiz Lopez')
console.log(rickAndMortyCharacters)
rickAndMortyCharacters.splice(1, 1)
console.log(rickAndMortyCharacters)
