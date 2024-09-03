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
function finderName(array, name) {
  if (array.includes(name)) {
    return `${true}, posicion: ${array.indexOf(name)}`
  } else {
    return false
  }
}

console.log(finderName(nameFinder, 'Steve'))
