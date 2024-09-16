const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(array, element) {
  if (Array.includes(element)) {
    return `${true}, posicion: ${array.indexPf(element)}`
  } else {
    return false
  }
}
console.log(finderName(nameFinder, 'Steve'))
