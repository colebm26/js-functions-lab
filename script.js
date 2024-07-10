//Exercise 1
const maxOfTwoNumbers = (x, y) => {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
//Exercise 2
const isAdult = (age) => {
  if (age >= 18) {
      return ('Adult');
  } else {
      return ('Minor')
  }
}
console.log('Exercise 2 Result:', isAdult(21));
//Exercise 3
const isCharAVowel = (char) => {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      return true
  } else {
      return false
  }
}
console.log('Exercise 3 Result:', isCharAVowel('a'));
//Exercise 4
const generateEmail = (name, domain) => {
  return (name + '@' + domain)
} 
console.log("Exercise 4 Result:", generateEmail('johnsmith', 'example.com'));
//Exercise 5
const greetUser = (name, timeOfDay) => {
  if (timeOfDay === 'morning') {
      greeting = 'Good morning'
  } else if (timeOfDay === 'afternoon') {
      greeting = 'Good afternoon'
  } else if (timeOfDay === 'evening') {
      greeting = 'Good evening'
  } return (greeting + ',' + name + '!')
}
console.log('Exercise 5 Result:', greetUser('Sam', 'morning'));
//Exercise 6
const maxOfThree = (num1, num2, num3) => {
  let max = num1 > num2 ? num1 : num2
  max = max > num3 ? max : num3
  return max
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
//Exercise 7
const calculateTip = (billAmount, tipPercentage) => {
  let tipValue = tipPercentage / 100
  let tipAmount = billAmount * tipValue
  return tipAmount
}
console.log('Exercise 7 Results:', calculateTip(50,20));
//Exercise 8
const convertTemperature = (temperature, scale) => {
  if (scale === 'C') {
    return (temperature * 9/5) + 32
  } else if (scale === 'F') {
    return (temperature - 32) * 5/9
  } 
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));
//Exercise 9
const basicCalculator = (num1, num2, operation) => {
  if (operation === 'add') {
    return (num1 + num2)
  } else if (operation === 'subtract') {
    return (num1 - num2)
  } else if (operation === 'multiply') {
    return (num1 * num2)
  } else if (operation === 'divide') {
    return (num1 / num2)
  }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
//Exercise 10
const calculateGrade = (grade) => {
  if (grade >= 90) {
    return ('A')
  } else if (grade >= 80) {
    return ('B')
  } else if (grade >= 70) {
    return ('C')
  } else if (grade >= 60) {
    return ('D')
  } else {
    return ('F')
  }
}
console.log('Exercise 10 Result:', calculateGrade(85));