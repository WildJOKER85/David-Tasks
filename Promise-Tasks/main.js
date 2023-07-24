//1. Write iterator function for an array that returns each value of the array when called, 
//   one element at  a time
// const returnIterator = (arr) => {
//     let index = 0;

//     const obj = {
//         next: () => {
//             const result = [index, arr[index]];
//             index++;
//             return result;
//         },
//     };
//     return obj;
// };

// function* returnIterator(arr) {
//     for (let i = 0; i < arr.length; i++);
//     yield [i, arr[i]];
// }

// const array2 = ["a", "b", "c", "d"];
// const myIterator = returnIterator(array2);
// console.log(myIterator.next()); // -> should log [0, 'a']
// console.log(myIterator.next()); // -> should log [1, 'b']
// console.log(myIterator.next()); // -> should log [2, 'c']

// 2. Create an iterator that returns each word from a string of words on the call of its .next method (hint: use regex!) Then attach it as a method to the prototype of a constructor Words. Hint: research Symbol.iterator!
// function Words(string) {
//     this.str = string;
// }

// Words.prototype[Symbol.iterator] = function() {
//     let i = 0;
//     const string = this.str;
//     const wordArray = string.match(/[A-z]+/g);

//     return {
//         next() {
//             if (i < wordArray.length) {
//                 const value = wordArray[i];
//                 i++;
//                 return { value, done: false };
//             }
//             return { value: undefined, done: true };
//         }
//     }
// }
// const exemp = new Words("lorem Ipsum is simply");

// for (const word of exemp) {
//     console.log(word);
// }

// 3. Write a function that will console.log "hello there", or "bye", every three seconds depending on if 
// the word passed into the function is 'english'. Do not use any type of loop constructor and only make the 
// call to createConversation once.

// function* createConversation(str) {
//     yield interval(str);
// }

// function interval(str) {
//     if (/[a-zA-Z]/.test(str)) {
//         const len = str.length;
//         let count = 0;

//         const id = setInterval(() => {
//             if (count < len) {
//                 count++;
//                 console.log(str);
//             }
//             else {
//                 clearInterval(id);
//             }
//         }, 3000);
//     }
//     else {
//         console.log("Letters must be only the English alphabet !!!");
//     }
// }

// const logInfo = createConversation("hello here");
// logInfo.next().value;

// 4. Write a generator function which takes 3 arguments` start, end, step, and gives back values in range [start, end], incrementing by "step".
// function* rangeIter(start, end, step) {
//     let startValue = start;

//     while (startValue <= end) {
//         yield startValue;
//         startValue += step;
//     }
// }
// // ... your code here
// const rangeValue = rangeIter(10, 20, 2);
// for (const value of rangeValue) {
//     console.log(value);
// }

// 5. Write a function which takes an array as argument and removes duplicates from that array
/////////////////////////////   Option 1     ////////////////////////////////////////
// function removeDuplicates(arr) {
//     const myArr = arr;
//     const uniq = [... new Set(myArr)];
//     return uniq;
//     // ... your code here
// }
// // ... your code here
// console.log(removeDuplicates([1, 2, 2, 3]));  // [1, 2, 3]
// console.log(removeDuplicates([1, 1, 1]));     // [1]

// /////////////////////////////   Option 2     ////////////////////////////////////////
// const arr = [1, 2, 2, 3];  // [1, 2, 3]
// const arr2 = [1, 1, 1];    // [1]
// const uniq = {};

// for (const num of arr) {
//     uniq[num] = num;
// }
// console.log(Object.values(uniq));
// Ex: [1, 2, 2, 3]-- > [1, 2, 3]
// [1, 1, 1]-- > [1]

// /////////////////////////////   Option 3     ////////////////////////////////////////
// function uniq(array) {
//     const newArr = array;
//     const resultArr = [];
//     const sorted = newArr.sort((a, b) => {
//         if (a > b) {
//             return 1;
//         }
//         if (a < b) {
//             return -1;
//         }
//     });

//     for (let i = 0; i < sorted.length; i++) {
//         if (newArr[i + 1] === undefined) {
//             resultArr.push(newArr[i]);
//             break;
//         }
//         if (sorted[i] < sorted[i + 1]) {
//             resultArr.push(sorted[i]);
//         }
//     }
//     return resultArr;
// }
// console.log(uniq([1, 2, 2, 3]));

// /////////////////////////////   Option 4     ////////////////////////////////////////
// function uniq(array) {
//     const newArr = array;
//     const sorted = newArr.sort((a, b) => {
//         if (a > b) {
//             return 1;
//         }
//         if (a < b) {
//             return -1;
//         }
//     });

//     const resultArr = sorted.filter((item, index) => {
//         return index === sorted.indexOf(item);
//     });
//     return resultArr;
// }
// console.log(uniq([1, 2, 3, 2]));

// 6. Write a function which takes an array with length "n" as argument and swaps 1st and nth, 2nd and (n-1)th and so on items.
// function swapArray(arr) {
//     const newArr = arr;
//     const len = newArr.length - 1;
//     const resArr = [];

//     for (let i = len; i >= 0; i--) {
//         resArr.push(newArr[i]);
//     }
//     return resArr;
//     // ... your code here
// }
// console.log(swapArray([1, 2, 3, 4]));     // --> [4, 3, 2, 1]
// console.log(swapArray([1, 2, 3, 4, 5]));  // --> [5, 4, 3, 2, 1]
// ... your code here
// Ex:   [1, 2, 3, 4] --> [4, 3, 2, 1]
//    [1, 2, 3, 4, 5] --> [5, 4, 3, 2, 1]

// 7. what will be the output, why ?

// async function getData() {
//     return await Promise.resolve('I made it!');
// }

// const data = getData();
// console.log(data);
// Կտպի   Promise {<pending>}, Քանի որ getData()-ը ասինխրոն ֆունկցիա է, այն անմիջապես վերադարձնում է promise։
// Մինչ await-keyword promise հասանելի չէ, քանի որ promise դեռ pending մեջ է, և երբ մենք կանչում ենք getData() ֆունկցիան
// այն անմիջապես վերադարձնում է promise object՝ չսպասելով promise-ի լուծմանը։
// Սա կլինի մեր խնդրի լուծումը՝ const data = getData()․then(data => console.log(data));

// 8. what will be the output, why ?
// const myPromise = () => Promise.resolve("I have resolved!");

// function firstFunction() {
//     myPromise().then((res) => console.log(1, res));
//     console.log("first");
// }

// async function secondFunction() {
//     console.log(2, await myPromise());
//     console.log("second");
// }

// firstFunction();
// secondFunction();

// Կտպի՝
// first
// 1 'I have resolved!'
// 2 'I have resolved!'
// second
// const myPromise = () => Promise.resolve("I have resolved!"); ֆունկցիա է, որը վերադարձնում է promise` I have resolved! կատարված արժեքով:
//
// function firstFunction() {
// myPromise().then((res) => console.log(1, res));
// console.log("first");
// } սա սովորական ֆունկցիա է, որը կանչում է myPromise()-ը քանի որ myPromise()-ը promise-է, դա համարվում է ասինխրոն ֆունկցիա, որը կանչելուն պես
//   ընկնում է Microtask queue հերթի մեջ, և կկատարվի այն ժամանակ, երբ call stack-ը կլինի դատարկ, իսկ երբ հերթից հետո կոդը շարունակվում է
//   հանդիպում է սինխրոն գործողության՝ console.log("first"); գործողությունը ընկնում է call stack, և տպում է first՝, տպելուց հետո երբ
//   ազատվում է call stack-ը, նոր տպում է  1 'I have resolved!'
//
// async function secondFunction() {
// console.log(2, await myPromise());
// console.log("second");
// } սա ասինխրոն ֆունկցիա է, որը սպասում է myPromise()-ի լուծմանը(կատարմանը) նախքան հաջորդ տողով անցնելը:
// այդ իսկ պատճառով էլ տպում է 2 'I have resolved!' նոր հետո second։

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// // What will be the output, why ?
// 1.
// console.log(10);

// setTimeout(function () {
//     console.log(20);
// }, 1000);

// setTimeout(function () {
//     console.log(30);
// }, 0);

// console.log(40);

// կտպի  10, 40, 30, և 1-վրկ հետո 20։
// 1)    10-քանի որ console.log(10); սինխրոն գործողություն է։

// 2)    setTimeout(function () {
//           console.log(20);
//       }, 1000); հանդիպելուց ընկնում է MacroTask հերթի մեջ և սպասում։

// 3)    setTimeout(function () {
//           console.log(30);
//       }, 0);  նույնպես ընկնում է MacroTask հերթի մեջ և սպասում։

// 4)   40-քանի որ console.log(40); սինխրոն գործողություն է։
// 5)   բոլոր սինխրոն գործողությունները կատարվելուց հետո, նոր կտպի 30 քանի որ 0 m/s, և 1/վրկ հետո 20։


// 2.
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
// });

// promise1.then(() => {
//     console.log(3);
// });

// console.log(4);
// կտպի 1, 4, 3, console.log(1); սինխրոն գործողություն է, resolve("success"); քանի որ հաջողված է, then(() => { console.log(3);}) ընկնում է
// ասինխրոն գործողության մեջ(MicroTask); կոդը շարունակվում է, և տպում է console.log(4);
// դատարկվում է Call Stack-ը և հետո նոր տպում է console.log(3);

// // 3.
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
// });
// promise1.then(() => {
//     console.log(3);
// });
// console.log(4);
// կտպի 1, 4, console.log(1); սինխրոն է, քանի որ մեր promise-ում resolve()-ը չի կատարվում promise1.then(() => { console.log(3);})
// then-ը չի կանչվի, կոդը կշարունակվի և կտպի console.log(4);

// // 4.
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("resolve1");
// });

// const promise2 = promise1.then((res) => {
//     console.log(res);
// });

// console.log("promise1:", promise1);
// console.log("promise2:", promise2);

// կտպի 1, promise1: Promise {<fulfilled>: 'resolve1'}, promise2: Promise {<pending>}, resolve1
// console.log(1); սինխրոն գործողություն է
// հետո կկանչի resolve("resolve1"); կկատարվի resolve1 արժեքով և կսպասի processing-ին
// const promise2 = promise1.then((res) => այս տողին կհասնի (res) => { console.log(res); } և callback-ը կգնա հերթի մեջ resolve1 արժեքով։
// հետո console.log("promise1:", promise1); երբ տպում ենք promise1 ստանում ենք Promise {<fulfilled>: 'resolve1'}, քանի դեռ ․then(...)
// չենք արել, այսպես ասած կատարվել է resolve1 արժեքով և սպասում է processing-ին
// console.log("promise2:", promise2); այս տողում promise2: Promise {<pending>} երբ տպում ենք promise2 մեր callback-ը դեռ հերթի մեջ է
// և սպասում է callstack-ը դատարկվի, այդ պատճառով էլ տպում է որ pending-ը մեջ է
// և վերջում տպում է արդեն հերթի մեջի resolve1;

// 5.
// const fn = () => new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
// });

// fn().then((res) => {
//     console.log(res);
// });

// console.log(2);
// կտպի 1, 2, success, սինխրոն է-console.log(1);  resolve("success"); քանի որ հաջողված է "success" արժեքով
// fn().then((res) => console.log(res)}); ընկնում է հերթի մեջ "success" արժեքով և սպասում, console.log(2) տպելուց
// հետո նոր կտպի success

// // 6.
// console.log("start");

// setTimeout(() => {
//     console.log("setTimeout");
// });

// Promise.resolve().then(() => {
//     console.log("resolve");
// });

// console.log("end");
// կտպի start, end, resolve, setTimeout
// 1. console.log("start"); սինխրոն է,
// 4. setTimeout(() => { console.log("setTimeout"); }); ասինխրոն կոդ է և ընկնելու է MacroTask հերթի մեջ և սպասում
// 3. Promise.resolve().then(() => { console.log("resolve"); }); նույնպես ասինխրոն կոդ է, և ընկնում է MicroTask հերթի մեջ և սպասում
// 2. console.log("end");
// MacroTask և MicroTask գոյություն ունի ևս հերթականություն, սկզբում կատարվու է բոլոր MicroTask-ները, և հետո մեկ MacroTask,
// եթե MacroTask-ի մեջ պարունակում է MicroTask, ապա նորից անում է բոլոր MicroTask-ը և նորից վերցնում մեկ MacroTask․ ր այդպես շարունակ։


// 7.
// const promise = new Promise((resolve, reject) => {
//     console.log(1);

//     setTimeout(() => {
//         console.log("timerStart");

//         resolve("success");

//         console.log("timerEnd");
//     }, 0);

//     console.log(2);
// });

// promise.then((res) => {
//     console.log(res);
// });

// console.log(4);
// 1, 2, 4, timerStart, timerEnd, success,
// 1․ console.log(1); սինխրոն է
// setTimeout ընկնում է MacroTask հերոի մեջ և սպասում,
// 2․ console.log(2); սինխրոն է
// promise.then((res) => { console.log(res); }); then-ը չի կատարվի քանի դեռ promise-ը դեռ չի ավարտվել, գնում ենք առաջ
// 3․ console.log(4);
// 4-ը տպեկուց հետո անցնում ենք մեր հերթի մեջ սպասվող գործողությունների կատարմանը,
// 4․ մտնում ենք մեր callback function-ը և տպում console.log("timerStart");
// հասնում ենք resolve("success"); և ընկնում MicroTask հերթի մեջ, սպասում
// console.log("timerEnd"); տպելուց հետո կանչում է then-ը և տպում success

// 8.
// const timer1 = setTimeout(() => {
//     console.log("timer1");

//     const timer3 = setTimeout(() => {
//         console.log("timer3");
//     }, 0);

// }, 0);

// const timer2 = setTimeout(() => {
//     console.log("timer2");
// }, 0);

// console.log("start");
// կտպի start, timer1, timer2, timer3,
// 1․ console.log("start"); քանի որ մինչ start-ը բոլորը ասինխրոն գործողություններ են,
// հերթի մեջ առաջինը ընկնում է () => {
//                              console.log("timer1");
//                              const timer3 = setTimeout(() => {
//                              console.log("timer3");
//                              }, 0);
//                              }

// հետո                         () => {
//                              console.log("timer2");
//                              }, 0);

// երբ տպում է console.log("timer1"); տեսնում է նորից ասինխրոն գործողություն և գցում է հերթի մեջ,
// շարունակում է և տպում հերթում սպասվող console.log("timer2");
// և հետթ նոր տպում է console.log("timer3");


// // 9.
// const timer1 = setTimeout(() => {
//     console.log("timer1");
//     const promise1 = Promise.resolve().then(() => {
//         console.log("promise1");
//     });
// }, 0);
// const timer2 = setTimeout(() => {
//     console.log("timer2");
// }, 0);

// console.log("start");
// կտպի start, timer1, promise1, timer2
// նորից ասինխրոն գործողությունները ընկնում են հերթի մեջ, և սկզբում տպում է start
// երբ սկսվում է ասինխրոնների հերթականությունը կատարվել, տպում է console.log("timer1");
// հետո տեսնում է հաջողված promise, և գցում է MicroTask հերթի մեջ, քանի որ MicroTask-ը ավելի շուտ է կատարվում տպում էconsole.log("promise1");
// նոր հետո տպում էconsole.log("timer2");

// 10.
// const promise1 = Promise.resolve().then(() => {
//     console.log("promise1");
//     const timer2 = setTimeout(() => {
//         console.log("timer2");
//     }, 0);
// });
// const timer1 = setTimeout(() => {
//     console.log("timer1");
//     const promise2 = Promise.resolve().then(() => {
//         console.log("promise2");
//     });
// }, 0);
// console.log("start");
// start, promise1․ timer1, promise2, timer2
// առաջինը  քանի որ Promise(ասինխրոն)-ընկնում է-(MicroTask) հերթի մեջ և սպասում
// const timer1 = setTimeout(ասինխրոն)-ընկնում է(MacroTask) և սպասում
// start-ը տպելուց հետո անցնում է հերթում սպասող կոդի կատարմանը։ Տպում է console.log("promise1"); քանի որ (MicroTask) է
// հետո տեսնում է const timer2 = setTimeout և callback-ը գցում է (MacroTask) հերթի մեջ
// գալիս է մտնում const timer1 = setTimeout և տպում է console.log("timer1");
// շառունակում և տեսնում է Promise-ընկնում է-(MicroTask) հերթի մեջ, քանի որ MicroTask-ը առաջինն է կատարվում տպում է console.log("promise2");
// նոր MacroTask-ը console.log("timer2");


// 11.
// const promise1 = new Promise((resolve, reject) => {
//     const timer1 = setTimeout(() => {
//         resolve("success");
//     }, 1000);
// });

// const promise2 = promise1.then((res) => {
//     console.log(res);
//     throw new Error("error!!!");
// })

// console.log("promise1", promise1);
// console.log("promise2", promise2);

// const timer2 = setTimeout(() => {
//     console.log("promise1", promise1);
//     console.log("promise2", promise2);
// }, 2000);

// կտպի՝
// 1․ promise1 Promise {panding},
// 2․ promise2 Promise {panding},
// success,
// Uncaught (in promise) Error: error!!!,
// promise1 Promise {<fulfilled>: 'success'}.
// promise2 Promise {<rejected>: Error: error!!!
//          at http://127.0.0.1:5500/AWS/Promise-Tasks/main.js:470:11}
//
// 1․ Promise {panding}, քանի որ () => { resolve("success"); }, 1000) գտնվում է հերթի մեջ
// 2․ Promise {panding}, քանի որ ․then-ի callback-ը նույնպես ընկնում է հերթի մեջ։
// իջնում է և քանի որ ասինխրոն գործողություն է () => { console.log("promise1", promise1);
//                                                     console.log("promise2", promise2);
//                                                    }, 2000);    նույնպես ընկնում է հերթի մեջ։
// այդ տողից հետո, որբ ավարտվում է կոդը, գնում է հերթում ընկած առաջին callback-ի վրա, դա մեր () => { resolve("success"); }, 1000)
// սա կատարվելու է success արժեքով և սպասի processing-ին, շարունակում է դեպի հերթում սպասող (res) => {
//                                                                                           console.log(res);
//                                                                                           throw new Error("error!!!");
//                                                                                           }
// console.log(res) 1/վրկ․ հետո տպելու է կատարված success,
// տպելուց հետո միանգամից Error է գցում throw new Error("error!!!"), որը հայտնվում է մեր browser-ին
// շարունակում է դեպի հերթում մնացած վերջին callback-ին և 2/վրկ հետո տպելու է promise1 Promise {<fulfilled>: 'success'}
// քանի որ արդեն processing-ի մեջ է կատարված արժեքով բայց .then() արած չէ
// վերջում տպում է Promise {<rejected>: Error: error!!!
//                 at http://127.0.0.1:5500/AWS/Promise-Tasks/main.js:470:11} քանի որ 
// վերում նշված այդ Error-ը ոչ մի տեղ չենք բռնում։
// 
