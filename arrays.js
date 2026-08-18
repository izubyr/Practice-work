// let cars = ["benz", "bmw", "honda", "acura", "mitsubishi", "lexus", "toyota"]
// position -0    1    2
// counting -1    2    3

// let car1 = cars[0]

// cars[1] = "toyota"
//                 // car[5]
// console.log(cars.at(-1))



// function lastValueArray(array) {
//     return array[array.length - 1]
// }

// let value = lastValueArray([1, 2, 3, 4, 5, 6])

// console.log(value)

// console.log(lastValueArray(cars))



// let cars = ["benz", "bmw", "honda", "benz", "bmw"]


// function lastValueArray(array) {
//     return array[array.length - 1]
// }

// let value = lastValueArray([1, 2, 3, 4, 5, 6])

// console.log(value)

// console.log(lastValueArray(cars))

// let scores = [23, 4, 56, 67, 1, 34, 56, 67, 100, 45, 20]

// function calculateMaxScore(array) {
//     let max = 0
//     for (const element of array) { 
//         if(element > max) {
//             max = element
//         }
//     }

//     return max
// }

// let maximumScore = calculateMaxScore(scores)

// console.log(maximumScore)

console.log("JavaScript Quiz")

function sumArray(nummbers) {
    let total = 0;
    for (let i = 0; i < nummbers.length; i++) {
        total += nummbers[i];
    }
    return total
}
console.log(sumArray([2, 4, 6, 8]))

console.log("==========================")

function countEvenNumbers(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count += 1;
        }
    }
    return count;
}
console.log(countEvenNumbers([1,2,3,4,5,6,8]))

console.log("==========================")

function findLargest(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i]
        }            
    }
    return largest
}
console.log(findLargest([12,4,50,8,20]))

console.log("==========================")

function reverseArray(numbers) {
    let reversed = []
    for (let i = numbers.length -1; i >=0; i--) {
        reversed.push(numbers[i]);
    }
    return reversed
}
console.log(reverseArray([1,2,3,4]))

console.log("==========================")
