// console.log("error")

// let age1 = 10;
// let age2 = 23;

// isEqualTo10 = age1 === 10;
// total = age1 + age2
// console.log(total)

// price1 = 5;
// price2 = "5";
// console.log(price1 == price2)
// console.log(price1 === price2)

// if (!isEqualTo10) {
//     console.log("age is correct")
// } else if (isEqualTo10) {
//     console.log("you are wrong")
// }

// if (age2 % 2 === 0) {
//     console.log("age is even")
// } else {
//     console.log("age is odd")
// }

// switch (age1) {
//     case 10:
//         console.log("age is 10")
//         break;
//     case 12:
//         console.log("age is 12")
//     default:
//         break;
// }

// result = age1 === 10 ? "age is 10" : "age is not 10";
// console.log(result);

// for (let index = 0; index < 10; index++) {
//     console.log(index)
// }

// for (let index = 10; index > 0; index--) {
//     console.log(index)
// }

// for (let index = 0; index < 10; index += 2) {
//     console.log(index)
// }

// x = 0
// while (x < 10) {
//     console.log(x)
//     x += 1
// }

// const PI=3.142;
// PI=32;
// console.log(PI)

// let text = "dsufsbjdvyrunafasdnvkyugfvcsavv";
// console.log(text.length);
// console.log(text.at(2));
// console.log(text.startsWith("d"))
// console.log(text.repeat(3))

// let sentence = "He is a "

// function greet(name) {
//     console.log("hello " + name)
// }

// greet("izubyr")

// function countdown(number) {
//     for (let index = number; index > 0; index--) {
//      console.log(index)
// }
// }

// countdown(25)

// function even(number) {
//     // let number = 10;
//     if (number % 2 === 0) {
//     console.log("number is even")
//     } else {
//         console.log("number is odd")
//     }
//     console.log("10")
// }
// even(10)

// function max(a , b) {
//     if (a > b) {
//     console.log("a is greater than b"); }
//     else if (a === b) {
//         console.log("numbers are equal")
//     }
//     else {
//         console.log("a is less than b")
//     }
// }
// max(12 , 15)

// function area(b , h) {
//     console.log("area is = " + b * h)
// }
// area(3 , 4)

// function calc(grade) {
//     let score = ""
//     if (grade > 70) {
//         console.log(grade + " is A")
//     }
//     else if (grade > 60) {
//         console.log(grade + " is B")
//     }
//     else if (grade > 50) {
//         console.log(grade + " is C")
//     }
//     else if (grade > 40) {
//         console.log(grade + " is D")
//     }
//     else if (grade > 30) {
//         console.log(grade + " is E")
//     }
//     else {
//         console.log(grade + " is F")
//     }
// }

// calc(39)

// function check(number) {
//     if (number > 0) {
//         console.log("number is positive")
//     }
//     else if (number < 0) {
//         console.log("number is negative")
//     }
//     else if (number === 0) {
//         console.log("number is 0")
//     }
//     else {
//         console.log()
//     }
// }
// check(0)

// function multiplicationTable(number) {
//     for (let i = 0; i<= 12; i++) {
//         console.log(number, "*", i, "=", number*i)
//     }
//     console.log("=====================")
// }
// multiplicationTable(2)
// multiplicationTable(4)
// multiplicationTable(6)
// multiplicationTable(8)

// function sum(num1, num2) {
//     let result = num1 + num2
//     return result
// }

// let total = sum(3 ,5)
// console.log("Total:", )


// function max(num1, num2) {
//     if(num1 > num2) {
//         return num1
//     } else {
//         return num2
//     }
// }

// let maximum = max(9, 5)


// function greeter(name) {
//     return "hello " + name
// }

// let greeting = greeter("Ibrahim")
// console.log(greeting)



// function sumFromOneToN(n) {
//     let sum = 0
//     for (let i = 0; i <=n; i++) {
//         sum += i
//     }
// }
// sumFromOneToN(4)

// function factorOf(n) {
//     for (let i = 0; i <= n; i++) {
//         if (n % i === 0) {
//             console.log(i)
//         }
        
//     }
// }

// factorOf(8)

// function prime(n) {
//     let count = 0
//     for (let i = 0; i <= n; i++) {
//         if (n % i === 0) {
//             count+=1
//         }
//     }
//     if (count == 2) {
//         console.log(n + " prime")
//     } else {
//         console.log(n, + " not a prime")
//     }
// }
// prime(13)

function angleOfTriangle(a , b , c) {
    if (a + b + c === 180) {
        console.log("valid")
} else {
    console.log("not valid")
}
}
angleOfTriangle(20 , 70 , 90)

function areaOfaTriangle(b , h) {
    let area = 1/2 * b * h
    return area
}
