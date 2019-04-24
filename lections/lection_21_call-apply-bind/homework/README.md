# Изучить материал
* https://getinstance.info/articles/javascript/call-apply-and-bind-functions/
* https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
* https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
* https://learn.javascript.ru/call-apply#odalzhivanie-metoda
* https://frontender.info/demystifying-this-in-javascript/
# Практика

1) Написать функцию рассчета суммы всех чисельных свойств объекта, включая вложености. Функция не должна быть описана в структуре объекта.

2) напиши функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля:

        var characters = [
            { 'name': 'barney', 'age': 36 },
            { 'name': 'fred', 'age': 40 }
        ];

        console.log(pluck(characters, 'name')); // ['barney', 'fred']
