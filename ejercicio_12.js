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
  for (let i = 0; i < param.length; i++) {
    const firstWord = param[i]

    for (let j = i + 1; j < param.length; j++) {
      const nextWord = param[j]
      if (firstWord === nextWord) {
        param.splice(j, 1)
        j--
      }
    }
  }
  console.log(param)
}

removeDuplicates(duplicates)
