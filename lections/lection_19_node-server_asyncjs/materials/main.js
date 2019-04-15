console.log('Lection 19');

// new Promise(function(resolve, reject){
//     let x = Math.floor(Math.random()*10)

//     if(x > 5) {
//         return resolve(x);
//     }
    
//     reject(x);

//     console.log('HELLO');
// })
// .then(item => console.log(item))
// .catch(er => console.warn(er));


// ----------------------------------------------------

// let async = new Promise((resolve, reject) => {

//     // resolve(100);
//     reject(0);
// })

// async
//     .then(
//         value => {
//             console.log('RESOLVE 1', value);

//             return value;
//             // return Promise.resolve(value)
//         },
//         er => {
//             console.log('REJECT 1', er)

//             // return new Promise(function(resolve, reject){
//             //     reject(er);
//             // });
//             return Promise.reject(er);
//         }
//     )
//     .then(
//         value => console.log('RESOLVE 2', value),
//         er => console.log('REJECT 2', er)
//     )

// ---------------

// let async = new Promise((resolve, reject) => {
//     console.log('start_1')
//     setTimeout(() => {
//         console.log(1)
//         resolve();
//     }, 1500)

// })


// async
//     .then(() => {
//         return new Promise((resolve, reject) => {
//             console.log('start_2')
//             setTimeout(() => {
//                 console.log(2)
//                 resolve();
//             }, 2000)
//         })
//     })
//     .then(() => {
//         console.log('start_3')
//         setTimeout(() => {
//             console.log(3)
//         }, 500)
//     });

// ---------------


// let async1 = new Promise((resolve, reject) => {
//     console.log('start_1')
//     setTimeout(() => {
//         resolve(1)
//     }, 1000);
// })

// let async2 = new Promise((resolve, reject) => {
//     console.log('start_2')
//     setTimeout(() => {
//         resolve(2)
//     }, 1500);
// })

// let async3 = new Promise((resolve, reject) => {
//     console.log('start_3')
//     setTimeout(() => {
//         resolve(3)
//     }, 4000);
// })


// let arrayOfPromises = [async1, async2, async3];

// Promise
//     .all(arrayOfPromises)
//     .then(values => {
//         console.log(values)
//     })

// ---------------

let listOfOper = [
    (resolve, reject) => {setTimeout(() => {resolve(1)}, 500)},
    (resolve, reject) =>{setTimeout(() => {resolve(2)}, 1500)},
    (resolve, reject) => {setTimeout(() => {resolve(3)}, 2500)}
]

function doSyncOper(list, flag){
    let arrayOfPromises =  list.reduce((prev, cur) => {
        prev.push(new Promise(cur))
        return prev;
    }, [])

    if(flag) {
        return Promise
            .all(arrayOfPromises)
            .then(values => console.log(values))
    }

    return arrayOfPromises
        .reduce((prev, cur) => cur.then(result => {
            console.log(result);
           
            return result;
        }), {});
}

doSyncOper(listOfOper, false)