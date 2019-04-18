console.log('Lection 20');


// Descriptors

let data = {
    y: 20
};


data.x = 10;

Object.defineProperty(data, 'some', {
    value: 80,
    writable: false,
    enumerable: false,
    configurable: false
});


// Object.defineProperty(data, 'some', {
//     writable: true,
//     enumerable: true
// });

// Object.prototype.m1 = function(){}
// Object.defineProperty(Object.prototype, 'm1', {
//     value: function(){},
//     writable: false,
//     enumerable: false
// });

// for(let key in data){
//     console.log(key)
// }

// console.log(data);


// --------------------------------------

// get, set

// let x = 10;
// let info = {
//     counter: 0,
//     m1(a, b) {
//         return a + b;
//     },
//     get m5(){
//         console.log('M5', arguments)
//         let x = this.counter;

//         return () => {
//             return x++;
//         }
//     },
//     set m5(value){
//         // info = Object.assign(this, value);
//         for(let key in value){
//             this[key] = value[key]
//         }
//     }
// }


// // console.log( x );

// // let z = x + 10;

// // info.m2 = () => {}
// // console.log(info.m1(2, 19));

// // console.log( info.m5 )
// // info.m5 = {a: 10, b: 20, c: 40}
// // console.log( info.m1() )

// // let step = info.m5;

// // console.log(step(), step(), step())

// // if(info.m5){

// // }


// // -------------------------------------

// let desktop = {
//     _x: 700
// }

// Object.defineProperty(desktop, 'value', {
//     get: function(){
//         return this._x;
//     },
//     set: function(val){
//         this._x = val
//     }
// })

// console.log(desktop.value)
// desktop.value = 1200;
// console.log(desktop.value)


// --------------------------------------
function AnimalOld(name, age) {
    this.name = name;
    this.age = age;

    this.run = function(){}
}

AnimalOld.prototype.eat = function(){}
AnimalOld.prototype.sleep = function(){}


class Animal {
    constructor(age, color) {
        this.age = age;
        this.color = color;

        this.run = function(){}
    }

    eat() {

    }

    sleep() {

    }
}

// let p = new Animal('Bony', 5);
// let pOld = new AnimalOld('Bony', 5);
// console.log(p, pOld)
// --------------------------------------

class Pet extends Animal {
    constructor(owner, age = 0, color = 'white') {
        super(age, color);

        this.owner = owner;
    }

    walk(){

    }
}

class Dog extends Pet {
    constructor(name, color, age, owner) {
        super(owner, age, color);

        this.name = name;
    }
}

let puppy = new Dog('Maks', 'black', 2, 'Katenka');

console.log(puppy)