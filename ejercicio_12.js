const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(param) {
  let uniqueArray = []

  for (let i = 0; i < param.length; i++) {
    const element = param[i]

    if (uniqueArray.indexOf(element) === -1) {
      uniqueArray.push(element)
    }
  }
  return uniqueArray
}

const uniqueArray = removeDuplicates(duplicates)
console.log(uniqueArray)
