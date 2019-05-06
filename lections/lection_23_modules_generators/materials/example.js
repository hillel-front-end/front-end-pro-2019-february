

let x = 10;
let y = 'hello';

let foo = () => {}

console.log('EXAMPLE MODULE');


export default {
    adaptXForModule: x,
    y,
}

export let dodo = 200;
export let getDodo = () => dodo;
export let setDodo = (val) => {
    dodo = val;
};

// export default class {
//     constructor(){

//     }

//     ge22(){}
// }