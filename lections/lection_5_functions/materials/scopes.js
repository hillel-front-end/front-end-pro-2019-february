


var x = 10;
y = 20;


function f1(a, b) {
    f2(x*20);
    
    function f2(x){ // function declaration <==> local variable
        console.log(x, a, b, y);
    }
}


f1(x);

// f2(); // error