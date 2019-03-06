console.log('lection 8 additional');


// двумерные массивы



var list = [];

var n = 10, m = 5;


var arr = new Array(n);

for(var i = 0; i < arr.length; i++){
    arr[i] = new Array(m);
    for(var j = 0; j < arr[i].length; j++){
        arr[i][j] = Math.floor(Math.random()*10);

        document.write(arr[i][j] + ' ')
    }

    document.write('<br />')
}

console.log(arr);

// ------------------------------
var max = arr[0][0];

for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
        if (arr[i][j] > max) {
            max = arr[i][j];
        }
    }
}
console.log(max)


// ------------------------------

document.write('<hr /><h1>List</h1>')

var n = 9, m = 9;


var list = new Array(n);
k = 3;

for(var i = 0; i < list.length; i++){
    list[i] = new Array(m);
    for(var j = 0; j < list[i].length; j++){
        list[i][j] = 0;

        // вертикальная линия
        // if(j == k) {
        //     list[i][j] = '*';
        // }

        // горизонтальная линия
        // if(i == k) {
        //     list[i][j] = '*';
        // }

        // главная диагональ
        // if(i == j) {
        //     list[i][j] = '*';
        // }

        // побочная диагональ
        // if(i + j + 1 == n) {
        //     list[i][j] = '*';
        // }

        // вертикальные зоны
        // if(j < k) {
        //     list[i][j] = '*';
        // }

        // горизонтальные зоны
        //  if(i > k) {
        //     list[i][j] = '*';
        //  }

        // ниже/выше чем главная диагональ
        // if(i > j) {
        //     list[i][j] = '*';
        // }

        // ниже/выше чем побочная диагональ
        // if(i + j + 1 < n) {
        //     list[i][j] = '*';
        // }


        //--------------------------------

        // сложенные условия
        center = n / 2 - 1;
        // if(i >= center && j >= center){
        //     list[i][j] = '*';
        // }

        if(i + j + 1 >= n && i <= center){
            list[i][j] = '*';
        }

        document.write(i + '' + j + ' ' )
    }

    document.write('<br />')
}


document.write('<hr />')

for(var i = 0; i < list.length; i++){
    for(var j = 0; j < list[i].length; j++){
        document.write(list[i][j] + ' ' );
    }
    document.write('<br />');
}
