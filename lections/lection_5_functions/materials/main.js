console.log('Lection_5');


// function sum(x, y){
//     console.log('sum', x, y);
    
//     res = x + y;
// }
// res = null;

// // sum(8, 12);

// sum('asfas', 89);
// console.log(res); // 20

// console.log(x); // error

// -----------------------------------------------

// function creation

// function declaration


// sum();

// function sum() {
//     console.log('sum');
// }


// // function expression

// sum1 = function(){
//     console.log('sum1')
// }

// sum1();


// --------------------------------------


function diff(a, b){
    // console.log(a - b);
    // res = a - b;
    return a - b;

    // return undefined; // default value
}


res = 10 - diff(8, 6);

// console.log(res)



// -----------------------------------

function fillArray(list){
    for(i = 0; i < list.length; i++){
        list[i] = Math.floor(Math.random()*10);
    }
}

A = new Array(20);
fillArray(A);
// console.log(A);

// -----------------------------------


function concatArrays(a, b, c, isUniq) {
    fullList = a.concat(b, c);
    resList = [];

    if(isUniq) {
        for(i = 0; i < fullList.length; i++){
            if(resList.indexOf(fullList[i]) == -1 ){
                resList.push(fullList[i]);
            }
        }

        return resList;
    } else {
        return fullList;
    }    
}



list1 = [7, 8, 7, 3, 3, 4, 7, 7, 7]
list2 = [2, 9, 0, 9, 2]
list3 = [4, 9, 5, 2, 6]

superArr = concatArrays(list1, list2, list3, true);
console.log(superArr);