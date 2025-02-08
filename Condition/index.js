//tesk 1

const priceBurger = 500;
if(priceBurger > 500 ){
    console.log('Coke will be free')

}else{
    console.log('You will pay extra money if you buy coke')
}

//task 2
const weight = 66;
const height = 1.7;

const BMI = weight / (height * height);
if(BMI < 18.5){
    console.log('you are underweight')
}
else if( BMI >= 18.5 && BMI <= 24.9){
    console.log('you are normal')

}
else if(BMI >= 25 && BMI <= 29.9){
    console.log('you are overweight')

}
else{
    console.log('you are obese')
}

// tesk 3

const score = 50;

if(score >= 90){
    console.log('You are got in A')
}
else if( score >= 80) {
    console.log('You are got in B')
}else if(score >= 70){
    console.log('You are got in C')
}
else if(score >= 60){
    console.log('You are got in D')
}
else if(score < 60){
    console.log('You are got in F')
}
// task 4

const examScore = 85;
if(examScore > 80){
    const friendScore = 55;
    if(friendScore > 80){
        console.log("let's go for a lunch")
    }else if(friendScore < 80 && friendScore >=60){
        console.log("good luck next time");

    }else if(friendScore < 60 && friendScore >=40){
        console.log("I will unseen my friend message because of low score")
    }else if(friendScore < 40){
        console.log("I will Block My friend")

    }
}else{
    console.log("go to home and sleep and act sad")
}
//task- 5
//Normal Condition
let num1 = 90;
let num2 = 80;
let result;
// if(num1 > num2){
//     result = num1 * 2
// }else if(num1 < num2){
//   result = num1 + num2
// }
//ternary operator
num1 > num2 ? result = num1 * 2: result = num1 + num2
console.log(result)

//task 6
let passangerFare = 800;
let age = 65;
let isStudent = false;
if(age < 10){
    console.log('fare is free')
}else if(isStudent){
    let discount  = (800 /100 ) * 50;
    let studentFare = passangerFare - discount;
    console.log('Student Fare',studentFare)
}else if(age >= 60){
    let discount = (800 / 100) * 15
    let seniorCitize = passangerFare - discount
    console.log('Senior Citizen Fare',seniorCitize)

}else{
    console.log('You have to pay Regular fare')
}