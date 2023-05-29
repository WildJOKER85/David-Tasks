// 1.
// Տրված է

// class Person { };
// class Employee extends Person { };
// class Developer extends Employee { };
// const tom = new Developer();
// Ի՞նչ արժեք կունենան հետևյալ տողերը, ինչու՞

// Object.getPrototypeOf(tom) === Developer.prototype; // A
// A կտպի true, քանի որ  Object.getPrototypeOf(tom) === Developer.prototype ,  ստուգում է, թե երկու օբյեկտներ ունեն նույն prototype, թե ոչ:
// տվյալ դեպքում tom-ը object է, իսկ բոլոր object-ներն ունեն __proto__,   tom.__proto__ === Developer.prototype,
// քանի որ ստեղծվել է new Developer

// Object.getPrototypeOf(tom) === Employee.prototype; // B
// B կտպի false, քանի որ ստեղծված է new Developer() , այլ ոչ new Employee()

// Developer.isPrototypeOf(tom); // C
// C կտպի false, isPrototypeOf() մեթոդը ստուգում է, թե արդյոք օբյեկտը գտնվում է մեկ այլ օբյեկտի prototype շղթայում:
// Developer-ը չի ներառվում tom-ի .__proto__ -ի շղթայում

// Developer.prototype.isPrototypeOf(tom); // D
// Employee.prototype.isPrototypeOf(tom); // E
// Person.prototype.isPrototypeOf(tom); // F
// Object.prototype.isPrototypeOf(tom); // G
// D, E, F, G․ Այս դեպքում բոլորն էլ true: քանի որ tom.__proto__ շղթայում ընդգրկվում է Developer.prototype, Employee.prototype,
// Person.prototype, Object.prototype։


// 2. Տրված է՝
// const a = () => { };
// function B() { };
// Ի՞նչ արժեք կունենան հետևյալ տողերը, ինչու՞
// typeof a; // A
// typeof B; // A
// A, A կտպի function, քանի որ a և B ֆունկցիա են, հաշվի առնելով ինչի օգտագործմամբ են ստեղծվել, այս պարագայում const a = () => { };
// a.__proto__ հղվում է Function.prototype, B.__proto__ նույնպես հղվում է Function.prototype։

// Object.getPrototypeOf(a); // B
// Object.getPrototypeOf(B); // B
// տպում է  ƒ () { [native code] } , քանի որ Object.getPrototypeOf() մեթոդը վերադարձնում է նշված օբյեկտի prototype,
// (այսինքն՝ [[Prototype]] ներքին property)։ Օբյեկտ, որի prototype կվերադարձվի։ իսկ a և B function են․

// a.prototype; // C
// B.prototype; // C
// a.prototype կտպի undefined, որովհետև prototype ունեն միայն class-ները և function-ները, B.prototype {constructor: ƒ},
// քանի որ B function է և function-ը ունի prototype.


// 3.
// Ինչպես է աշխատում new keyword-ը ? Ի՞նչ գործողություններ է այն կատարում։
// JavaScript-ում new keyword-ը օգտագործվում է ստեղծելու instance Object, որն ունի function constructor.
// constructor-ը դա class կամ function է, որը սահմանում է օբյեկտի օրինակի տեսակը,
// իսկ this-ը ցույց է տալիս նոր ստեղծված Object-ը,
// Այն կապում է this բանալի բառով հայտարարված property-ն նոր օբյեկտի հետ:
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}


// 4.
// Թարգմանեք հետևյալ կոդը ES5-ի (օգտագործեք function-ներ class-ի փոխարեն):
// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHello() {
//         console.log(`Hello from ${this.name}`);
//     }
// }
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayHello = function () {
//     console.log(`Hello from ${this.name}`);
// }

// const dav = new Person("Dav");
// dav.sayHello();


// 5. Ստեղծեք object, որը չունի prototype:

// const obj = Object.create(null);
// obj.name = "Davit";
// const obj2 = { __proto__: null };
// obj2.age = 37;


// 6. Ներքևում գրված կոդն աշխատում է առանց խնդիրների, սակայն այն կարելի է ավելի լավացնել (օպտիմիզացնել): Գտե՛ք “խնդիրը” և ուղղե՛ք այն։

// function Hopar(name) {
//     this.name = name;
//     this.speak = function () {
//         console.log('Speaking:', this.name);
//     }
// }


// const a = new Hopar('a');
// const b = new Hopar('b');

// console.log(a.speak());
// console.log(b.speak());
// խնդիրը նա է, որ speak մեթոդը պիտի դրսում հայտարարվի, քանի որ ամեն անգամ երբ ստեղծում ենք new Hopar, հիշողության մեջ անընդհատ ստեղծվում է
// speak մեթոդը, որը անիմաստ տեղ է զբաղեցնում։

// function Hopar(name) {
//     this.name = name;
// }

// Hopar.prototype.speak = function () {
//     console.log('Speaking:', this.name);
// }

// const speakingA = new Hopar("a");
// const speakingB = new Hopar("b");
// speakingA.speak();
// speakingB.speak();


// Ստորև բոլոր խնդիրները գրեք և՛ class-ներով, և՛ Function Constructor-ներով
// 7.
// Ստեղծեք Airplane class / կոնստրուկտոր ֆունկցիա, որը ստանում է name արգումենտ։

// Բոլոր airplane–ները (instance-ները) պետք է ունենան սեփական “isFlying” անունով property․ որի արժեքը նախնական “false” է
// Բոլոր airplane-ները պետք է ունենան “takeOff()” և “land()” մեթոդներ
// - Երբ ինքնաթիռը օդ է բարձրանում (takeOff), “isFlying”-ը պետք է դառնա true
// - Երբ ինքնաթիռը վայրէջք է կատարում (land), “isFlying”-ը պետք է դառնա false

//******************************************** ES 6 Classes ******************************************************/
// class Airplane {
//     constructor(name) {
//         this.name = name;
//     }

//     takeOff() {
//         this.isFlying = true;
//         console.log(`A ${this.name} plane takes off ${this.isFlying}`);
//     }

//     land() {
//         this.isFlying = false;
//         console.log(`A ${this.name} plane lands ${this.isFlying}`);
//     }
// }

// const airplane = new Airplane("Mig");
// airplane.takeOff();
// airplane.land();
//******************************************** ES 5 Function Constrotor *********************************************/
// function Airplane(name) {
//     this.name = name;
// }

// Airplane.prototype.takeOff = function () {
//     this.isFlying = true;
//     console.log(`A ${this.name} plane takes off ${this.isFlying}`);
// }

// Airplane.prototype.land = function () {
//     this.isFlying = false;
//     console.log(`A ${this.name} plane lands ${this.isFlying}`);
// }

// const airplane = new Airplane("Mig");
// airplane.takeOff();
// airplane.land();

// 8.
// Ստեղծեք Person class / կոնստրուկտոր ֆունկցիա, որը ստանում է name և age արգումենտներ։
// Բոլոր person-ները պետք է ունենան դատարկ զանգված (empty array)` “stomach”
// Ավելացրեք “eat” մեթոդ՝ eat(“uteliq”).
// - ուտել (eat) մեթոդը պետք է “uteliq”-ը ավելացնի “stomach”-ում
// - ամենաշատը կարելի է ուտել 10 ուտելիք (stomach.length)
// Ավելացրեք “clear” մեթոդ՝ clear().
// - clear-ը պետք է դատարկի stomach-ի պարունակությունը

//******************************************** ES 6 Classes ******************************************************/
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.stomach = [];
//     }

//     eat(uteliq) {
//         if (this.stomach.length < 10) {
//             this.stomach.push(uteliq);
//             console.log(this.stomach);
//         }
//         else {
//             console.log('your stomach is full');
//         }
//     }

//     clear() {
//         this.stomach = [];
//     }

//     // toString() {
//     //     return this.name + " " + this.age;
//     // }
// }
// const person = new Person();
// person.eat("bread");
// person.eat("butter");
// person.clear();
// person.eat("chees");
//******************************************** ES 5 Function Constrotor *********************************************/
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.stomach = [];
// }

// Person.prototype.eat = function (uteliq) {
//     if (this.stomach.length < 10) {
//         this.stomach.push(uteliq);
//         console.log(this.stomach)
//     }
//     else {
//         console.log('your stomach is full');
//     }
// }

// Person.prototype.clear = function () {
//     this.stomach = [];
// }

// const person = new Person("Dav", 37);
// person.eat("bread");
// person.eat("butter");
// person.clear();
// person.eat("chees");

// // 9 (8.1).
// Եթե այս կետում գրենք՝
// const person1 = new Person('Person1', 14);
// console.log(person1.toString());

// Ի՞նչ կտեսնենք console-ում։ Ինչու՞։
// կտպի [object Object], քանի որ նա ժառանգվում է new Person-ից, person1.__proto__ === Person.prototype,
// եթե կանչում ենք person1.toString(), toString()-ը տեքստավորման function է, կանչելուց փորձում է object-ը դարձնել սեքստ,
// որի արդյունքում դառնում է [object Object], դա նույն բանն է ինչ որ անեմ` console.log(person1 + "");

// Գրե՛ք կոդ, որից հետո console.log(person1.toString()); արտահայտությունը console-ում կտպի տվյալ person-ի անունը և տարիքը, օր․՝ “Person1, 14”:
// Person.prototype.toString = function () {
//     return this.name + " " + this.age;
// }
// console.log(person1.toString());

// 10 (8.2):
// Ստեղծեք Baby class / կոնստրուկտոր ֆունկցիա, որը ժառանգում է Person class-ը։
// Baby-ի կոնստրուկտորը, Person-ի հետ համեմատած, պետք է ստանա 1 ավել արգումենտ՝ “favoriteToy”։
// Person-ի մեթոդներից բացի, Baby-ն պետք է ունենա “play()” մեթոդ, որը կանչվելուց պետք է վերադարձնի string`
// “Playing with x”, որտեղ x-ը favoriteToy-ն է տվյալ instance-ի համար։

//******************************************** ES 6 Classes ******************************************************/
// class Baby extends Person {
//     constructor(name, age, favoriteToy) {
//         super(name, age);
//         this.favoriteToy = favoriteToy;
//     }

//     play() {
//         return `Playing with ${this.favoriteToy}`;
//     }
// }

// const baby = new Baby("Jessy", 6, "soft toy");
// console.log(baby.play());

//******************************************** ES 5 Function Constrotor *********************************************/
// function Baby(name, age, favoriteToy) {
//     Person.call(this, name, age);
//     this.favoriteToy = favoriteToy;
// }

// Baby.prototype = Object.create(Person.prototype);

// Baby.prototype.play = function () {
//     return `Playing with ${this.favoriteToy}`;
// }

// const baby = new Baby("Jessy", 6, "soft toy");
// console.log(baby.play());