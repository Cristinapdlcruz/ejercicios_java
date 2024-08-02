const avengers = [
  'IronMan',
  'Hulk',
  'CaptainAmerica',
  'Thor',
  'BlackWidow',
  'CaptainMarvel'
]

function findLongestWord(param) {
  let longestWord = param[0]

  for (let i = 1; i < param.length; i++) {
    const element = param[i]

    if (element.length > longestWord.length) {
      longestWord = element
    }
  }

  return longestWord
}
const longestAvenger = findLongestWord(avengers)
console.log(longestAvenger)
