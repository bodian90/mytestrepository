// let num = 22;


// function showFirstMessage(text) {
//     alert(text);
//     console.log(num);
// };
// console.log(num);
// showFirstMessage("Hello");


//  let culc = function(a,b){ 
//     return a + b;
// }

let culc = (a,b) => a+b

    console.log(culc(2,4));

    console.log(culc(4,7));

function returnLet(){
    let num = 55;
    return num;
}

let otherNumber = returnLet();
console.log(otherNumber);

let word = "Hello";
console.log(word.length);

let math = '13.55px';
// console.log(Math.round(math));
console.log(parseInt(math));
console.log(parseFloat(math));


function first () {
    // somthing make
    setTimeout(function(){
        console.log(1)
    }, 50);
}
function second (){
    console.log(2);
}
first();
second();