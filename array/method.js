/*
**************************Add/remove items Method*****************************
*/
// at the end of element
let arr = ['I','am','programmer'];
arr[2] = 'Developer'  //update
arr.push('in Frontend')
arr.pop('in Frontend')

//at the beginning of element

arr.unshift('This is Rasel')
console.log(arr)

let arr2 = ['I', 'am', 'Study', 'in', 'javascript'];
arr2.splice(1, 2,'this','is','Rasel');
console.log(arr2)






const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
 continue;
 }
 console.log(array[i]);
}