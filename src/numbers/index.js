console.log(`I'm working`)

const isEven = (num) => {
  // write code for numbers.isEven
  if (num%2 == 0){
  return true
    }
  else {
    return false
    }
}
console.log(isEven(15))

let arr = [4, 5, 6, 2]
const sum = (arr) => {
  // write code for numbers.sum
  let runningSum = 0
  for (i=0; i<arr.length; i++){
    runningSum += arr[i]
  }
  return (runningSum)
}
console.log(sum(arr))


const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  
    // write code for numbers.sum
    let runningSum = 0
    for (i=0; i<arr.length; i++){
      runningSum += arr[i]
    }
    if (runningSum = sum){
      return true
    }
    else {
      return false
    }
}
console.log("comboSum. Does sum of array equal sum:", comboSum(arr, 22))

module.exports = {
  isEven,
  sum,
  comboSum
}