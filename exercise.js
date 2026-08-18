// 1
let total = [2, 4, 6, 8]
let sum = total.reduce((e) => e + e)
console.log(sum)

// 2
let count = [1,2,3,4,5,6,8]
let even = count.filter((e) => e % 2 === 0 )
console.log(even)

// 4
let reverseArray = [1,2,3,4]
let reversed = reverseArray.reverse()
console.log(reversed)

// 6
let getPositiveNumbers = [-2,5,-1,8,0,10]
let positive = getPositiveNumbers.filter((e) => e >0)
console.log(positive)

// 7
let multiplyByThree = [2,4,6]
let byThree = multiplyByThree.map((e) => e * 3)
console.log(byThree)

// 11
let passedStudents = [30,55,80,45,90]
let passed = passedStudents.filter((e) => e > 50)
console.log(passed)

// 9
let removeDuplicates = [1,2,2,3,4,4,5]
let removed = removeDuplicates.set
console.log(removed)