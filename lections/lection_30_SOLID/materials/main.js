console.log('Lection_30');

// SOLID

// SRP - The Single Responsibility Principle

// Каждый класс выполняет лишь одну задачу.

/*
Стереотипные роли объектов
Information holder — объект, содержащий какую-либо информацию и 
предоставляющий информацию другим объектам.
Structurer — объект, который поддерживает отношения между объектами и 
хранит информацию об их отношениях.
Service provider — объект, выполняющий специфичную функцию и предоставляющий 
    ее другим объектам.
Controller — объект, контролирующий выполнение задачи, принимающий решения.
   //  не желательно хранить данные, лишь управлять ими. Создаем data service
Coordinator — объект, который не принимает решений, но делегирует работу другим объектам.
Interfacer — объект, преобразующий информацию или запросы между другими объектами.
*/


class ArrayHillel {
    static filterBy(){}
}

// SR principle not observed
class Person {
    constructor(name, surname, email) {
        this.surname = surname;
        this.name = name;

        if (this.validateEmail(email)) {
            this.email = email;
        } else {
            console.error("Invalid email!");
        }
    }
    validateEmail(email) {
        var re = /\w+@\w+/i;
        return re.test(email);
    }
    greet() {
        alert("Hi! I'm " + this.name + ". You can reach me at " + this.email);
    }
}

// написать использование
// const p = new Person('Vasya', 'Popov', 'asdasdasdasdcom');
// console.log(p)



class PersonSP {
    constructor(name, surname, email) {
        this.email = email;
        this.name = name;
        this.surname = surname;
    }
    greet() {
        alert("Hi!");
    }
}

class Email {
    constructor(email) {
        if (this.validateEmail(email)) {
            this.email = email;
        } else {
            console.error("Invalid email!");
        }
    }
    validateEmail(email = this.email) {
        var re = /\w+@\w+/;
        return re.test(email);
    }
    static validate(email){
        this.validateEmail(email);
    }

    get get(){
        return this.email;
    }
}

// написать использование
// const p = new PersonSP('Vasya', 'Popov', new Email('asdasda@sdasdcom').get);
// console.log(p)




// OSP - The Open Closed Principle

// программные сущности … должны быть открыты для расширения, но закрыты для модификации.

let iceCreamFlavors = ['chocolate', 'vanilla'];
let iceCreamMaker = {
  makeIceCream(flavor) {
    if (iceCreamFlavors.indexOf(flavor) > -1) {
      console.log('Great success. You now have ice cream.');
    } else {
      console.log('Epic fail. No ice cream for you.');
    }
  },
  addFlavor(flavor) {
    iceCreamFlavors.push(flavor);
  },
//   changeFlavor(flavorPos, newVal){ // very bad
//     iceCreamFlavors[flavorPos] = newVal;
//   },
  removeFlavor(flavorPos){
    iceCreamFlavors.splice(flavorPos, 1);
  }
};

// iceCreamMaker.makeIceCream('vanilla')
// iceCreamMaker.addFlavor('berry')
// iceCreamMaker.changeFlavor(0, 'FOFO')
// iceCreamMaker.removeFlavor(1)
// iceCreamMaker.makeIceCream('berry')
// iceCreamMaker.makeIceCream('vanilla')
// console.log(iceCreamFlavors)



// LSP - The Liskov Substitution Principle

// объекты в программе должны быть заменяемыми на экземпляры их
// подтипов без изменения правильности выполнения программы

var rectangle = {
    length: 2,
    width: 20
};

var square = {};
function init() {
    var length = 0, width = 0;

    Object.defineProperty(square, 'length', {
        enumerable: true,
        get: function() { return length; },
        set: function(value) { 
            length = width = value;
        }
    });

    Object.defineProperty(square, 'width', {
        enumerable: true,
        get: function() { return width; },
        set: function(value) { 
            width = length = value;
         }
    });
}
init();

square.length = 5;
square.width = 7;

var g = function(rectangle) {
    rectangle.length = 3;
    rectangle.width = 4;
    console.log(rectangle.length);
    console.log(rectangle.width);
    console.log('square = ', rectangle.length * rectangle.width);
};


// описать разницу
// g(rectangle);
g(square);



// ISP - The Interface Segregation Principle

// много интерфейсов, специально предназначенных для клиентов, лучше, 
// чем один интерфейс общего назначения



// DIP - The Dependency Inversion Principle

// Зависимость на Абстракциях. Нет зависимости на что-то конкретное

// * Модули верхних уровней не должны зависеть от модулей нижних уровней.
//  Оба типа модулей должны зависеть от абстракций.
// * Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.