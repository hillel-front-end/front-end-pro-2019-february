console.log('Lection 7');


// function foo() {
//     return bar;
// }

// var bar = function(a) {
//     return a*a;
// }

// console.log(foo);
// console.log(bar);


// var res = foo()

// console.log(res(23));
// console.log(res);

// ----------------------------------

// not ok
// function foobar() {
//     return innerFofo;


//     function innerFofo() {
        
//     }
// }

// ok

function fooBar(list, i) {
    if (i === undefined) {
        i = 0;
    }
    // var i = 0;

    return function(action){
        if(action == 'reset') {
            i = 0;
        }
        console.log(list[i])
        i++;
        // debugger;
    }
}

// var some = fooBar([81, 22, 31, 4, 8, 9, 4]);

// some();
// some();
// some();
// some('reset');
// some();
// some();
// some();
// some();

// fooBar([81, 22, 31, 4, 8, 9, 4])()


// ---------------------------------------------------



// var data = {
//     x: 10,
//     y: 20,
//     m1: function(a){
//         return a;
//     }
// }


// var foobar = {
//     x: 10,
//     y: 20,
//     m1: function(b){
//         return b;
//     }
// };

// console.log(data, foobar);
// console.log(data.x, foobar.x);
// console.log(data.m1(3), foobar.m1(6));
// // -----------------------------
// console.log(data['x'], foobar['y']);

// var info = {x: 10, y: 20, s: 'asdasd', bo: false},
//     list = [2, 8, 4, 8, 4, 6, 2]

// console.log(
//     info,
//     list
// );



// // -----------------------------


var data = {
    x: 10,
    y: 20,
    sum: sumProps,
    m1: function(){
        return 'hlelloodasdsad';
    }
}

var info = {
    x: 2,
    y: 23,
    sum: sumProps,
    
}

for(var key in data) {
    console.log(key, data[key])
    if(typeof data[key] == 'function'){
        console.log( data[key]() )
    }
}

function sumProps(){
    // console.log(this);
    return this.x + this.y;
}

// console.log( data.sum(), info.sum() );

// ------------------------------------------

// this #1

function fillArray(){
    var zSUPER = 500;
    console.log(this); // window

    inner();

    function inner() {
        console.log(this); // window
    }
}

var obj = {
    fillArray: fillArray
}

// fillArray();

// this #2
// obj.fillArray();

// var SUPER100 = 100;
// PUPER200 = 200;

// console.log(window.SUPER100, window['SUPER100'], window.fillArray())
// alert()
// console.log(window);

// -----------------------------------------------------

