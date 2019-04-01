console.log('lection_15')




window.onload = function() {
    // var container = document.querySelector('.container');

    // creation
    var block = document.createElement('div');

    block.classList.add('elem', 'block-super');
    block.innerHTML = 'jasndlksad<br />asdasd'
    // console.log(block);

    // insertion

    // appendChild

    // document.body.appendChild(block);

    // document
    //     .querySelector('.container')
    //     .appendChild(block);

    // ---------------------------------

    // document
    //     .querySelector('.container')
    //     .appendChild(block);

    // document.body.appendChild(block);

    // setTimeout(() => {
    //     document
    //         .querySelector('.container')
    //         .appendChild(document.querySelector('.elem'))
        
    // }, 2000) 

    // ------------------------------------------

    // removing

    // console.log(block);
    // debugger;
    // block.remove();
    // console.dir(block);

    // attributes

    // setAttribute(), getAttribute()

    // console.log(block.getAttribute('class'));
    // block.setAttribute('foo', 'bar');


    // dataset

    // let example = document.querySelector('#example')
    // console.dir(example)

    // example.dataset.gender="male"
    // example.dataset.fooBarDar="Kurr"

    // console.log(example.dataset)

    // -----------------------

    // cloning
    // cloneNode()

    // var cloneElement = example.cloneNode();

    // console.log(example)
    // console.log(cloneElement)




    //

    let list = ['Hello', 'Super', 'Hero'];
    let targetList = document.querySelector('.list ul')

    for(let i = 0; i < list.length; i++){
        let li = document.createElement('li');
        li.innerHTML = list[i];
        targetList.appendChild(li);
    }
}