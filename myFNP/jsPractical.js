
let Date = {
    weight : 1024,
    lenght: 1234,
    color: "blue",
    name: "Bob",
    age: 22
};
console.log(Date.age);
Date.bool = true;
delete Date.color;
Date.colors = {
    border : "green",
    wall : "black",
    lags : "white"
};

console.log(Date);
for (let key in Date){
    console.log("options " + key + " have a value " + Date[key]);
}
console.log(Object.keys(Date).length);

