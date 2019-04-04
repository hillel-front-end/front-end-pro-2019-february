console.log('Lection_16');




let list = [1, 7, 8,,,,,,,, 9, 5, 56, 67]



list.forEach((item, pos, arr) => {
    // arr[20] = 'HELLO'
    // console.log(item, pos, arr);
})

let filtredList = list.filter((item, pos, arr) => {
    if (pos === 10) {
        return false;
    }
    return item > 4;
    // return true|false
})

// console.log(filtredList)


let mapList = list.map((item, pos, arr) => {
    // return {
    //     value: item,
    //     position: pos
    // };
    return item * 2;
});
// console.log(mapList);


let isCriteriaTrueEvery = list.every(item => {
    return typeof item === 'number'
})

// console.log(isCriteriaTrueEvery)

// ---------------------------

let isCriteriaTrueSome = list.some((item, i) => {
    if (i == 2) {
        return true;
    }
    
    return false
})

// console.log(isCriteriaTrueSome)


// ---------------------------

// reduce



// let sum = list.reduce((prev, item) => prev + item);
// console.log(sum);

// let sum = list.reduce((prev, item) => prev + item);

// let struct = list.reduce(function(prev, item, pos){
//     prev['position-'+pos] = item;

//     return prev;
// }, {});

// console.log(struct)


// ---------------------------------------------


window.onload = function() {

    let btns = document.querySelectorAll('.btns')

    btns.forEach((item, index) => {
        item.addEventListener('click', event => {
            console.log(event.target, index);
        })
    })

    for(var i = 0; i < btns.length; i++){
        btns[i].addEventListener('click', (event) => {
            console.log(event.target, i);
        })
    }

    //fix
    // for(var i = 0; i < btns.length; i++){
    //     btns[i].addEventListener('click', function(index, event){
    //         console.log(event.target, index);
    //     }.bind(null, i))
    // }


    // console.log(btns)
}


// 

let numbers = [1, '22', 3, 4, 'h5', '+3', '-7', '!23g']

let res = numbers
    .map(item => +item)
    .filter(item => !isNaN(item))
    .forEach((item, pos) => {
        // console.log('item['+pos+']='+item);
    })
// console.log(res)

// -----------------------------------

// template srings

let a = 10;
let str = `Hello ${getAStatus(a)} World`;
console.log(str);
function getAStatus(a) {
    return a > 0 ? `a > 0` : `a < 0`
}


let listOfItems = ['Title 1', 'Title 2', 'Title 3']

function getList() {
    return `
        <ul>
            ${
                listOfItems
                .map((item, pos) => `<li data-pos="${pos}" class="item">${item}</li>`)
                .join('')
            }
        </ul>
    `;
}

window.onload = function(){


    document.body.innerHTML = getList()

}