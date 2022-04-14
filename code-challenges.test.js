// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibSeq", () => {
  it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
    expect(fibSeq("6")).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibSeq("10")).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.

// create a function called fibSeq
// Fibonacci is adding the last two numbers to make the third number
// take the previous two index and add them together
// create an empty array to push the numbers the added number to
// use a loop to iterate to the set number
// outputArray was not storing the double 1 at the start. hard code to start the sequence at 1
// hard code index 0 and 1 to have an input to start addind from
// i <= fibSeqArray.length was not working, used number instead
//

const fibSeq = (number) => {
  let outputArray = [1]
  let fibSeqArray = []
  fibSeqArray.length = number + 1
  fibSeqArray[0] = 0
  fibSeqArray[1] = 1
  for (let i = 2; i <= number ; i++) {
    fibSeqArray[i] = fibSeqArray[i-1] + fibSeqArray[i-2]
    outputArray.push(fibSeqArray[i])
  }
  return outputArray
}

// PASS  ./code-challenges.test.js
//  fibSeq
//    ✓ returns an array that length containing the numbers of the Fibonacci sequence (2 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.193 s, estimated 1 s

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("sortOdd", () => {
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    expect(sortOdd(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(sortOdd(fullArr2)).toEqual([-823, 7, 23])
  })
})

// sortOdd
//     ✕ takes in an array and returns a new array of only odd numbers sorted from least to greatest (1 ms)
//
//   ● sortOdd › takes in an array and returns a new array of only odd numbers sorted from least to greatest
//
//     ReferenceError: sortOdd is not defined

//const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

//const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

// create a function called soortOdd
// sort the array in acending order
// use .fliter
// filter out the even number with %2 !==0
// filter out data types with typeof
// use && to combine filters

const sortOdd = (array) => {
  array.sort(function(a, b){return a-b})
  return array.filter(value => {
    return typeof value === 'number' && value %2 !== 0
  })
}

// PASS  ./code-challenges.test.js
//   fibSeq
//     ✓ returns an array that length containing the numbers of the Fibonacci sequence (2 ms)
//   sortOdd
//     ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest
//
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.22 s, estimated 1 s


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("addLast", () => {
  it("returns an array of the accumulating sum. An empty array should return an empty array", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    const numbersToAdd2 = [0, 7, -8, 12]
    const numbersToAdd3 = []
    expect(addLast(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(addLast(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(addLast(numbersToAdd3)).toEqual([])
  })
})

// addLast
//     ✕ returns an array of the accumulating sum. An empty array should return an empty array
//
//   ● addLast › returns an array of the accumulating sum. An empty array should return an empty array
//
//     ReferenceError: addLast is not defined



//const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

// const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

// const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.
// create a function called addLast
// use an empty array to store the added values
// hard code the first value in the array with array[0]
// create a loop for add the current and past value and store in the empty array
// for the [] input the code returned [undefined]
// to fix it i used an if else statement to return [] if the input is []


const addLast = (array) => {
  outputArray = [array[0]]
  if (array.length > 0) {
    for (let i = 1; i < array.length ; i++){
      array[i] = array[i-1] + array[i]
      outputArray.push(array[i])
    }
    return outputArray
  } else {
    return []
  }
}

// PASS  ./code-challenges.test.js
//  fibSeq
//    ✓ returns an array that length containing the numbers of the Fibonacci sequence (2 ms)
//  sortOdd
//    ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest
//  addLast
//    ✓ returns an array of the accumulating sum. An empty array should return an empty array
//
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.229 s, estimated 1 s
