const numbers = [1, 2, 3, 4, 5, 6, 7]
function sumAll(param) {
  let sum = 0

  for (let i = 0; i < param.length; i++) {
    /* en este caso que lo veo sencillo yo simplificaria más el código:
    const element = param[i]
    sum += element
    por este: */
    sum += param[i]
  }

  return sum
}

const totalSum = sumAll(numbers)
console.log(totalSum)
