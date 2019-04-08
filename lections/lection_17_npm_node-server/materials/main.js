console.log('hi!');


var xhr = new XMLHttpRequest();
// readyState

xhr.addEventListener('readystatechange', function(){
    // console.log(xhr.readyState)
    if (xhr.readyState != 4) return;

    console.log(JSON.parse(xhr.responseText));
})


// debugger;
// GET, POST
xhr.open('GET', '/data.json', true);
// debugger




xhr.send();
// console.log(xhr.responseText);
// console.log(JSON.parse(xhr.responseText));

console.log('kuku')