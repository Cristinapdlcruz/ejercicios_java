const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param) {
  const count = {}
  for (let i = 0; i < param.length; i++) {
    if (count[param[i]] >= 1) {
      count[param[i]]++
    } else {
      count[param[i]] = 1
    }
  }
  console.log(count)
}
repeatCounter(counterWords)
