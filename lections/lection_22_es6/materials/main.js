console.log('Lection 22');

let info = {
    a: 10,
    x: "Hello",
    p() {},
    inner: {
        x: 80
    }
}

var {inner: {x}, x = null, p} = info;
// console.log(x, p);

// -------------------------------

let arr = [4,7,8,4,4,6,46,64,64];

let [first, second] = arr;
// console.log(first, second);

[arr[2], arr[5]] = [arr[5], arr[2]];
// console.log(arr);


// ---------------------------------
const DEFAULT_VALUE = undefined;


function sum(a = ['hello'], b = 0) {
    console.log(b)
}

let kl;

// sum(2, kl || DEFAULT_VALUE);

// ---------------------------------


class Animal {
    constructor(name, age, uniq){
        this.name = name;
        // this.age = age;

        this.uniqueBehavior = function(){}

        this.getAge = function(){
            return age;
        }

        setInterval(() => {
            if (true) {
                age++;
            }
        }, 5000)
    }

    sleep(){
        console.log(this.name + ' sleep')
    }

    getX(){
        return 10;
    } 

    static example(ar1, ar2){
        // bad code
        // console.log(new this(ar1, ar2, true).sleep())
        return new this(ar1, ar2, true).getX();
    }
}

var p = new Animal('Petya', 23);
// var k = new Animal('Petya', 12);
console.log( p )

let exp = Animal.example('Super Name', 99);
console.log(exp)

// ---------


class Context {
    constructor(type = 1) {
        let list = ['title 1', 'title 2', 'title 3'];

        this.type = type;
        this.getList = function() {
            return list;
        }
    }

    setType(type) {
        this.type = type;
    }

    apply(target){
        if(!target){return;}
        
        target.innerHTML += this.getTemplate();
    }

    getTemplate() {
        let list = this.getList();

        switch(this.type) {
            case 1: return `<ul>${list.map(item => `<li>${item}</li>`).join('')}</ul>`;
            case 2: return `<table>${list.map(item => `<tr><td>${item}</td></tr>`).join('')}</table>`;
            case 3: return `<div>${list.map(item => `<span>${item}</span>`).join('')}</div>`;
        };
    }

    static getInstance(prop ='ctx'){
        window[prop] = new Context();
    }
}