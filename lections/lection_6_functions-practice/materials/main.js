console.log('Lection_6');



// x = 10; // global
// var y = 10; // local
// z = 20;
// function f(a) { // LE = {a=20, z=10, innerScope}, scope = global
//     var z = 10;

//     innerScope(a, z);
    
//     function innerScope(a, b){ // LE = {a=20, b=10}, scope = f.LE
//         console.log(a, b, z)
//     }
//     // console.log(z); // 10
//     // console.log(window.z); // 20 
// }

// f(z);


// ------------------------

// var a = 200;
// function outer(){
//     var a = 10;

//     inner();
//     some(a);
//     function inner(){
//         console.log(a);
//     }
// }

// function some(k){
//     console.log(a, k);
// }


// outer();


// --------------------------------------

// var z = 700;

// function foo (a, b) {
//     var k = 1;
//     boo(9);

//     function boo(c) {
//         var p = 20;
//         z = 800;
//         p++;
//         bar(12);

//         function bar(t){
            
//             console.log(a, b, k, c, z, t);
//             // debugger;
//             // console.dir(arguments.callee)
//         }
//     }
// }

// foo(7, 8);

// ---------------------------------------------


// console.log(x, y)
// var x = 10;

// y = 20;

// function f(){
//     console.log(p);
//     var p = 50;
// }


// f();

// console.log(p);


// fofo();
// asdasd() // error

// var asdasd = fofo;

// function fofo(){

// }

// ---------------------------------------------


function sumArr() {
    var sum = 0;
    var lastParam = arguments[arguments.length-1]
    for(var i = 0; i < arguments.length; i++){
        for(var j = 0; j < arguments[i].length; j++){
            sum += arguments[i][j];
        }
    }
    console.log(lastParam)
    return sum;
}


var res = sumArr([2, 8, 9], [3, 2], [0, 9]);

console.log(res)