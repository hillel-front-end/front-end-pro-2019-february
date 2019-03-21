/*

+ ES6

+ html коллекция
+ html элемент
+ Обьекты classList, className

*/

// console.log(a); // undefined

var a = 10;
let c = 20;

// console.log(a, c);


// ---------------------

if (true){
    var x = 30;
    let y = 50;

    // console.log(y)
}

// console.log(x, y);

for(let i = 1; i <= 10; i++){
    // console.log(i);
}

// console.log('after', i);


// -------------------------------

const SUM = 20;

// console.log(SUM)

// SUM = 50;
// SUM++;
// SUM += 1;
// SUM = SUM + 1;
// console.log(DATA)

const DATA = {
    x: 10,
    y: 30
};

DATA.x = 800;
delete DATA.x;
// DATA = 200;
// console.log(DATA)

if (true) {
    const value = 200;
}

// console.log(value);


// -------------------------------

// arrow functions


function f1(a, b) {
    return a + b;
}

var f2 = function(a, b) {
    return a + b;
}

let x1 = 20;

let f3 = (a, b) => a + b;

let f4 = a => a*10;

let f5 = () => {
    console.log('f5');
    let result = 10*20 - x1;

    return result + 20;
}

// --------------------------

function factory(list, cb) {
    let i = 0;

    // return function(){ 
    //     return cb(list[i++])
    // }
    return () => cb(list[i++]);
}

var step = factory(
    [2, 4, 5, 6], 
    a =>  Math.pow(a, 5)
);

// console.log(step())
// console.log(step())
// console.log(step())

let getAddress = function() {
    return this.address + ' ' + this.house;
}

let info = {
    address: 'Mechnikova',
    house: '12/1',
    getAddress: getAddress
}

let action = {
    address: 'Artma',
    house: '12',
    getAddress: getAddress
}

// console.log(info.getAddress());
// console.log(action.getAddress());


// ------------------------------------

// Window, DOM

console.dir(document);

// -----------

window.onload = function() {
    // var elem = document.getElementById('elem');
    
    // query
    var elem = document.querySelector('#elem');

    setTimeout(() => {
        elem.align = 'left';
    }, 2000);
    



    // elem.className = 'block';
    setTimeout(() => {
        // elem.className += ' animate';
        elem.classList.add('animate');
        elem.classList.remove('item-1');

        console.dir(elem);
    }, 2000);
}



