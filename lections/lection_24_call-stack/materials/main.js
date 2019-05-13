console.log('Lection 24');






// ------------------------------


// x = 1;

// console.log(x);
// console.log(x);
// console.log(x);
// console.log(x);

// f();

// setTimeout(function(){
//     console.log('Timer');
// }, 1000)
// f1(); // 5 sec

// setTimeout(() => {}, 0)


// function f(){
    
//     console.log('before')
//     f1();

//     console.log('after')
// }

// function f1() {
//     console.log('inner')
// }



// --------------


console.log('before')
f3();
setTimeout(() => {console.log('Timer2')}, 999
)
console.log('after')
alert();

function f3() {
    // f3();
    console.log('inner')
    setTimeout(function cb(){
        console.log('timer')
    }, 1000)
}


window.onload = function(){
    a = 10;
}
window.onclick = function(){}


let async = new Promise(function(resolve, reject){
    console.log(1);
    // setTimeout(() => {
    //     resolve(10)
    // }, 2000)

    resolve(1);
})

async.then(() => {
    console.log('resolve')
});