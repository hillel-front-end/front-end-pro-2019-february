console.log('Lection_4');


// list = [3, 8, 9, 'hello', false, 0];
// console.log(list, list.length);

// list.length = 4;

// console.log(list, list.length);

// list.length = 6;

// console.log(list, list.length);

// ---------------------------------

// list[list.length] = +prompt();
// console.log(list, list.length);

// ---------------------------------

// list = [2, 8, 6, 7, 8, 9];
// console.log(list, list.length);

// list[20] = 600;
// console.log(list, list.length, list[17]);

// list[3] = 900;
// console.log(list, list.length, list[17]);

// ---------------------------------

list = [2, 9, 6, 7, 87, 23, 56]; // через блок инициализации
list[30] = 900;
// list.length = 17;

sum = 0;
p = 1;
for(i = 0; i < list.length; i++){
    // console.log(list[i]);

    sum += list[i];
    p *= list[i];
}

// console.log('sum=', sum);
// console.log('mul=', p);

// ---------------------------------

arr = new Array(17); // через конструктор
// console.log(arr);


z = Math.floor(Math.random()*66 - 20);

// ---------------------------------

list = [];
list.length = 20;

for(i = 0; i < list.length; i++){
    list[i] = Math.floor(Math.random()*10 + 1);

    isPrime = true;
    for(j = 2; j <= list[i] - 1; j++){
        if(list[i] % j == 0) {
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        // console.log(list[i])
        // list[i] = undefined;
        
        for(k = i; k < list.length - 1; k++){
            list[k] = list[k + 1];
        }
        i--;
        list.length--;
    }
}

console.log(list);

// variant 2
// newList = [];
// for(i = 0; i < list.length; i++){
//     if(list[i] != undefined) {
//         newList[newList.length] = list[i];
//     }
// }
// console.log(newList)