
// let Date = {
//     weight : 1024,
//     lenght: 1234,
//     color: "blue",
//     name: "Bob",
//     age: 22
// };
// console.log(Date.age);
// Date.bool = true;
// delete Date.color;
// Date.colors = {
//     border : "green",
//     wall : "black",
//     lags : "white"
// };

// console.log(Date);
// for (let key in Date){
//     console.log("options " + key + " have a value " + Date[key]);
// }
// console.log(Object.keys(Date).length);

// let arr = [1,2,3,4,5];
// // arr.push(6);
// // arr.pop(-1);
// // arr.shift();
// // arr.unshift();
// console.log(arr);

// // for (i = 0; i > arr.length; i++) {
// //     console.log(arr[i]);
// // }
// arr.forEach(function(item,i,mass){ 
//     console.log(i + ': '+ item + ' massive:' + mass + ')');

// })

// let ans = prompt('', ''),
// arr = [];
// arr = ans.split(',');
// console.log(arr);

// let arr = ['a' , 'b ', 'c' , 'd'],
// i = arr.join(', ');
// console.log(i);


let arr = [1,15,4],
i = arr.sort(compareNum);
function compareNum(a,b){
    return a - b;
}
console.log(arr);