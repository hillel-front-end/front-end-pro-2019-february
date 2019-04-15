console.log('Lection 18');

// var xhr = new XMLHttpRequest();

// xhr.addEventListener('readystatechange', function(){
//     if (xhr.readyState != 4) return;

//     console.log(xhr.responseText);
//     let response = JSON.parse(xhr.responseText);
    
//     console.log(response);
// })


// xhr.open('GET', '/data.json', true);
// xhr.send();

// ------------


// setTimeout(function(){
//     // console.log(1);
// }, 2000);

// console.log('step-1')
// let asyncFoo = new Promise(function(resolve, reject){
//     console.log('step-4')
//     setTimeout(function(){
//         let x = Math.floor(Math.random()*256);
//         console.log('x=', x);
//         if(x > 100) {
//             resolve({ respValue: x });
//         }else {
//             reject(x);
//         }
//     }, 1000)
//     // resolve();
//     // reject();
// });
// console.log('step-2')

// asyncFoo
//     .then(
//         function(value){
//             console.log('RESOLVED', value)
//         },
//         // function(value){
//         //     console.log('REJECTED', value)
//         // }
//     )
//     .catch(function(){
//         console.log('CATCH')
//     })

// console.log('step-3');
// console.log(asyncFoo);


// -----------------------------


let ajaxQuery = new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function(){
        if (xhr.readyState != 4) return;
        if (xhr.status != 200) 
            reject(xhr.statusText)
        else 
            resolve(JSON.parse(xhr.responseText));
    })


    xhr.open('GET', '/data.json', true);
    xhr.send();
})


ajaxQuery.then(
    resp => console.log(resp),
    error => console.log(error)
)