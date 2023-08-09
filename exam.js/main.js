///////////////////////////////////////////////////// 50. Pow(x, n) ///////////////////////////////////////////////////////////////
// const myPow = function (x, n) {
//     let resAbs = Math.abs(n);
//     let result = 1;

//     if (n < 0) {
//         x = 1 / x;
//     }

//     while (resAbs > 0) {
    //         if (resAbs % 2 === 1) {
        //             result *= x;
        //         }
        //         x *= x;
        //         resAbs = Math.floor(resAbs / 2);
        //     }
        //     const fixedNumber = result.toFixed(5);
        //     return fixedNumber;
        // };
        
        // const resPov = myPow(2.00000, 10);    // Input: x = 2.00000, n = 10  // Output: 1024.00000
        // const resPov2 = myPow(2.10000, 3);    // Input: x = 2.10000, n = 3   // Output: 9.26100
        // const resPov3 = myPow(2.00000, -2);   // Input: x = 2.00000, n = -2  // Output: 0.25000
        // console.log(resPov);
        // console.log(resPov2);
// console.log(resPov3);
///////////////////////////////////////////////// 2618. Check if Object Instance of Class ////////////////////////////////////////
// function checkIfInstanceOf(obj, classFunction) {
//     if (obj === null || obj === undefined || classFunction === null || classFunction === undefined) {
//         return false;
//     }
//     // if (obj instanceof classFunction) {
//     //     return true
//     // }

//     // let objGetPrototype = Object.getPrototypeOf(obj);
//     while (obj !== null) {
//         if (obj === classFunction.prototype) {
//             return true;
//         }
//         obj = Object.getPrototypeOf(obj);
//     }
//     return false;
// }
// // console.log(5 instanceof Number) // false
// // const num = new Number(5)
// // console.log(num instanceof Number); // true

// const resultGetPrototype = checkIfInstanceOf(new Date(), Date); // true
// console.log(resultGetPrototype);

// class Animal { };
// class Dog extends Animal { };
// const resultGetPrototype2 = checkIfInstanceOf(new Dog(), Animal); // true
// console.log(resultGetPrototype2);

// const resultGetPrototype3 = checkIfInstanceOf(5, Number);
// console.log(resultGetPrototype3)
////////////////////////////////////////////////////// 2722. Join Two Arrays by ID ///////////////////////////////////////////////

// const join = function (arr1, arr2) {
//     let arrInObj;
//     let arrInObj2;

//     for (const obj of arr1) {
//         arrInObj = obj
//         console.log(arrInObj)
//     }
//     for (const obj2 of arr2) {
//         arrInObj2 = obj2
//         // console.log(obj2);
//     }

//     arr1.push(arrInObj2)
//     return arr1
// };

// const arrOne = [
//     { "id": 1, "x": 1 },
//     { "id": 2, "x": 9 }
// ];
// const arrTwo = [
//     { "id": 3, "x": 5 }
// ];
// const resArr = join(arrOne, arrTwo);
// console.log(resArr);

// const arrThree = [
//     { "id": 1, "x": 2, "y": 3 },
//     { "id": 2, "x": 3, "y": 6 }
// ];
// const arrFour = [
//     { "id": 1, "b": { "c": 84 }, "v": [1, 3] }
// ];

// // const resArr2 = join(arrThree, arrFour);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// Tests //////////////////////////////////////////////////////////////////////////////
// const proto = {};
// console.log(proto);
// const obj = Object.create(proto);
// console.log(obj);
// console.log(Object.getPrototypeOf(obj) === proto); // true


// const joinedArray = mergeAndSortArrays(arr1, arr2);
// console.log(joinedArray);

// const map1 = new Map();
// map1.set('bar', 'foo');
// console.log(map1);
// console.log(map1.get('bar'));
// // Expected output: "foo"

// console.log(map1.get('baz'));
// // Expected output: undefined

// const myArray = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' }
// ];
// // console.log(myArray)
// const newObject = { id: 3, name: 'Charlie' };

// myArray.push(newObject);

// console.log(myArray);
