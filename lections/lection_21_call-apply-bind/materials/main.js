console.log('Lection 21');



let info = {
    x: 10,
    list: []
}

function doIt(a, b){
    // console.log(a === this.list)
    console.log(this);
    console.log(a, b, this.list);
}
// doIt(2, 3);
// doIt.bind(info, info.list)(2, 3);

let data = {
    m: doIt.bind(info)
}

// data.m();
let newDoIt = doIt.bind(null)
console.log(doIt === newDoIt);


// let x = [];
// let y = x;

// console.log(x === y);

function f() {
    console.log(arguments)
    // console.log(arguments.slice(2, 6))
    console.log( [].slice.call(arguments, 2, 6) );
}


f(1, 7, 8, 9, 6, 7,12)