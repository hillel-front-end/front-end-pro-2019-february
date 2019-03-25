console.log('Lection_13');


window.onload = function() {


    let elem = document.querySelector('.list li');
    // console.log(elem);

    // elem.style.backgroundColor = 'red';

    let elems = document.querySelectorAll('.list li');
    // console.log(elems); 

    for(let i = 0; i < elems.length; i++){
        elems[i].style.backgroundColor = 'red';
    }

    // setInterval(() => {
    //     for(let i = 0; i < elems.length; i++){
    //         elems[i].classList.toggle('animate')
    //     } 
    // }, 1000)

    // ---------------------------------------------------------------------


    let button = document.querySelector('.btn');

    // Mouse event
    // click

    function handler(event){
        console.log(event.type, event);
    }

    // button.onclick = handler;
    // button.onmousedown = handler;
    // button.onmouseup = handler;

    // button.onmouseover = handler;

    // button.onmouseout = handler;
    // button.onmousemove = handler;



    var block = document.querySelector('.block');

    // block.onmousemove = function(event){
    //     // console.log(event)

    //     event.target.innerHTML = 
    //     'X:' + event.clientX + 
    //     '<br />Y: '+ event.clientY + 
    //     '<br />inner X: ' + event.offsetX + 
    //     '<br />inner Y: ' + event.offsetY;
    // }

    // ---------------------------------------------------

    // block.onclick = function(ev){}

    function onMouseMove(ev){
        // if(!state.isDrag) return;
        // console.log('X"',ev.clientX, 'Y"', ev.clientY)
        state.block.style.left = ev.clientX - state.offsetX + "px";
        state.block.style.top = ev.clientY - state.offsetY + "px";
    }

    let state = {
        isDrag: false,
        offsetX: 0,
        offsetY: 0
    }

    block.addEventListener('mousedown', function(ev){
        // state.isDrag = true;
        state.offsetX = ev.offsetX;
        state.offsetY = ev.offsetY;
        state.block = ev.target;

        document.addEventListener('mousemove', onMouseMove);
        // console.log('X',ev.clientX, 'Y', ev.clientY)

        // document.addEventListener('mousemove', function(ev){
        //     if(!state.isDrag) return;

        //     // console.log('X"',ev.clientX, 'Y"', ev.clientY)
        //     state.block.style.left = ev.clientX - state.offsetX + "px";
        //     state.block.style.top = ev.clientY - state.offsetY + "px";
        // });

        document.addEventListener('mouseup', function(ev){
            // state.isDrag = false;
            document.removeEventListener('mousemove', onMouseMove);
        });
    });


    block.onclick=function(){}

    function f1Handler(){}
    block.addEventListener('click', f1Handler)
    block.addEventListener('click', function(){})
    block.addEventListener('click', function(){})
    block.addEventListener('click', function(){})

    // handler removing

    block.onclick = null;
    block.removeEventListener('click', f1Handler);    
}