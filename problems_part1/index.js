// function convertToFranhight(Celsius){
//     const result = Celsius * 9/5 + 32
//     return result.toFixed(2)
// }
// const Farenhight = convertToFranhight(101);
// console.log(Farenhight);
/*
 * You are given an array of numbers. Count how many times the a number is repeated in the array.
 * 
 * */ 
function repeated(array,find){
    let count = [];
    for(let munmber of array){
        if(munmber === find){
          count.push(munmber)
        }
    }
    return count.length

}
const result = repeated([1, 2, 3, 2, 1, 2, 3, 1])
// console.log(result)

const vowels = ["a", "e", "i", "o", "u"]
function vioel(items){
    let count = [];
    for(let num of items.toLowerCase()){
        if(vowels.includes(num)){
            count.push(num)
        }
    }
    return count.length

}
const str = vioel('Euphoria is a beautiful illusion of utopian oasis')
// console.log(str)
function findWord(str){
   let longestWord = '';
    let strSplit = str.split(' ');

    for(let text of strSplit){
        if(text.length > longestWord.length){
            longestWord = text
        }

    }
    return longestWord
  

}
const values = findWord('I am learning Programming to become a programmer')
console.log(values);