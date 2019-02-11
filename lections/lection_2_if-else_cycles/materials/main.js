console.log("Lection_2");

/*
+ bool
+ logical and or
+ if else
+ if else if else // at home
+ тернарный оператор ? // at home
+ циклы основы
+ while () {}
+ do {} while()
+ for(){}

*/

// x = 25;
// console.log( ++x ); 
// console.log(x);


// ------------------------------------

// x = 0;

// if ( x < 7 && x != 0 ) {
//     console.log(x, 'x < 7');
// } else {
//     console.log('what');
// }



// -------------------------------------

// NaN

ss = NaN;

// if (ss == NaN) { // incorrect
//     console.log('ss is NaN')
// }

// if (isNaN(ss)) { // correct
//     console.log('ss is NaN')
// }

// a = +prompt(); // Number or NaN
// b = 23;

// if (!isNaN(a) && !isNaN(b)) {
//     console.log(a + 10 - b)
// } else {
//     console.log('invalid values');
// }

// ------------------------------

// i = 0; // counter

// while ( i < 10 ) {
//     i++;
//     console.log(i);
// }

// console.log('--------------------')

// i = 0;
// do {
//     i++;
//     console.log(i);
// } while( i < 10);

// ------------------------------


// for(i = 0; i <= 10; i++){
//     console.log(i);
// }

// --------------------
// sum = 0;
for(i = 0, sum = 0; (i <= 50 && sum <= 100); sum += i, i++ ){
    console.log(i);
    // sum+=i;
}

console.log(sum)
