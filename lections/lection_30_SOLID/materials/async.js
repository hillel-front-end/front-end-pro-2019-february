

// let async = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve('Hello example')
//     }, 500)
// })

// async
//     .then(resp => console.log(resp))



// -==================

// function* exampleGen(){
//     // yield
//     // yield 1;
//     // yield 2;
//     // yield 3;

//     for(let i = 0; i <= 10; i++){
//         yield i;
//     }
//     for(let i = 0; i <= 10; i++){
//         yield i*i;
//     }
// }

// let gen = exampleGen();
// console.log( gen.next() );
// console.log( gen.next() );
// console.log( gen.next() );
// console.log( gen.next() );

// for(let value of exampleGen()){
//     console.log(value)
// }


// console.log(gen)


// ----------------------

// let getAsyncValue = new Promise(function(resolve, reject){
//     console.log('example async await')
//     setTimeout(() => {
//         resolve('Hello with async/await')
//     }, 500)
// })

// let parallelPromise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve('Parallel promise')
//     }, 1500)
// })

// async
//     .then(resp => console.log(resp))
// let doAjax = () => {}
// async function f() {
//     // let val = await getAsyncValue;
//     // let parVal = await parallelPromise;

//     // console.log(val, ' | ' ,parVal)
//     let val_1 = await doAjax('/data_1.json')
//     let val_2 = await doAjax('/data_2.json')
//     let val_3 = await doAjax('/data_3.json')
//     let val_4 = await doAjax('/data_4.json')

//     console.log( val_1.concat(val_2, val_3, val_4) )
// }

// async function fParal() {
//     // let val = await getAsyncValue;
//     // let parVal = await parallelPromise;

//     // console.log(val, ' | ' ,parVal)
//     // console.log( val_1.concat(val_2, val_3, val_4) )

//     var values = await Promise.all([
//         doAjax('/data_1.json'), 
//         doAjax('/data_2.json'),
//         doAjax('/data_3.json'),
//         doAjax('/data_4.json')
//     ])

//     console.log(values)
//     return values;
// }

// fParal()
//     .then(values => console.log(value));

// f();

// ----------------------------



var arr = [123, 225,,,,,, 3436 , 4346];
var obj = {x: 2, y: 2} // error
var astr = '1kajsfblkasnfklasmfl';

for(let value of astr) {
    console.log(value);
}

