/**
 * Task-1
 * Take four parameters. Multiply the four numbers and then return the result
 * 
 * **/ 
function Multiply(num1,nun2,num3,num4){
  return num1 * nun2 * num3 * num4
}
const multi = Multiply(5,10,15,20)
// console.log(multi)

/*
Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/ 

function checkNumber(number){
  if(number % 2 === 0){
    const multi = number / 2;
    return multi;
  }else{
    return number * 2
  }

}
let  result = checkNumber(10);
let result1 = checkNumber(15)
// console.log(result)
// console.log(result1)

/**
 * Task-3
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 * **/

let totalNum = 0;
function make_avg(intNumbers){
  
  for(let i = 0; i < intNumbers.length; i++){
   totalNum += intNumbers[i] / intNumbers.length;

  }
  return totalNum;
}

const average = make_avg([3,6,9,10,14,17])
// console.log(average)

// function count_zero(params) {
//   let count = 0;
//   for (let char of params) {
//     if (char === '0') {
//       count++;
//     }
 
// }
// return count
// }
// const binaryStr = count_zero('101010101110001111')
// console.log(binaryStr)

function count_zero1(params){
  let code = [];
  for(let param of params){
    if(param === "0"){
      code.push(param)
    }
  }
  return code.length

}
const binaryStr1 = count_zero1('101010101110001111')
console.log(binaryStr1)

