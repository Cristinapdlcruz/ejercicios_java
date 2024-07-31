// 1.1
let character = {}
character.age = 25

// 1.2
let firstName = 'Jon'
let lastName = 'Snow'
let age = 24

console.log(
  `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`
)

// 1.3
let toy1 = { price: 50 }
let toy2 = { price: 80 }
console.log(
  `El precio total de los dos juguetes es de ${toy1.price + toy2.price}`
)

// 1.4
let globalBasePrice = 30000
let car1 = { basePrice: 2500, finalPrice: 0 }
let car2 = { basePrice: 2700, finalPrice: 0 }

car1.finalPrice = car1.basePrice + globalBasePrice
car2.finalPrice = car2.basePrice + globalBasePrice

console.log(`El precio final del primer coche es de ${car1.finalPrice}`)
console.log(`El precio final del segundo coche es de ${car2.finalPrice}`)
