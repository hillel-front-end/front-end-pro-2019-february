window.onload = function() {
    let text = document.querySelector('.block_text')

    // console.dir(text);

    // text.addEventListener('input', function(e){
    //     console.log(e.type)
    // })

    // text.addEventListener('change', function(e){
    //     console.log(e.type)
    // })

    // text.addEventListener('focus', function(e){
    //     console.log(e.type)
    // })

    // text.addEventListener('blur', function(e){
    //     console.log(e.type)
    // })

    // ---------------------------------

    

    let container = document.querySelector('.container')
    let block = document.querySelector('.block')


    function handler(e){
         console.log(e.type, this.className)
    }

    container.addEventListener('click', handler, true)
    block.addEventListener('click', handler, false)
    document.addEventListener('click', handler, true)
}