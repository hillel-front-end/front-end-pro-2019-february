console.log('lection_28');


// var pattern = /some/i;

// search
// str = `so23me9860 пsOMEивет  шаблон прШабsomeлоноек8 8тированияшабЛон`;
// console.log(str.search(pattern));

str = `Hello world! 199 97756 8world 2019 world helloWo 2013`;
// match
// var result = str.match(/\d\d\d\d/i);
// console.log(result);

// //match /g
// result = str.match(/\d\d\d\d/gi);
// result = str.match(/\w{5,6}/gi);
// console.log(result);

// split
// console.log( '5343-12-34-56_89::98::23'.split(/:{1,2}|_|-/) );
// console.log( '5343-12-34-56_89::98::23'.split(/[:_-]{1,2}/) );
// console.log( 'teaxtAteaxtAteaxt'.split(/A/g) );

// // split examples
// console.log('132sd{template}kf12{}3|123a|lfknadsk|ljfn|123'.split(/{\w}/));

//replace
// console.log('12- 34- 56'.replace( /- /g, "-" ));
// -----------------

/*
 - классы и спецсимволы
 - диапазоны и наборы
 - квантификаторы +, *, ? и {n}
 - Альтернация
*/

var str = "A1988 год Как дела? Что делать?  Когда нет ничего в 18 лет.too"
// var result = str.match(/\b\D{2}\b/gi);
// var result = str.match(/\d{1,}\.{0,1}\d{0,}/gi);
// var result = str.match(/\d+(\.\d+)?/gi);
// var result = str.match(/[A-Za-zА-Яа-яіІїЇґҐ]{3}/gi);
// var result = str.replace(/(wod|woud)/g, '<span>$1</span>')
var result = str.match(/A(?=\d{4})/gi);
console.log(result)


// -----------------
// . ? [ ] { } & ^ \ / |
// \. \? \/ \& \|
// var str = `How are \\ \\ //\\\\ | yo hello.foo u \n \t \s \f [123] [123}`;
// // var result = str.match(/\[\d{3}\]/gi);
// // var result = str.match(/\/\/\\\\/g);
// var result = str.match(/hello\.foo/g);
// console.log(result)

// ----------------------------

// var str = "Hello Pet+a! Petтa Hello Petia! Hello Petra!";
// var result = str.match(/Pet[\w+-а-яїЇА-Я]a/gi);
// var result = str.match(/Pet[^i]a/gi);
// console.log(result);

// ----------------------------

// var str = "Hello Ivan! Hello Ivan Hello Ivan?";
// var result = str.match(/Hello Ivan[!.]?/gi);
// console.log(result);

// ----------------------------

// var str = "s12344236523 helo5 s s123 !hello s12.5 rhello 2018 2 rrhello 23 rrrhelllllllloooo";
// // var result = str.match(/s\d*/gi);
// var result = str.match(/hell?o/gi);
// console.log(result);

// ----------------------------

// var str = "homahomahoma123 homa123";
// var result = str.match(/[0-9.]+/gi);
// var result = str.match(/(homa){2}[\w\d]+\b/gi);
// var result = str.replace(/(homahoma)(.+)\b/g,"$2");
// console.log(result);

// ----------------------------


