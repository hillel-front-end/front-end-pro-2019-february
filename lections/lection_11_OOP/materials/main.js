console.log('Lection 11');

//  ES6 - class
// OOP 


// прототипное ООП


// function Animal(x, age) {
//     var counter = 200;

//     this.age = (age + counter)/counter;
//     this.x = x;

//     this.someUniqueMethod = function(){
//         counter -= 10;
        
//         return this.age * 10 - counter;
//     }

//     // this.run = function(){
//     //     console.log('run', this);
//     // }
// }

// Animal.prototype.run = function(){
//     console.log('run', this);
// }



// var p = new Animal(12, 23);
// var d = new Animal('hello', 60);
// console.log(
//     p.someUniqueMethod(),
//     p.someUniqueMethod()
// )

// // p.run();
// // d.run();

// console.log(p, d);


// -------------------------------------------

// наследование


function C1(){

}

C1.prototype.m1 = function(){}

// -----

function C2(){
    this.m3 = function(){}
}

// C2.prototype = new C1(); // наследование
// C2.prototype.m2 = function(){};
// C2.prototype = Object.assign(new C1(), C2.prototype);

// ------------------
C2.prototype = Object.create(C1.prototype);
C2.prototype.m2 = function(){};


var p = new C2();

console.log(p);