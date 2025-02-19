// // const rasel = 75;
// // const Amili = 65;
// // const asmaul = 86;
// // if(rasel > Amili && rasel > asmaul){
// //     console.log(`rasel is geater than ${asmaul} and ${Amili}`)
// // }else if(Amili > rasel && Amili > asmaul ){
// //     console.log(`Amili is geater than ${rasel} and ${asmaul}`)

// // }
// // else{
// //     console.log(`asmaul is geater than ${rasel} and ${Amili}`)
// // }

// const arr = [10, 20, 13, 25, 15, 21, 55, 40, 45, 30, 36, 50,]
// function maxMunber(number) {
//   let max = number[0]
//   for (let num of number) {
//     if (num > max) {
//       max = num
//     }
//   }
//   //console.log(max)
// }
// maxMunber(arr);

// const price = [20000, 15000, 30000, 35000, 25000, 50000]
// function minNun(number) {
//   let min = number[0]
//   for (const num of number) {
//     if (num < min) {
//       min = num
//     }
//   }
//   //console.log(min)
// }
// minNun(price)

// const phones = [
//   {
//     name: "iPhone 15 Pro",
//     model: "A3101",
//     price: 999,
//     color: "Titanium Blue",
//     camera: "48MP + 12MP",
//     ram: "8GB"
//   },
//   {
//     name: "Samsung Galaxy S24 Ultra",
//     model: "SM-S928B",
//     price: 1199,
//     color: "Titanium Gray",
//     camera: "200MP + 10MP + 12MP + 50MP",
//     ram: "12GB"
//   },
//   {
//     name: "Google Pixel 8 Pro",
//     model: "GA04800",
//     price: 899,
//     color: "Obsidian Black",
//     camera: "50MP + 48MP + 12MP",
//     ram: "12GB"
//   },
//   {
//     name: "OnePlus 12",
//     model: "CPH2573",
//     price: 799,
//     color: "Emerald Green",
//     camera: "50MP + 64MP + 48MP",
//     ram: "16GB"
//   },
//   {
//     name: "Xiaomi 14 Pro",
//     model: "24078PND",
//     price: 749,
//     color: "Ceramic White",
//     camera: "50MP + 50MP + 50MP",
//     ram: "12GB"
//   }
// ];
// function cheapest(products) {
//   let min = products[0];
//   console.log()
//   for (let product of products) {
//     if (product.price < min.price) {
//       min = product
//     }
//   }
//   // console.log(min)

// }
// const cheapestProduct = cheapest(phones)

// /**
//  * Write a function that calculates the total amount of wood required based on the following assumptions:
//  * */

// function needOfWood(quentityOfChair, quentityOfTable, quentityOfBed) {
//   const cubicOfchair = 5;
//   const cubicOfTable = 7;
//   const cubicOfBed = 4;

//   const TotalWoood = cubicOfchair * quentityOfChair + cubicOfTable * quentityOfTable + cubicOfBed * quentityOfBed;

//   return TotalWoood

// }
// const totalResult = needOfWood(15, 10, 3)
// // console.log(totalResult)

// /**
//  * How much the total shirt price
//  * */

// function BuyingShirt(quentityOfShirt, quentityOfpant, quentityOfShoe) {
//   const priceOfShirt = 500;
//   const priceOfpant = 300;
//   const priceOfShoe = 900;

//   const totalAmount = priceOfShirt * quentityOfShirt + priceOfpant * quentityOfpant + priceOfShoe * quentityOfShoe;
//   return totalAmount

// }
// const resultOfTotalAmount = BuyingShirt(3, 2, 3)
// // console.log(resultOfTotalAmount);

const mobilePricesInTaka = [999, 1099, 699, 799, 899, 649, 799].map(item => item * 120)

function cheapestPrice(prices) {
  let min = prices[0]
  for (let price of prices) {
    if (price < min) {
      min = price
    }
  }
  //console.log(min)

}
const mobilePrice = cheapestPrice(mobilePricesInTaka)

const products = [
  { name: "Chair", price: 1500, quantity: 5 },
  { name: "Table", price: 7000, quantity: 2 },
  { name: "Bed", price: 15000, quantity: 1 },
  { name: "Sofa", price: 12000, quantity: 3 },
  { name: "Cupboard", price: 9000, quantity: 2 }
];

function totalSpend(prices) {
  let total = 0;
  for (let price of prices) {
    let spend = price.price * price.quantity;
    total += spend
  }
  return total;

}
const result = totalSpend(products)
// console.log(result)

// let discountTiers = [
//   { limit: 100, rate: 0 },      // No discount up to $100
//   { limit: 500, rate: 0.05 },   // 5% for $100-$500
//   { limit: 1000, rate: 0.10 },  // 10% for $500-$1000
//   { limit: Infinity, rate: 0.20 } // 20% for above $1000
// ];
// // if(discountTiers.limit <= 100){
// //   const toatalPrice = 
// // }
// function discountPrice (quantity){
//   let previousLimit = quantity[0];
//   for(const quent of quantity){
//     if(quent.limit <= previousLimit.limit){
//       const totalAmount = quent.limit * 100;
//       previousLimit = quent.limit
//       console.log(totalAmount)
//     }

//   }
//   console.log(previousLimit) 

// }
// const price =discountPrice(discountTiers)


const heights2 = [167, 190, 120, 165, 137];
function lowestNum(numbers) {
  let num = numbers[0];
  for (const number of numbers) {
    if (number < num) {
      num = number
    }


  }
  return num
}
const lowest = lowestNum(heights2)
//console.log('Lowest Price in this Array',lowest)
const heights = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function smallestName(name) {
  let number = heights[0]
  for (const height of name) {
    if (height.length < number.length) {
      number = height
    }

  }
  return number
}
const result1 = smallestName(heights)
//console.log(result1);
function calculateElectronicsBudget(laptopQuentity, tabletQuentity, mobileQuentity) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  const totalLaptop = laptopPrice * laptopQuentity;
  const totaltablet = tabletPrice * tabletQuentity;
  const totalMobilePrice = mobilePrice * mobileQuentity

  const totalBuget = totalLaptop + totaltablet + totalMobilePrice;


  return totalBuget;

}
const budget =  calculateElectronicsBudget(2,1,2)
//console.log(budget)


const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(prices){
    let sum = 0;
   for(const price of prices){
       sum += price.price 
   }
   return sum / prices.length;

}
const result2 = findAveragePhonePrice(phones)
//console.log(result2);

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
]
function totalaSallary(sallay){
  let totalSum = 0;
  for(const month of sallay){
    totalSum +=  month.experience * month.increment + month.starting
  }
  return totalSum;

}
const totalPay = totalaSallary(employees)
//console.log(totalPay);
function calculateTax(income,expense){
  const tex = .20
  if(typeof income !== "number" && typeof expense !== "number"){
   return "Please Provide a Number"
  }
  else if(income >= expense){
   const totalTexes = (income - expense) * tex
   return totalTexes;

  }else{
    return "Invalid Input"
  }

}
const texes = calculateTax(20000,201100)
//console.log(texes)

function includesDigit(userName){
  let charac = false;
   if(typeof userName !== 'string'){
    return "invalid input"
   }else{
    for(const char of userName){
    
      if(!isNaN(char)){
         charac = true;
      }
    }

   }
 
  
  return charac

}
const input = includesDigit("rasel")
//console.log(input)

function sendNotification(email){
  if(!email.includes('@')){
    return "Invalid Email"
  }
  const splitedEmail = email.split('@')
  const userName = splitedEmail[0]
  const domainName = splitedEmail[1]

 const notification = userName + " sent you an email from " + domainName
 return notification

}
const result3 = sendNotification('bmrasel477@gmail.com')
//console.log(result3)
const studentInformation = {
  name:'Rajib',
  testScore:45,
  schoolGrade:25,
  isFFamily: true,
}
function calculateFinalScore(student){
  let score = [];
  if( typeof student !== 'object'){
    return 'Invalid Input'
  }

  if(student.isFFamily){
    const totalScore = studentInformation.schoolGrade + studentInformation.testScore + 20;
      score.push(totalScore)
  }else{
   const  totalScore = studentInformation.schoolGrade + studentInformation.testScore
      score.push(totalScore)
  }
  if(score >= 80){
     return true
  }else{
    return false
  }
  
}

const result4 = calculateFinalScore(studentInformation);
//console.log(result4);

const completedVivaCandidates = [
  { serial: 1, name: "Rahim Uddin", timeNeeded: 15},
  { serial: 2, name: "Karim Hossain", timeNeeded: 10},
  { serial: 3, name: "Ayesha Sultana", timeNeeded: 12},
  { serial: 4, name: "Jamal Ahmed", timeNeeded: 8},
  { serial: 5, name: "Shamima Akter", timeNeeded: 14}
];

function waitingTime(Candidates,serialNumber){
 let sumOfTime = 0;
 for(const Candidate of Candidates){
  sumOfTime += Candidate.timeNeeded
 }
 const avarageOfTime = sumOfTime /  Candidates.length;
 const length = serialNumber * avarageOfTime; 
 const totalTimeNeed = (10 -1) * avarageOfTime
 const timeOfIsrat = length - totalTimeNeed;
 return timeOfIsrat

}
const result5 = waitingTime(completedVivaCandidates,10)
//console.log(result5)

function waitingTime2(Candidates,serialNumber){
  if(serialNumber <= 0){
      return 'invalid input';
    }else if (serialNumber <= Candidates.length) {
      return 'Serial number has already come';
    }
  
  let sum = 0;
  for(const Candidate of Candidates){
    sum += Candidate.timeNeeded
  }
  const avarageOfTime = sum / Candidates.length;
  const remaingTime = serialNumber - Candidates.length;
  const time = Math.ceil(avarageOfTime * remaingTime)
  return time;

}
const result7 = waitingTime2(completedVivaCandidates,15);
console.log(result7);


