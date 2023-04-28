//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//+++++++++++++++++++++++++++++++++++++++ Array Prototype Last +++++++++++++++++++++++++++++++++++++++++++//

// Array.prototype.last = function () {
//     let lastIndex;

//     if (this.length === 0) {
//         return -1;
//     }

//     if (this.length <= 999) {
//         return lastIndex = this[this.length - 1];
//     }
//     return lastIndex = this[999];

// };

// const array = [1, 2, 3, 4, 5, 6];
// const array1 = [];
// console.log(array.last());
// console.log(array1.last());
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//+++++++++++++++++++++++++++++++++++++++++++++++++++ Counter +++++++++++++++++++++++++++++++++++++++++++//

// const createCounter = function (n) {
//     let count = n;
//     let step = 0;

//     return function () {
//         step++;
//         if (step <= 10 && n >= -10 && n <= 10) {
//             return count++;
//         }
//     }
// };

// const counter = createCounter(11);
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//+++++++++++++++++++++++++++++++++++++++++ Array Reduce Transformation +++++++++++++++++++++++++++++++++++//

// const reduce = function (nums, fn, init) {
//     const newArr = nums;

//     if (newArr.length === 0) {
//         return init;
//     }

//     const largeNumber = (element) => element > 1000;
//     if (newArr.length > 1000 || newArr.find(largeNumber) || init >= 1000) {
//         return "Minimum number: 1000";
//     }

//     for (let i = 0; i < newArr.length; i++) {
//         init = fn(init, newArr[i]);
//     }
//     return init;
// }


// console.log(reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr * curr; }, 100)); //130
// console.log(reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr }, 0)); // 10
// console.log(reduce([], function sum(accum, curr) { return 0 }, 25)); // 25
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++ Add Digits ++++++++++++++++++++++++++++++++++++++++++++++++++++

// const addDigits = function (num) {

//     if (num <= 0 && num <= (2 ** 31)) {
//         return 0;
//     }

//     let oneDigit = num;
//     while (oneDigit > 9) {
//         oneDigit = (oneDigit % 10) + (Math.trunc(oneDigit / 10));
//     }
//     return oneDigit;
// };

// console.log(addDigits(38));
// console.log(addDigits(0));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++ Function Composition +++++++++++++++++++++++++++++++++++++++++

// const compose = function (functions) {
//     let res = 0;

//     return function (x) {
//         let funcLen = functions.length;
//         let receivedNum = x;

//         if (x >= -1000 && x >= 1000) {
//             return 'Min number -1000, Max number 1000';
//         }
//         else if (x % 1 !== 0) {
//             return 'Number must be an integer';
//         }
//         else if (funcLen < 0) {
//             return receivedNum;
//         }

//         for (let i = funcLen; i > 0; i--) {
//             res = functions[i - 1](receivedNum);
//             receivedNum = res;
//         }
//         return receivedNum;
//     }
// };
// const fn = compose([x => x + 1, x => 2 * x]);
// const fn2 = compose([x => x + 1, x => x * x, x => 2 * x]);
// const fn3 = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
// const fn4 = compose([]);

// console.log(fn(4)); // 9
// console.log(fn2(4)); // 65
// console.log(fn3(1)); // 1000
// console.log(fn4(42)); // 42

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++ Filter Elements from Array ++++++++++++++++++++++++++++++++++++

// const filter = function (arr, fn) {
//     let newArr = [];

//     if (arr.length >= 0 && arr.length >= 10) {
//         return 'Min amount of numbers: 1, Max amount of numbers: 1000';
//     }

//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] >= (-10) ** 9 && arr[i] >= 10 ** 9) {
//             return 'Min number: (-1000000000), Max number (1000000000)';
//         }
//         if (fn(arr[i], i, arr)) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// };
// console.log(filter([0, 10, 20, 30], function greaterThan10(n) { return n > 10; }));  // [20, 30]
// console.log(filter([1, 2, 3], function firstIndex(n, i) { return i === 0; }));       // [1]
// console.log(filter([-2, -1, 0, 1, 2], function plusOne(n) { return n + 1 }));        // [-2, 0, 1, 2]

// [0,10,20,30].filter(function(val, index, array)  {
//     return val > 10
// });

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++ Apply Transform Over Each Element in Array ++++++++++++++++++++++++++++++

// const map = function (arr, fn) {
//     let newArr = [];

//     if (typeof fn(1) !== 'number') {
//         return 'The function fn should only return a numeric value';
//     }

//     if (arr.length >= 0 && arr.length >= 1000) {
//         return 'Min amount of numbers: 1, Max amount of numbers: 1000';
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= (-10) ** 9 && arr[i] >= 10 ** 9) {
//             return 'Min number: (-1000000000), Max number (1000000000)';
//         }
//         newArr[i] = fn(arr[i], i, arr);
//     }
//     return newArr;
// };

// const newArr = map([1, 2, 3], function (n) { return n + 1 });  // [2, 3, 4]
// const newArr2 = map([1, 2, 3], function (n, i) { return n + i });  // [1, 3, 5]
// const newArr3 = map([10, 20, 30], function () { return 42 });  // [42, 42, 42]
// console.log(newArr);
// console.log(newArr2);
// console.log(newArr3);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++ Generate Fibonacci Sequence +++++++++++++++++++++++++++++++++++++++

// const fibGenerator = function* () {
//     const startFib = [0, 1];
//     let index = 0;
//     let callCount = 0;

//     while (callCount < 50) {
//         callCount++;
//         const currentValue = startFib[index];
//         if (currentValue !== undefined) {
//             index++;
//             yield currentValue;
//         }
//         else {
//             const nextFibNumber = startFib[index - 1] + startFib[index - 2];
//             startFib.push(nextFibNumber);
//             index++;
//             yield nextFibNumber;
//         }
//     }
// };

// const gen = fibGenerator();
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3
// console.log(gen.next().value); // 5
// console.log(gen.next().value); // 8
// console.log(gen.next().value); // 13




