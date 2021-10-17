console.log("I'm working")

//moments docs https://momentjs.com/docs/#/displaying/
// import moment here; use this package in each function
const moment = require('moment')

const day = moment().format('dddd')

console.log('Today is', day)

const today = () => {
  // write code for dates.today --> what does this mean? I have no idea what this means without the README
  const day = moment().format('dddd')
  return day
}
console.log(today())

const calendar = () => {
  // write code for dates.calendar
  let cal = moment().format(`${"MMM"} ${"D"}, ${"YYYY"}`)
  // " " + "D" + ",""YYYY")
  return cal
}
 console.log((calendar()))

const currentTime = () => {
  // write code for dates.currentTime
let time = moment().format(`:${"HH"}:${"mm"}:${"ss"} ${"A"}`)
return time
}
console.log(currentTime())

module.exports = {
  today,
  calendar,
  currentTime
}